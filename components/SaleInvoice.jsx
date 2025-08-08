"use client";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlinePrinter } from "react-icons/hi2";
import { InvoivePreview } from ".";
import { markRequiredInputs } from "@/utils/utils";
import instance from "../axios";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";
import Adapter from "./Adapter";
import QueryInput from "./QueryInput";
import VerifyInput from "./VerifyInput";

const SaleInvoice = () => {
  const router = useRouter();
  const handleAdd = () => {
    return {
      part_name: "",
      price: 0,
      quantity: 0,
    };
  };

  const handleDelete = (_) => {
    return true;
  };

  const handleUpdate = (updatedList) => {
    console.log("new upate");
    formData.products = updatedList;
    handleInputPruductChange();
  };

  const handleUpdateManual = (updatedList) => {
    console.log("new upate");
    formData.manual_products = updatedList;
    handleInputPruductChange();
  };

  const apiUrl = `/api/v2/stores/all`;
  const verifyVinApiUrl = `/api/v2/vin/`;

  const handleSelect = (selectedOption) => {
    formData["store_id"] = selectedOption.id;
    setFormData({ ...formData });
    console.log("Selected option:", selectedOption);
    // You can perform additional actions with the selected option here
  };

  const addInvoice = async (newData) => {
    try {
      await instance.post(`/api/v2/bill`, newData);

      router.back();
    } catch (error) {
      console.error(`Error add invoice: `, error.message);
    }
  };

  const fetchParts = async (query) => {
    return await instance.post(`/api/v2/vin/part/` + formData.vin, {
      query: query,
    });
  };

  const [previewInvoice, setPreviewInvoice] = useState(false);

  const togglePreviewInvoice = () => {
    setPreviewInvoice(!previewInvoice);
  };
  useEffect(() => {
    markRequiredInputs();
  }, []);

  const [formData, setFormData] = useState({
    store_id: 0,
    products: [],
    manual_products: [],
    total_amount: 0,
    discount: "0.0",
    maintenance_cost: "0.0",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addInvoice(formData);
  };

  const handleInputPruductChange = () => {
    const calculatedValue =
      formData.products.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0,
      ) +
        formData.manual_products.reduce(
          (total, item) => total + Number(item.price) * item.quantity,
          0,
        ) +
        Number(formData.maintenance_cost ?? 0) ?? 0;

    console.log(calculatedValue, formData.maintenance_cost, formData);
    const totalAmount = parseFloat(
      calculatedValue * 1.15 * (1 - (formData.discount ?? 0) / 100),
    ).toFixed(2);
    if (totalAmount != formData.total_amount) {
      setFormData({ ...formData, total_amount: totalAmount });
    }
  };

  const mapItemToString = (item) => {
    return `${item.oem_number} - ${item.type} `;
  };

  const handleForum = (e) => {
    const { name, value } = e.target;
    if (formData[name] != value) {
      formData[name] = value;
      setFormData({ ...formData });
    }
  };

  const handleInputChange = (value) => {
    setFormData({ ...formData, vin: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="text-primary text-2xl ">فاتورة جديدة</h3>
        <div className="space-y-12">
          <div className="pb-12">
            <h1>بحث رقم الشاصي - Verify VIN number</h1>
            <VerifyInput
              apiUrl={verifyVinApiUrl}
              onChange={handleInputChange}
              view={(data) => (
                <h4>
                  `{data.Make}-{data.Model}-{data.Year}`
                </h4>
              )}
            />
            <h1>المحل - Store</h1>
            <Dropdown apiUrl={apiUrl} onSelect={handleSelect} />
            <div className="sm:col-span-4">
              <label
                htmlFor="id"
                className="block text-lg font-medium leading-6 text-primary"
              >
                أسم الزبون - Client Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleForum}
                  type="text"
                  name="user_name"
                  id="user_name"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="id"
                className="block text-lg font-medium leading-6 text-primary"
              >
                رقم جوال الزبون - Client Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={handleForum}
                  type="text"
                  name="user_phone_number"
                  id="user_phone_number"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="id"
                className="block text-lg font-medium leading-6 text-primary"
              >
                ملاحظة - Note
              </label>
              <div className="mt-2">
                <input
                  onChange={handleForum}
                  type="text"
                  name="note"
                  id="note"
                />
              </div>
            </div>

            <h3 className="text-primary text-2xl col-span-4 ">
              {" "}
              معلومات الطلبية
            </h3>

            <Adapter
              initialList={[]}
              renderItem={(setItems, index, item, _) => (
                <div className="grid grid-cols-5 ">
                  <label
                    htmlFor="part_name"
                    className="block text-lg font-medium leading-6  text-primary col-span-3"
                  >
                    القطعة
                  </label>
                  <label
                    htmlFor="quantity"
                    className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full "
                  >
                    الكمية
                  </label>
                  <label
                    htmlFor="price"
                    className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full "
                  >
                    السعر
                  </label>
                  <QueryInput
                    fetchData={fetchParts}
                    onSelect={(item) => {
                      setItems("id", item.id, index);
                      setItems("part_name", mapItemToString(item), index);
                    }}
                    mapItemToString={mapItemToString}
                    classname="col-span-3"
                  />

                  <input
                    onChange={(e) => {
                      setItems(e.target.name, Number(e.target.value), index);
                    }}
                    id="quantity"
                    name="quantity"
                    type="number"
                    autoComplete="number"
                    min={0}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setItems(e.target.name, e.target.value, index);
                    }}
                    id="price"
                    name="price"
                    type="number"
                    min={0}
                    autoComplete="number"
                    required
                  />
                </div>
              )}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />

            <Adapter
              initialList={[]}
              renderItem={(setItems, index, item, _) => (
                <div className="grid grid-cols-5 ">
                  <label
                    htmlFor="part_name"
                    className="block text-lg font-medium leading-6  text-primary col-span-3"
                  >
                    القطعة
                  </label>
                  <label
                    htmlFor="quantity"
                    className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full "
                  >
                    الكمية
                  </label>
                  <label
                    htmlFor="price"
                    className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full "
                  >
                    السعر
                  </label>
                  <input
                    className="col-span-3"
                    onChange={(e) => {
                      setItems(e.target.name, e.target.value, index);
                    }}
                    id="part_name"
                    name="part_name"
                    type="text"
                    required
                  />

                  <input
                    onChange={(e) => {
                      setItems(e.target.name, Number(e.target.value), index);
                    }}
                    id="quantity"
                    name="quantity"
                    type="number"
                    autoComplete="number"
                    min={0}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setItems(e.target.name, e.target.value, index);
                    }}
                    id="price"
                    name="price"
                    type="number"
                    min={0}
                    autoComplete="number"
                    required
                  />
                </div>
              )}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onUpdate={handleUpdateManual}
            />

            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
              <label
                htmlFor="sub_total"
                className="block text-lg font-medium leading-6 text-primary flex-1"
              >
                خصم - Discount
              </label>
              <div className="mt-2 flex-1">
                <input
                  onChange={handleForum}
                  name="discount"
                  id="discount"
                  min={0}
                  max={100}
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div>
            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
              <label
                htmlFor="sub_total"
                className="block text-lg font-medium leading-6 text-primary flex-1"
              >
                شغل اليد - Maintenance Cost
              </label>
              <div className="mt-2 flex-1">
                <input
                  onChange={handleForum}
                  name="maintenance_cost"
                  id="maintenance_cost"
                  min={0}
                  defaultValue={0}
                  type="number"
                />
              </div>
            </div>
            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
              <label
                htmlFor="tax"
                className="block text-lg font-medium leading-6 text-primary flex-1"
              >
                الضريبة
              </label>
              <div className="mt-2 flex-1">
                <input id="tax" name="tax" type="text" value="15%" disabled />
              </div>
            </div>
            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
              <label
                htmlFor="total_amount"
                className="block text-lg font-medium leading-6 text-primary flex-1"
              >
                المجموع الكلى
              </label>
              <div className="mt-2 flex-1">
                <input
                  id="total_amount"
                  name="total_amount"
                  type="text"
                  value={formData.total_amount}
                  autoComplete="number"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between justify-center max-md:gap-6 items-center mt-6">
          <div className="flex flex-row gap-6 text-primary">
            <span className="block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100">
              <HiOutlinePrinter className="w-6 h-6" />
            </span>
            <span
              onClick={togglePreviewInvoice}
              className="block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100"
            >
              <HiOutlineEye className="w-6 h-6" />
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-6">
            <button type="button">حفظ مسودة</button>
            <button className="button-secondary" type="submit">
              حفظ الفاتورة
            </button>
          </div>
        </div>
      </form>
      {previewInvoice && (
        <InvoivePreview togglue={togglePreviewInvoice} data={formData} />
      )}
    </>
  );
};

export default SaleInvoice;

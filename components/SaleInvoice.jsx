"use client";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlinePrinter } from "react-icons/hi2";
import { markRequiredInputs } from "@/utils/utils";
import instance from "../axios";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";
import Adapter from "./Adapter";
import Loading from "./Loading";
import QueryInput from "./QueryInput";
import VerifyInput from "./VerifyInput";
import { useMemo } from "react";

const SaleInvoice = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    store_id: 0,
    products: [],
    manual_products: [],
    total_amount: "", // was 0
    discount: "0.0",
    maintenance_cost: "0.0",
    state: 1,
    vin: "",
    user_name: "",
    user_phone_number: "",
    note: "",
  });

  function mapResponseToForm(src = {}) {
    const asString = (v, fallback = "") => (v == null ? fallback : String(v));
    const asArray = (v) => (Array.isArray(v) ? v : []);

    return {
      store_id: src.store_id ?? 0,
      products: asArray(src.products),
      manual_products: asArray(src.manual_products),
      total_amount: src.total ?? asString(src.total, ""), // keep as string for controlled input
      discount: src.discount != null ? String(src.discount) : "0.0",
      maintenance_cost:
        src.maintenance_cost != null ? String(src.maintenance_cost) : "0.0",
      state: src.state ?? 1,
      vin: "", // response doesn't include vin
      user_name: src.user_name ?? "",
      user_phone_number: src.user_phone_number ?? "",
      note: src.note ?? "",
    };
  }

  useEffect(() => {
    // -------------------------------------------------
    // 2️⃣ Convert the id to a number
    // -------------------------------------------------
    const numericId = Array.isArray(id) ? NaN : Number(id);
    if (Number.isNaN(numericId)) {
      setLoading(false);
      return;
    }
    const fetchItem = async () => {
      try {
        const response = await instance.get(`/api/v2/bill/` + id);
        setFormData(mapResponseToForm(response.data));
        setLoading(false);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);
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
    console.log("@handleUpdate: upate - " + updatedList);
    formData.products = updatedList;
    handleInputPruductChange();
  };

  const handleUpdateManual = (updatedList) => {
    console.log("@handleUpdateManual: upate - " + updatedList);
    formData.manual_products = updatedList;
    handleInputPruductChange();
  };

  const apiUrl = `/api/v2/stores/all`;
  const verifyVinApiUrl = `/api/v2/vin/`;

  function clean(value) {
    if (Array.isArray(value)) {
      const arr = value.map(clean).filter((v) => v !== null && v !== undefined);
      return arr.length ? arr : undefined;
    }
    if (value && typeof value === "object") {
      const obj = Object.fromEntries(
        Object.entries(value)
          .map(([k, v]) => [k, clean(v)])
          .filter(([, v]) => v !== undefined),
      );
      return Object.keys(obj).length ? obj : undefined;
    }
    return value === null ? undefined : value;
  }

  const handleSelect = (selectedOption) => {
    // formData["store_id"] = selectedOption.id;
    setFormData((formData) => ({ ...formData, store_id: selectedOption.id }));
    // console.log("Selected option:", selectedOption);
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

  const updateInvoice = async (newData, id) => {
    try {
      await instance.post(`/api/v2/bill/` + id, newData);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buttonValue = e.nativeEvent.submitter.value;
    if (buttonValue === "temp") {
      formData.state = 0;
    } else {
      formData.state = 1;
    }
    const numericId = Array.isArray(id) ? NaN : Number(id);
    if (Number.isNaN(numericId)) {
      addInvoice(formData);
    } else {
      updateInvoice(formData, numericId);
    }
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
      setFormData((formData) => ({ ...formData, total_amount: totalAmount }));
    }
    return totalAmount;
  };
  const total = useMemo(handleInputPruductChange, [formData]);

  const mapItemToString = (item) => {
    return `${item.oem_number} - ${item.type} `;
  };

  const handleForum = (e) => {
    const { name, value } = e.target;
    if (formData[name] != value) {
      setFormData((formData) => ({ ...formData, [name]: value }));
      handleInputPruductChange();
    }
  };

  const handleInputChange = (value) => {
    setFormData({ ...formData, vin: value });
  };

  if (loading) {
    return <Loading />;
  }

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
                  defaultValue={formData.user_name}
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
                  defaultValue={formData.user_phone_number}
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
                  defaultValue={formData.note}
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
              initialList={formData.products ?? []}
              renderItem={(setItems, index, item, onDelete) => (
                <div className="grid grid-cols-6 ">
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
                    defaultValue={mapItemToString(item)}
                    mapItemToString={mapItemToString}
                    classname="col-span-3"
                  />

                  <input
                    onChange={(e) => {
                      setItems(e.target.name, Number(e.target.value), index);
                    }}
                    id="quantity"
                    defaultValue={item.quantity}
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
                    defaultValue={String(item.price)}
                    name="price"
                    type="text"
                    required
                  />
                  <button onClick={onDelete}>حذف</button>
                </div>
              )}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />

            <Adapter
              initialList={formData.manual_products ?? []}
              renderItem={(setItems, index, item, onDelete) => (
                <div className="grid grid-cols-6 ">
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
                    defaultValue={item.part_name}
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
                    defaultValue={item.quantity}
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
                    type="text"
                    defaultValue={String(item.price)}
                    min={0}
                    autoComplete="number"
                    required
                  />
                  <button onClick={onDelete}>حذف</button>
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
                  defaultValue={String(parseFloat(formData.maintenance_cost))}
                  type="text"
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
                  value={total}
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
            <button type="submit" value="temp">
              حفظ مسودة
            </button>
            <button className="button-secondary" type="submit" value="submit">
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

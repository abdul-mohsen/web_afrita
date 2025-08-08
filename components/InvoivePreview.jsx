"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const InvoivePreview = ({ togglue, data }) => {
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    const getTodayDate = () => {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];
      setTodayDate(formattedDate);
    };
    getTodayDate();
  }, []);

  const invoiceNumber = "رقم الفاتورة:TBD";
  const storeName = "اسم المتجر:TBD";
  const storeAddress = "عنةان المتجر:TBD";
  const date = "تاريخ:TBD";
  const vatNumber = "رقم تسحيل ضريبة القيمة المضافة:TBD";
  const combinedList = [...data.products, ...data.manual_products];
  const updatedList = [...combinedList, data.maintenance_cost];
  const result = updatedList.map((item) => {
    var productName = "Labor cost";

    var quentity = 1;
    var unitPrice = 0;
    var priceBeforeVat = 0;
    var vatAmount = 0;
    var total = 0;
    var price = 0;

    if (typeof item === "string") {
      price = round(parseFloat(item), 2);
    } else {
      quentity = item.quantity;
      price = round(parseFloat(item.price), 2);
      productName = item.part_name;
      console.log(item);
    }
    unitPrice = price;
    priceBeforeVat = round(price * quentity, 2);
    vatAmount = round(priceBeforeVat * 0.15, 3);
    total = round(vatAmount + priceBeforeVat, 2);
    return {
      unitPrice: unitPrice,
      priceBeforeVat: priceBeforeVat,
      vatAmount: vatAmount,
      total: total,
      productName: productName,
      quentity: quentity,
    };
  });

  const total = round(
    result.reduce((a, i) => a + i.total, 0),
    2,
  );
  const subtotal = round(
    result.reduce((a, i) => a + i.priceBeforeVat, 0),
    2,
  );
  const vatTotal = round(
    result.reduce((a, i) => a + i.vatAmount, 0),
    2,
  );

  return (
    <div
      id="invoice-preview"
      className="fixed flex w-screen h-screen overflow-y-auto overflow-x-hidden top-0 right-0 z-40 justify-center items-start padding"
    >
      <div className="overlay fixed bg-black/30 w-screen h-screen top-0"></div>
      <div className="relative z-50 bg-white w-full md:w-fit p-8 rounded-lg">
        <form id="form-preview" action="post" className="max-w-[600px]">
          <h1 className="text-primary text-2xl text-center">
            فاتورة ضريبية مبسطة
          </h1>
          <h2 className="text-primary text-2xl text-center">{invoiceNumber}</h2>
          <h3 className="text-primary text-2xl text-center">{storeName}</h3>
          <h3 className="text-primary text-2xl text-center">{storeAddress}</h3>
          <h4 className="text-primary text-2xl text-right">{date}</h4>
          <h4 className="text-primary text-2xl text-right">{vatNumber}</h4>
          <div className="space-y-6 pb-6">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4 pb-6">
              <div className=" invoice-row sm:col-span-4 flex flex-col bg-white">
                <div className="invoice-details flex flex-row dasshed-b">
                  <div className="details flex-1 grid grid-cols-6 text-app-gray  py-6">
                    <h3 className="item-name ">المنتجات</h3>
                    <span className="item-number">الكمبة</span>
                    <span className="item-price">سعر الوحدة</span>
                    <span className="pricy-before-vat">السعر قبل الضريبة</span>
                    <span className="total-quantity">ضريبة القيمة المضافة</span>
                    <span className="item-place">
                      العسر شامل ضريبة القيمة المضافة
                    </span>
                  </div>
                </div>
                <ul>
                  {result.map((item, index) => (
                    <li key={index}>
                      <ListItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 col-span-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center ">
                  <label
                    htmlFor="total"
                    className="block text-lg font-medium leading-6 text-gray-900 flex-1"
                  >
                    اجمالي المبلغ الخاضع للضريبة
                  </label>
                  <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                    <input
                      id="total"
                      name="total"
                      type="text"
                      autoComplete="number"
                      disabled
                      value={subtotal}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                  <label
                    htmlFor="tax"
                    className="block text-lg font-medium leading-6 text-gray-900 flex-1"
                  >
                    ضريبة القيمة المضافة(%15)
                  </label>
                  <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                    <input
                      id="tax"
                      name="tax"
                      type="text"
                      value={vatTotal}
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                  <label
                    htmlFor="total-amount"
                    className="block text-lg font-medium leading-6 text-gray-900 flex-1"
                  >
                    المجموع مع الضريبة(%15)
                  </label>
                  <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                    <input
                      id="total-amount"
                      name="total-amount"
                      type="text"
                      value={total}
                      autoComplete="number"
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-x-6 text-white">
            <span
              onClick={togglue}
              className="absolute cursor-pointer top-0 left-0 text-lg font-semibold leading-6 bg-secondry p-2 rounded-full -translate-x-1/2 -translate-y-1/2"
            >
              <HiOutlineXMark />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const round = (n, d) => Math.round(n * 10 ** d) / 10 ** d;
const ListItem = ({ item }) => {
  return (
    <div className="invoice-details flex flex-row dasshed-b ">
      <div className="details flex-1 grid grid-cols-6 text-app-gray  py-6">
        <h3 className="item-name text-primary font-bold">{item.productName}</h3>
        <span className="item-number">{item.quentity}</span>
        <span className="item-price">{item.unitPrice}</span>
        <span className="total-quantity fo">{item.priceBeforeVat}</span>
        <span className="total-quantity fo">{item.vatAmount}</span>
        <span className="item-place">{item.total}</span>
      </div>
    </div>
  );
};

export default InvoivePreview;

'use client'
import React, { useEffect, useState } from 'react'
import { HiOutlineXMark } from 'react-icons/hi2';
import { PiSignatureLight } from 'react-icons/pi';

const InvoivePreview = ( {togglue }) => {
    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {
      const getTodayDate = ( ) => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setTodayDate(formattedDate);
      };
      getTodayDate();
    }, []);

  return (
    <div id="invoice-preview" className="fixed flex w-screen h-screen overflow-y-auto overflow-x-hidden top-0 right-0 z-40 justify-center items-start padding" >
      <div className="overlay fixed bg-black/30 w-screen h-screen top-0"></div>
      <div className='relative z-50 bg-white w-full md:w-fit p-8 rounded-lg' >
        <form id='form-preview' action="post" className="max-w-[600px]">
          <h3 className='text-primary text-2xl text-center'>فاتورة شراء</h3>
          <div className="space-y-6 pb-6">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4 pb-6">
              <div className="sm:col-span-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 border-b border-gray-900/10 pb-6">
                <div className="sm:col-span-4">
                  <label
                      htmlFor="product-name"
                      className="block text-lg font-bold leading-6 text-app-gray">
                      معلومات المورد
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="text"
                      name="product-name"
                      id="product-name"
                      autoComplete="given-name"
                      placeholder=''
                      disabled
                      value={"شركة سداد"}
                      className="block w-full border-0 border-b py-1.5 text-app-gray sm:text-lg sm:leading-6 bg-app-light-gray"/>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="invoice-name"
                    className="block text-lg font-bold leading-6 text-app-gray">تاريخ الفاتورة</label>
                  <div className="mt-2">
                    <input
                        type="date"
                        name="invoice-name"
                        id="invoice-name"
                        value={todayDate}
                        disabled
                        autoComplete="given-name"
                        className="block w-full border-0 border-b py-1.5 text-app-gray sm:text-lg sm:leading-6  bg-app-light-gray"/>
                  </div>
                </div>
              </div>

              <div className=" invoice-row sm:col-span-4 flex flex-col bg-white">
                  <div
                    className="invoice-details flex flex-row dasshed-b">
                    <div className="details flex-1 grid grid-cols-5 text-app-gray  py-6">
                        <h3 className='item-name '>اسم المنتج</h3>
                        <span className="item-number">سعر القطعة</span>
                        <span className="item-price">الكمية</span>
                        <span className="total-quantity">الضريبة</span>
                        <span className="item-place">اجمالى لفاتورة</span>
                    </div>
                  </div>

                  <div
                      className="invoice-details flex flex-row dasshed-b ">
                      <div className="details flex-1 grid grid-cols-5 text-app-gray  py-6">
                          <h3 className='item-name text-primary font-bold'>سماعات </h3>
                          <span className="item-number">500 ر.س</span>
                          <span className="item-price">500</span>
                          <span className="total-quantity fo">14%</span>
                          <span className="item-place"> 500 ر.س</span>
                      </div>
                  </div>
              </div>

              <div className="mt-10 col-span-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center ">
                  <label htmlFor="total" className="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع</label>
                  <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                    <input
                        id="total"
                        name="total"
                        type="text"
                        autoComplete="number"
                        disabled
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                  <label htmlFor="tax" className="block text-lg font-medium leading-6 text-gray-900 flex-1">الضريبة</label>
                  <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                    <input
                        id="tax"
                        name="tax"
                        type="text"
                        value="14%"
                        disabled
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                    <label htmlFor="total-amount" className="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع الكلى</label>
                    <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                      <input
                          id="total-amount"
                          name="total-amount"
                          type="text"
                          autoComplete="number"
                          disabled
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                    </div>
                </div>
              </div>

              <div className="col-span-4 grid grid-cols-1 gap-8 sm:grid-cols-4">
                <div className=" flex flex-row flex-wrap col-span-2 gap-x-6 items-center ">
                  <label htmlFor="tax-number" className="block text-lg font-medium leading-6 text-gray-900 flex-1">الرقم الضريبى</label>
                  <div className="mt-2 flex-1 dasshed-all p-1 rounded-md">
                    <input
                        id="tax-number"
                        name="tax-number"
                        type="text"
                        disabled
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div className=" flex flex-row flex-wrap col-span-2 gap-x-6 items-center">
                  <span className="block text-lg font-medium leading-6 text-gray-900 flex-1">توقيع المورد</span>
                  <div className="mt-2 flex-1">
                      <PiSignatureLight className='w-20 h-20' />
                  </div>
                </div>
              </div>
            </div>  
          </div>

          <div className=" flex items-center justify-center gap-x-6 text-white">
              <span onClick={togglue} className="absolute cursor-pointer top-0 left-0 text-lg font-semibold leading-6 bg-secondry p-2 rounded-full -translate-x-1/2 -translate-y-1/2">
              <HiOutlineXMark />
              </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InvoivePreview
'use client';
import { useState } from "react";
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlinePrinter } from 'react-icons/hi2';
import { InvoivePreview } from ".";
import React from 'react';

const PurchasesInvoice = () => {

    const [previewInvoice, setPreviewInvoice] = useState(false);

  const togglePreviewInvoice = () => {
    setPreviewInvoice(!previewInvoice);
  };


  return (
    <>
    <form className="max-w-[600px]">
                <h3 className='text-primary text-2xl '>فاتورة جديدة</h3>
                <div className="space-y-12">
                    <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div className="sm:col-span-4">
                                <label
                                    for="invoice-number"
                                    className="block text-lg font-medium leading-6 text-gray-900">رقم الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="invoice-number"
                                        id="invoice-number"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="supplier-number" className="block text-lg font-medium leading-6 text-gray-900">رقم المورد</label>
                                <div className="mt-2">
                                    <select
                                    id="supplier-number"
                                    name="supplier-number"
                                    autoComplete="supplier-number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                                    <option># 0002</option>
                                    <option># 0003</option>
                                    <option># 0004</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    for="supplier-name"
                                    className="block text-lg font-medium leading-6 text-gray-900">اسم المورد</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supplier-name"
                                        id="supplier-name"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            
                            <div className="sm:col-span-4">
                                <label
                                    for="product-name"
                                    className="block text-lg font-medium leading-6 text-gray-900">الرقم الضريبي</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        placeholder='615243'
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    for="product-name"
                                    className="block text-lg font-medium leading-6 text-gray-900"> تاريخ الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            
                            <div className="sm:col-span-4">
                                <label
                                    for="product-name"
                                    className="block text-lg font-medium leading-6 text-gray-900"> رقم فاتورة المورد</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            

                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                        <h3 className='text-primary text-2xl col-span-4 '> محتويات الفاتورة </h3>
                            <div className="md:col-span-2 col-span-4">
                                <label
                                    for="item-number"
                                    className="block text-lg font-medium leading-6 text-gray-900">القطعة</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="item-number"
                                        id="item-number"
                                        autocomplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="md:col-span-1 max-md:col-span-2 max-sm:col-span-4  flex flex-row flex-wrap gap-x-6">
                                <label for="amount" className="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">الكمية</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        autocomplete="number"
                                        min={0}

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                                
                            <div className="md:col-span-1 max-md:col-span-2 max-sm:col-span-4  flex flex-row flex-wrap gap-x-6">
                                <label for="amount" className="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">السعر</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="item-price"
                                        name="item-price"
                                        type="number"
                                        min={0}
                                        autocomplete="number"
 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label for="total" className="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="total"
                                        name="total"
                                        type="text"
                                        autocomplete="number"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label for="tax" className="block text-lg font-medium leading-6 text-gray-900 flex-1">الضريبة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="tax"
                                        name="tax"
                                        type="text"
                                        value="14%"
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label for="total-amount" className="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع الكلى</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="total-amount"
                                        name="total-amount"
                                        type="text"
                                        autocomplete="number"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:justify-between justify-center max-md:gap-6 items-center mt-6">
                    <div className='flex flex-row gap-6 text-primary'>
                        <span className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
                            <HiOutlinePrinter className='w-6 h-6' />
                        </span>
                        <span onClick={togglePreviewInvoice} className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
                            <HiOutlineEye className='w-6 h-6' />
                        </span>
                    </div>
                    <div className='flex items-center justify-end gap-x-6'>

                        <button
                            type="button" 
                            className="rounded-md md:py-4 py-2 px-6 text-sm font-semibold leading-6 text-primary border-2 border-primary">حفظ مسودة</button>
                        <button
                            type="submit"
                            className="rounded-md bg-primary md:py-4 py-2 px-6 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-2 border-primary">حفظ الفاتورة</button>
                    </div>

                </div>
            </form>
            {previewInvoice && <InvoivePreview togglue={togglePreviewInvoice} />}
            
            </>
  )
}

export default PurchasesInvoice
'use client';
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlinePrinter } from "react-icons/hi2";
import { InvoivePreview } from ".";

const SaleInvoice = () => {
    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {

      const getTodayDate = () => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setTodayDate(formattedDate);
      };

      getTodayDate();
    }, []);
    
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
                                    for="invoice-name"
                                    className="block text-lg font-medium leading-6 text-gray-900">رقم الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="invoice-name"
                                        id="invoice-name"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    for="invoice-date"
                                    className="block text-lg font-medium leading-6 text-gray-900"> تاريخ الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="invoice-date"
                                        id="invoice-date"
                                        value={todayDate}
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    for="tax-number"
                                    className="block text-lg font-medium leading-6 text-gray-900">الرقم الضريبي</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="tax-number"
                                        id="tax-number"
                                        placeholder='615243'
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    for="client-name"
                                    className="block text-lg font-medium leading-6 text-gray-900">اسم العميل</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="client-name"
                                        id="client-name"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    for="order-number"
                                    className="block text-lg font-medium leading-6 text-gray-900"> رقم الطلبية</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="order-number"
                                        id="order-number"
                                        autocomplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            

                        </div>
<div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 border-b border-gray-900/10 pb-12">
                        <h3 className='text-primary text-2xl col-span-4 '> معلومات الطلبية</h3>
                            <div class="col-span-4 md:col-span-2">
                                <label
                                    for="item-number"
                                    class="block text-lg font-medium leading-6 text-gray-900">القطعة</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="item-number"
                                        id="item-number"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                           <div className='col-span-4 md:col-span-2 flex w-full  gap-x-6'>
                             <div class=" flex flex-row flex-wrap gap-x-6">
                                <label for="amount" class="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">الكمية</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        autocomplete="number"
                                        min={0}

                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                                
                            <div class="  flex flex-row flex-wrap gap-x-6">
                                <label for="amount" class="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">السعر</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="item-price"
                                        name="item-price"
                                        type="number"
                                        min={0}
                                        autocomplete="number"
 
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                           </div>
                            <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                                <label for="total" className="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="total"
                                        name="total"
                                        type="text"
                                        autocomplete="number"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
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
                            <div className=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                                <label for="total-amount" className="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع الكلى</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="total-amount"
                                        name="total-amount"
                                        type="text"
                                        autocomplete="number"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <div className='flex flex-row gap-6 text-primary'>
                        <span className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
                            <HiOutlinePrinter className='w-6 h-6' />
                        </span>
                        <span  onClick={togglePreviewInvoice} className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
                            <HiOutlineEye className='w-6 h-6' />
                        </span>
                    </div>
                    <div className='flex items-center justify-end gap-x-6'>

                        <button
                            type="button" 
                            className="rounded-md py-4 px-6 text-sm font-semibold leading-6 text-gray-900 border-2 border-primary">حفظ مسودة</button>
                        <button
                            type="submit"
                            className="rounded-md bg-primary px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-2 border-primary">حفظ الفاتورة</button>
                    </div>

                </div>
            </form>
            {previewInvoice && <InvoivePreview togglue={togglePreviewInvoice} />}
            
    </>
    )
}

export default SaleInvoice
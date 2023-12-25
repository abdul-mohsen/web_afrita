'use client';
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlinePrinter } from "react-icons/hi2";
import { InvoivePreview } from ".";
import { markRequiredInputs } from '@/utils/utils';

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
    useEffect(() => {
        markRequiredInputs();
    }, []);
    const [formData, setFormData] = useState( {
        invoice_number: '',
        invoice_date: todayDate,
        tax_number:  0,
        client_name: '',
        order_number: '',
        item_number: 0,
        quantity: 0,
        item_price: 0,
        total: 0,
        tax: 0,
        total_amount: 0,
    }); 
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                                    htmlFor="invoice_number"
                                    className="block text-lg font-medium leading-6 text-primary">رقم الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        value={"INV-0001"}
                                        disabled
                                        type="text"
                                        name="invoice_number"
                                        id="invoice_number"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 cursor-not-allowed"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="invoice_date"
                                    className="block text-lg font-medium leading-6 text-primary"> تاريخ الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="invoice_date"
                                        id="invoice_date"
                                        value={todayDate}
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6 cursor-not-allowed"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="tax_number"
                                    className="block text-lg font-medium leading-6 text-primary">الرقم الضريبي</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="tax_number"
                                        id="tax_number"
                                        value='615243'
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6 cursor-not-allowed"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="client_name"
                                    className="block text-lg font-medium leading-6 text-primary">اسم العميل</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name="client_name"
                                        id="client_name"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="order_number"
                                    className="block text-lg font-medium leading-6 text-primary"> رقم الطلبية</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name="order_number"
                                        id="order_number"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <h3 className='text-primary text-2xl col-span-4 '> معلومات الطلبية</h3>
                            <div className="md:col-span-2 col-span-4">
                                <label
                                    htmlFor="item_number"
                                    className="block text-lg font-medium leading-6 text-primary">القطعة</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name="item_number"
                                        id="item_number"
                                        autoComplete="family-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="md:col-span-1 max-md:col-span-2 max-sm:col-span-4 flex flex-row flex-wrap gap-x-6">
                                <label htmlFor="quantity" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">الكمية</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.quantity}
                                        id="quantity"
                                        name="quantity"
                                        type="number"
                                        autoComplete="number"
                                        min={0}
                                        required

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                                
                            <div className="md:col-span-1 max-md:col-span-2 max-sm:col-span-4 flex flex-row flex-wrap gap-x-6">
                                <label htmlFor="item_price" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">السعر</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.item_price}
                                        id="item_price"
                                        name="item_price"
                                        type="number"
                                        min={0}
                                        autoComplete="number"
                                        required

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label htmlFor="total" className="block text-lg font-medium leading-6 text-primary flex-1">المجموع</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        value={formData.total}
                                        readOnly
                                        id="total"
                                        name="total"
                                        type="text"
                                        autoComplete="number"
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label htmlFor="tax" className="block text-lg font-medium leading-6 text-primary flex-1">الضريبة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="tax"
                                        name="tax"
                                        type="text"
                                        value="14%"
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-app-light-gray font-bold text-app-gray sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label htmlFor="total_amount" className="block text-lg font-medium leading-6 text-primary flex-1">المجموع الكلى</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="total_amount"
                                        name="total_amount"
                                        type="text"
                                        autoComplete="number"
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
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
                        <span  onClick={togglePreviewInvoice} className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
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
export default SaleInvoice
'use client';
import { useState } from "react";
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlinePrinter } from 'react-icons/hi2';
import { InvoivePreview } from ".";
import React from 'react';
import Dropdown from "./Dropdown";
import Adapter from "./Adapter";
import QueryInput from "./QueryInput";
import instance from "@/axios";

const PurchasesInvoice = () => {

    const [previewInvoice, setPreviewInvoice] = useState(false);
    const togglePreviewInvoice = () => {
        setPreviewInvoice(!previewInvoice);
    };

    const fetchParts = async (query) => {
        return await instance.post(
            `/api/v2/part/`,
            { query: query });

    }

    const fetchTypes = async (query) => {
        return await instance.post(`/api/v2/part/`);

    }

    const [formData, setFormData] = useState({
        total_amount: 0,
    });

    const handleAdd = () => {
        return {
            part_name: "",
            price: 0,
            quantity: 0,
        }
    };

    const handleDelete = (_) => {
        return true;
    };

    const handleUpdate = (updatedList) => {
        console.log("new upate")
        formData.products = updatedList
        handleInputPruductChange()
    };

    const handleSelect = (selectedOption) => {
        formData["store_id"] = selectedOption.id
        setFormData({ ...formData })
        console.log('Selected option:', selectedOption);
        // You can perform additional actions with the selected option here
    };


    const handleInputPruductChange = () => {
        const calculatedValue = formData.products.reduce((total, item) => total + item.price * item.quantity, 0)
        const totalAmount = (parseFloat(calculatedValue * 1.15 * (1 - formData.discount / 100))).toFixed(2);
        if (totalAmount != formData.total_amount) {
            setFormData({ ...formData, total_amount: totalAmount })
        }
    };

    const mapTypeToString = (item) => {
        return item
    };

    const mapItemToString = (item) => {
        return `${item.oem_number} - ${item.type} `;
    };

    const handleForum = (e) => {
        const { name, value } = e.target
        if (formData[name] != value) {
            formData[name] = value
            setFormData({ ...formData })
        }
    }
    const handleSupplierSelect = (selectedOption) => {
        formData["supplier_id"] = selectedOption.id
        setFormData({ ...formData })
        console.log('Selected option:', selectedOption);
        // You can perform additional actions with the selected option here
    };

    const addInvoice = async (e) => {
        try {
            await instance.post(
                `/api/v2/purchase_bill`,
                formData);

            router.back()

        } catch (error) {
            console.error(`Error 2 add invoice: `, error.message);
        }
    };

    const apiUrl = "/api/v2/stores/all"

    return (
        <>
            <form onSubmit={addInvoice} >
                <h3 className='text-primary text-2xl '>فاتورة جديدة</h3>

                <Dropdown apiUrl={apiUrl} onSelect={handleSelect} />
                <div className="sm:col-span-4">
                    <label
                        htmlFor="invoice-number"
                        className="block text-lg font-medium leading-6 text-primary">رقم الفاتورة</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="supplier_sequance_number"
                            onChange={handleForum}
                            id="invoice-number"
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-app-light-gray font-bold text-app-gray sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <Dropdown apiUrl={"/api/v2/supplier/all"} onSelect={handleSupplierSelect} />
                <div className="sm:col-span-4">
                    <label
                        htmlFor="product-name"
                        className="block text-lg font-medium leading-6 text-primary"> تاريخ الفاتورة</label>
                    <div className="mt-2">
                        <input
                            type="date"
                            onChange={handleForum}
                            name="payment_date"
                            id="product-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-app-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 border-b border-gray-900/10 pb-12">
                    <h3 className='text-primary text-2xl col-span-4 '> محتويات الفاتورة </h3>
                </div>

                <Adapter
                    initialList={[]}
                    renderItem={(setItems, index, item, _) => (
                        <div className="grid grid-cols-5 content-normal" >
                            <label htmlFor="quantity" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full col-span-3">القطعة</label>
                            <label htmlFor="quantity" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">الكمية</label>
                            <label htmlFor="price" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">السعر</label>
                            <QueryInput
                                fetchData={fetchParts}
                                onSelect={(item) => { setItems("id", item.id, index) }}
                                mapItemToString={mapItemToString}
                                classname="col-span-3"
                            />

                            <input
                                onChange={(e) => { setItems(e.target.name, Number(e.target.value), index) }}
                                id="quantity"
                                name="quantity"
                                type="number"
                                autoComplete="number"
                                min={0}
                                required
                            />
                            <input
                                onChange={(e) => { setItems(e.target.name, e.target.value, index) }}
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

                <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                    <label htmlFor="sub_total" className="block text-lg font-medium leading-6 text-primary flex-1">Discount</label>
                    <div className="mt-2 flex-1">
                        <input
                            onChange={handleForum}
                            name="discount"
                            id="discount"
                            min={0}
                            max={100}
                            type="number"
                        />
                    </div>
                </div>
                <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                    <label htmlFor="tax" className="block text-lg font-medium leading-6 text-primary flex-1">الضريبة</label>
                    <div className="mt-2 flex-1">
                        <input
                            id="tax"
                            name="tax"
                            type="text"
                            value="15%"
                            disabled
                        />
                    </div>
                </div>
                <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                    <label htmlFor="total_amount" className="block text-lg font-medium leading-6 text-primary flex-1">المجموع الكلى</label>
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

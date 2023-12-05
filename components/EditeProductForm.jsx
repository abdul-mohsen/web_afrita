"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import  AddBranchDetails  from './AddBranchDetails';
import { markRequiredInputs } from '@/utils/utils';
import Link from 'next/link';
import { HiOutlineBriefcase, HiChevronDoubleLeft, HiOutlinePlus } from 'react-icons/hi'

const DynamicBranch = ({ branches, deleteBranch }) => {
    return (
        <>
        {branches.map((item, index = 2) => (
            <AddBranchDetails
                key={index}
                branchNumber={index + 2}
                btnDeleteBranch={
                    <span className='text-2xl font-bold text-primary cursor-pointer'
                        onClick={() => deleteBranch(index)}>
                        <HiX />
                    </span>}/>
        ))}
        </>
    );
};

export default function  EditeProductForm({
    id,
    product_named,
    product_number,
    purchase_price,
    selling_price,
    total_quantity,
    brunch_quantity,
    product_rack,
    product_column,
    notifi_quantity,
    minimum_quantity,
}){
    const router = useRouter();

    const handleUpdateProduct = async (updateData) => {
      e.preventDefault();
  
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updateData),
        });
  
        if (!res.ok) {
          throw new Error("Failed to update product");
        }
  
        router.refresh();
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    const [updateData, setUpdateData] = useState( {
        product_named: product_named,
        product_number: product_number,
        purchase_price:  purchase_price,
        selling_price: selling_price,
        total_quantity: total_quantity,
        brunch_quantity: brunch_quantity,
        product_rack: product_rack,
        product_column: product_column,
        notifi_quantity: notifi_quantity,
        minimum_quantity: minimum_quantity,
    }); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateData = {
            product_named: updateData.product_named,
            product_number: updateData.product_number,
            purchase_price: updateData.purchase_price,
            selling_price: updateData.selling_price,
            total_quantity: updateData.total_quantity,
            brunch_quantity: updateData.brunch_quantity,
            product_rack: updateData.product_rack,
            product_column: updateData.product_column,
            notifi_quantity: updateData.notifi_quantity,
            minimum_quantity: updateData.minimum_quantity,
        };
        handleUpdateProduct(newData);
        setUpdateData({
            product_named: '',
            product_number: '',
            purchase_price: '',
            selling_price: '',
            total_quantity: '',
            brunch_quantity: '',
            product_rack: '',
            product_column: '',
            notifi_quantity: '',
            minimum_quantity: '',
        });
    };
    const handleInputChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
      };
      const [newBranchs, setNewBranchs] = useState([]);
    const addNewBranch = () => {
        const newBranch = {};
        setNewBranchs([...newBranchs, newBranch]);
    };

    const deleteingBranch = (index) => {
        const updatedBranches = newBranchs.filter((item, i) => i !== index);
        setNewBranchs(updatedBranches);
    };
    useEffect(() => {
        markRequiredInputs();
    }, []);
    return (
        <div>
            <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
                <Link href={"/products"} >
                    <HiOutlineBriefcase className='text-primary' />
                </Link>
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'>تعديل قطعة ({id})</h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="max-w-[600px]">
                <h3 className='text-primary text-2xl '>بيانات اساسية</h3>
                <div className="space-y-12">
                    <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div className="sm:col-span-4">
                                <label
                                    for="product_named"
                                    className="block text-lg font-medium leading-6 text-gray-900">اسم القطعة</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={updateData.product_named}
                                        required
                                        type="text"
                                        name="product_named"
                                        id="product_named"
                                        autoComplete="given-name"
                                        placeholder='اسم القطعة'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    for="product_number"
                                    className="block text-lg font-medium leading-6 text-gray-900">رقم القطعة</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={updateData.product_number}
                                        required
                                        type="text"
                                        name="product_number"
                                        id="product_number"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-2 flex flex-row flex-wrap gap-x-6">
                                <label htmlFor="purchase_price" className="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">سعر القطعة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        onChange={handleInputChange}
                                        value={updateData.purchase_price}
                                        required
                                        id="purchase_price"
                                        name="purchase_price"
                                        type="number"
                                        autoComplete="number"
                                        min={0}
                                        placeholder='سعر الشراء'
                                        pattern="[0-9]"
                                        inputMode="numeric"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                                <div className="mt-2 flex-1">
                                    <input
                                        onChange={handleInputChange}
                                        value={updateData.selling_price}
                                        required
                                        id="selling_price"
                                        name="selling_price"
                                        type="number"
                                        min={0}
                                        autoComplete="number"
                                        placeholder='سعرالبيع'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="total_quantity"
                                    className="block text-lg font-medium leading-6 text-gray-900">اجمالى الكمية</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={updateData.total_quantity}
                                        required
                                        type="number"
                                        name="total_quantity"
                                        id="total_quantity"
                                        autoComplete="given-number"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none "/>
                                </div>
                            </div>
                            </div>  

                            <>
                            <AddBranchDetails
                                branchQuantVal={updateData.brunch_quantity}
                                placeRow={updateData.product_rack}
                                placeCol={updateData.product_column}
                                notifiQuant={updateData.notifi_quantity}
                                miniQuant={updateData.minimum_quantity}
                                handelFunc={handleInputChange}
                                />
                            </>

                        <DynamicBranch branches={newBranchs} deleteBranch={deleteingBranch} />
                        <div  className="mt-10 flex grid-cols-1 gap-x-6 sm:grid-cols-4 border-b border-gray-900/10 pb-12 ">
                            <div className='flex gap-6 cursor-pointer' onClick={addNewBranch}>
                                <HiOutlinePlus className='text-primary font-bold text-2xl' />
                                <h3 className='text-primary text-2xl col-span-4 '>اضافة تفاصيل فرع</h3>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link href={"/products"} className="text-sm font-semibold leading-6 text-gray-900">الغاء</Link>
                    <button
                        type="submit"
                        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">إضافة منتج</button>
                </div>
            </form>

            </div>
        </div>
  )
}

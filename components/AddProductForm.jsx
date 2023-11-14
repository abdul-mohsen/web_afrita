"use client"
import { useState } from 'react';
import Link from 'next/link';
import { AddBranchDetails } from '.';
import { HiOutlineBriefcase, HiChevronDoubleLeft, HiOutlinePlus, HiX } from 'react-icons/hi'

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

const AddProductForm = () => {

    const [newBranchs, setNewBranchs] = useState([]);

    const addNewBranch = () => {
        const newBranch = {};
        setNewBranchs([...newBranchs, newBranch]);
    };

    const deleteingBranch = (index) => {
    const updatedBranches = newBranchs.filter((item, i) => i !== index);
    setNewBranchs(updatedBranches);
    };

    return (
        <div>
            <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
                <HiOutlineBriefcase className='text-primary' />
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'>اضافة قطعة</h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">
            <form className="max-w-[600px]">
                <h3 className='text-primary text-2xl '>بيانات اساسية</h3>
                <div className="space-y-12">
                    <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div className="sm:col-span-4">
                                <label
                                    for="product_named"
                                    className="block text-lg font-medium leading-6 text-gray-900">اضافة قطعة</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="product_named"
                                        id="product_named"
                                        autocomplete="given-name"
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
                                        type="text"
                                        name="product_number"
                                        id="product_number"
                                        autocomplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-2 flex flex-row flex-wrap gap-x-6">
                                <label className="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">سعر القطعة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="purchase_price"
                                        name="purchase_price"
                                        type="number"
                                        autocomplete="number"
                                        min={0}
                                        placeholder='سعر الشراء'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="selling_price"
                                        name="selling_price"
                                        type="number"
                                        min={0}
                                        autocomplete="number"
                                        placeholder='سعرالبيع'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    for="total_quantity"
                                    className="block text-lg font-medium leading-6 text-gray-900">اجمالى الكمية</label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="total_quantity"
                                        id="total_quantity"
                                        autocomplete="given-number"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none "/>
                                </div>
                            </div>
                            </div>  

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <h3 className='text-primary text-2xl col-span-4 '>تفاصيل القطعة للفرع 1</h3>
                            <div className="col-span-4">
                                <label
                                    for="brunch_quantity"
                                    className="block text-lg font-medium leading-6 text-gray-900">الكمية للفرع</label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="brunch_quantity"
                                        id="brunch_quantity"
                                        autocomplete="brunch_quantity"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                           
                            <div class="col-span-4  flex flex-row gap-x-6 flex-wrap">
                                <label for="item-place" class="block text-lg font-medium leading-6 text-gray-900 basis-full">مكان القطعة</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        type="text"
                                        name="item-place"
                                        id="item-place"
                                        min={0}
                                        placeholder='رف'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                                <div class="mt-2 flex-1">
                                    <input
                                        type="text"
                                        name="item-place"
                                        id="item-place"
                                        min={0}
                                        placeholder='عمود'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4 sm:col-start-1f flex flex-row gap-x-3 items-center"> 
                                <div class="flex h-6 items-center">
                                    <input
                                        id="notifi"
                                        name="notifi"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 outline-none"/>
                                </div>
                                <div class="text-sm leading-6">
                                    <label for="notifi" class="text-xs lg:text-base whitespace-nowrap  text-gray-900">تنبيه عند الوصول الى</label>
                                </div>
                                <div class=" w-24">
                                    <input
                                        type="number"
                                        min={0}
                                        class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
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

export default AddProductForm
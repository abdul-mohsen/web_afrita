"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AddBranchDetails } from '.';
import { HiOutlineBriefcase, HiChevronDoubleLeft, HiOutlinePlus, HiX } from 'react-icons/hi'
import { markRequiredInputs } from '@/utils/utils';

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


    
    const [formData, setFormData] = useState( {
        productName: "",
        productNumber: "",
    }); 
    
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    


    useEffect (() => {
        const fetchData = async () => {
             try {
          const response = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
    
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
    
            console.log('Data successfully submitted!');
          } else {
            throw new Error("Failed to create a topic");
    
          }
            const data = await response.json();
            console.log(data);
        } catch (error) {
          // Handle network error
          console.error('Network error:', error);
        }
        };
        if (isFormSubmitted) {
            fetchData();
            setFormSubmitted(false);
        }
        
    }, [isFormSubmitted, formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                <HiOutlineBriefcase className='text-primary' />
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'>اضافة قطعة</h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="max-w-[600px]">
                <h3 className='text-primary text-2xl '>بيانات اساسية</h3>
                <div className="space-y-12">
                    <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="product_named"
                                    className="block text-lg font-medium leading-6 text-gray-900">اضافة قطعة</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.productName}
                                        required
                                        type="text"
                                        name="productName"
                                        id="product_named"
                                        autoComplete="given-name"
                                        placeholder='اسم القطعة'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="product_number"
                                    className="block text-lg font-medium leading-6 text-gray-900">رقم القطعة</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.productNumber}
                                        required
                                        type="text"
                                        name="productNumber"
                                        id="product_number"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-2 flex flex-row flex-wrap gap-x-6">
                                <label htmlFor="purchase_price" className="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">سعر القطعة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        required
                                        id="purchase_price"
                                        name="purchase_price"
                                        type="number"
                                        autoComplete="number"
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
                                        type="number"
                                        name="total_quantity"
                                        id="total_quantity"
                                        autoComplete="given-number"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none "/>
                                </div>
                            </div>
                            </div>  

                            <AddBranchDetails />
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
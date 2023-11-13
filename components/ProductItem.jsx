'use client';
import React, { useState, useEffect, useRef } from "react";
import useDropdown from '@/hooks/useDropdown';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi"
import Link from 'next/link';
import ProductVariety from './ProductVariety';
import AddQuantityForm from './AddQuantityForm';


const ProductItem = () => {
    const dropRef = useRef(null);

    const {dropdownRef,handleClick,isOpen,iconRef} = useDropdown()
    const [isOpenActionsList, setOpenActionsList] = useState(false);

    const actionsList = () => {
        setOpenActionsList(!isOpenActionsList);
      };
      const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target) && dropRef.current && !dropRef.current.contains(event.target)) {
        setOpenActionsList(isOpenActionsList);
      }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    const openQtyForm = () => {
        const qtyFormContain = document.getElementById('qty-form-conta');
        if (qtyFormContain) {
            // Check if the element has the specific class
            if (qtyFormContain.classList.contains('hidden')) {
                // Remove the class if it exists
                qtyFormContain.classList.remove('hidden');
                qtyFormContain.classList.add('flex');
                
            } else if (qtyFormContain.classList.contains('flex')) {
                // Add the class if it doesn't exist
                qtyFormContain.classList.remove('flex');
                targetElement.classList.add('hidden');
            
            }
        }
    
    }

    return (
        <>
            <div className=" product-row flex flex-col bg-white min-w-[750px]">
                <div
                    className={`product-details flex flex-row hover:shadow-md ${isOpen ? "shadow-md" : ""}`}>
                    <div
                        onClick={handleClick} ref={iconRef}
                            className="details cursor-pointer flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(120px,_1fr))] text-app-gray pr-4 py-10">
                        <span className='item-ranking'>01</span>
                        <h3 className='item-name text-primary font-bold'>سماعات</h3>
                        <span className="item-number">#2458</span>
                        <span className="item-price">500 ر.س</span>
                        <span className="total-quantity font-bold">200</span>
                        <span className="item-place">A1</span>
                    </div>

                    <div className='actions-list relative flex flex-col justify-center items-center gap-4 w-[50px]' ref={dropRef}>

                        <PiDotsThreeOutlineVerticalLight
                            onClick={actionsList}
                            className="w-6 h-6 text-primary hover:fill-red-500  cursor-pointer" />

                        <HiOutlinePlus
                            onClick={openQtyForm}
                            className="w-6 h-6 text-secondry cursor-pointer" />

                        <div
                            className={`${isOpenActionsList ? "flex" : "hidden"}  actions absolute text-sm text-app-gray py-2 flex-col w-max rounded-md bg-white top-8 left-8 shadow-lg shadow-primary/30 border border-primary/5`}>
                            
                            <Link
                                href="/products/editeProduct/"
                                className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">

                                <HiOutlinePencil className="text-green-500"/>
                                <span className="block">تعديل المنتج</span>
                            </Link>

                            <Link
                                href="/products"

                                className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">

                                <HiOutlineTrash className=" text-red-500"/>
                                <span className="block">حذف المنتج</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {isOpen && <div ref={dropdownRef}>
                    <ProductVariety />
                </div>}
                

            </div>
            <AddQuantityForm/>
        </>
    );
}
export default ProductItem
'use client'
import React, { useState } from "react";
import { ProductVariety } from '.';
import Link from 'next/link';
import { HiOutlineDotsVertical, HiOutlinePlus } from "react-icons/hi"

const ProductItem = () => {
    const [isActive, setIsActive] = useState(false);
    const editeItem = () => {
        setIsActive(!isActive);
    };
  return (
        <div className=" product-row flex flex-col  bg-white" >
            
            <div className={`product-details flex flex-row hover:shadow-md ${isActive ? " shadow-md" : ""}`}>
                <div onClick={editeItem} className="details cursor-pointer flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(0,_1fr))] text-app-gray pr-4 py-10">
                    <span className='item-number'>01</span>
                    <h3 className='item-name text-primary font-bold'>سماعات</h3>
                    <span className="item-id">#2543</span>
                    <span className="item-price">500 ر.س</span>
                    <span className="total-quas font-bold">500 ر.س</span>
                    <span className="item-place">A1</span>

                </div>
                    <div className='actions flex flex-col justify-center items-center gap-4 w-[50px]'>
                    <Link href={"/products/editeProduct"}>
                        <HiOutlineDotsVertical className="w-6 h-6 text-primary"/>
                    </Link>
                    <HiOutlinePlus className="w-6 h-6 text-secondry" />
                </div>
            </div>
            <div className={`${isActive ? "" : "hidden"}`}   >
                <ProductVariety />
            </div>

        </div>
  )
}

export default ProductItem
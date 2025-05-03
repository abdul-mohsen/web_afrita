'use client';
import React, { useState, useEffect, useRef } from "react";
import useDropdown from '@/hooks/useDropdown';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi"
import Link from 'next/link';
import ProductInfo from './ProductInfo';
import AddQuantityForm from './AddQuantityForm';


const ProductItem = ({
    _id,
    id,
    price,
    quantity,
    product_named,
    product_number,
    purchase_price,
    selling_price,
    total_quantity,
    brunch_quantity,
    product_rack,
    product_column
}) => {

    const dropRef = useRef(null);
    const { dropdownRef, handleClick, isOpen, iconRef } = useDropdown()
    const [isOpenActionsList, setOpenActionsList] = useState(false);
    const [isAddQuantity, setAddQuantity] = useState(false);

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
        setAddQuantity(!isAddQuantity);
    }

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Failed to delete product (status ${response.status})`);
            }
            console.log('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error.message);
        }
    };

    return (
        <>
            <div className=" product-row flex flex-col min-w-full w-fit bg-white">
                <div
                    className={`product-details flex flex-row hover:shadow-md ${isOpen ? "shadow-md" : ""}`}>
                    <div
                        onClick={handleClick} ref={iconRef}
                        className="details cursor-pointer flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(120px,_1fr))] min-w-[700px] text-app-gray mr-4 py-6 md:py-10">
                        <span className='item-ranking'>0{id}</span>
                        <h3 className='item-name text-primary font-bold'>{product_named}</h3>
                        <span className="item-number">#2458</span>
                        <span className="item-price">{brunch_quantity} ر.س</span>
                        <span className="total-quantity font-bold">{quantity}</span>
                        <span className="item-place">{product_column}{product_rack}</span>
                    </div>
                    <div className='actions-list relative flex flex-col justify-center items-center gap-2 md:gap-4 w-[50px]' ref={dropRef}>
                        <PiDotsThreeOutlineVerticalLight
                            onClick={actionsList}
                            className="w-6 h-6 text-primary hover:fill-red-500  cursor-pointer" />
                        <HiOutlinePlus
                            onClick={openQtyForm}
                            className="w-6 h-6 text-secondry cursor-pointer" />
                        <div
                            className={`${isOpenActionsList ? "flex" : "hidden"}  actions absolute justify-start text-sm text-app-gray py-2 flex-col w-max rounded-md bg-white top-8 left-8 shadow-lg shadow-primary/30 border border-primary/5`}>
                            <Link
                                href={`/products/editeProduct/${_id}`}
                                className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
                                <HiOutlinePencil className="text-green-500" />
                                <span className="block">تعديل المنتج</span>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
                                <HiOutlineTrash className=" text-red-500" />
                                <span className="block">حذف المنتج</span>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && <div ref={dropdownRef}>
                    <ProductInfo purchase_price={price} selling_price={selling_price} product_rack={product_rack} product_column={product_column} />
                </div>}
            </div>
            {isAddQuantity && <AddQuantityForm productName={product_named} openForm={openQtyForm} />}
        </>
    );
}
export default ProductItem

'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

const SupplierItem = (
) => {
  const dropRef = useRef(null);
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


  return (
    <div className="supplier flex flex-row min-w-full w-fit bg-white">

      <div className="details flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(120px,_1fr))] text-app-gray mr-4 py-6 md:py-10 min-w-[700px]">
        <span className='supplier-number '>01</span>
      </div>

      <div className='actions-list relative flex flex-col justify-center items-center w-[50px]' ref={dropRef}>
        <PiDotsThreeOutlineVerticalLight
          onClick={actionsList}
          className="w-6 h-6 text-primary hover:fill-red-500  cursor-pointer" />
        <div
          className={`${isOpenActionsList ? "flex" : "hidden"}  actions absolute text-sm text-app-gray py-2 flex-col w-max rounded-md bg-white top-8 left-8 shadow-lg shadow-primary/30 border border-primary/5`}>
          
          <Link
            href='#'
            className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
            <HiOutlinePencil className="text-green-500"/>
            <span className="block">تعديل بيانات المورد</span>
          </Link>

          <Link
              href={`/suppliers`}
              className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
              <HiOutlineTrash className=" text-red-500"/>
              <span className="block">حذف المورد</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SupplierItem

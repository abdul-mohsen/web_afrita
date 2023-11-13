'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

const InvoicesItem = ({itemType, itemStatus}) => {

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

    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {
      // Function to get today's date and update state
      const getTodayDate = () => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setTodayDate(formattedDate);
      };

      // Call the function on component mount
      getTodayDate();
    }, []);
    
  return (
    <div className="item flex flex-row  bg-white">
            <div className="details flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(0,_1fr))] text-app-gray pr-4 py-10">
                <span className='item-number text-xs   md:text-base'>01</span>
                <h3 className='item-id text-primary font-bold text-xs  md:text-base'>INV-0001</h3>
                <span className="item-valyue text-xs mr-2  md:mr-0 md:text-base">500 ر.س</span>
                <span className="item-date text-xs   md:text-base">13/11/2023</span>
                <span className="supplyer-id font-bold text-xs   md:text-base">AS-20</span>
                <span className="item-type text-xs   md:text-base">{itemType}</span>
                <span className="item-status text-xs   md:text-base">{itemStatus}</span>

            </div>
                <div className='actions relative flex flex-col justify-center items-center gap-4 w-[50px]' ref={dropRef}>
                  {itemType == "شراء"
                  ? <HiOutlineTrash className="w-6 h-6 text-red-500 cursor-pointer opacity-70 hover:opacity-100" />
                  : <HiOutlineDotsVertical className="w-6 h-6 text-secondry cursor-pointer opacity-70 hover:opacity-100" onClick={actionsList} />
                  } 

                  {itemType == "بيع"

                    ? <>
                    <div
                    className={`${isOpenActionsList ? "flex" : "hidden"}  actions absolute text-sm text-app-gray py-2 flex-col w-max rounded-md bg-white top-8 left-8 shadow-lg shadow-primary/30 border border-primary/5`}>
                    
                      <Link
                          href="/invoices/editEinvoics/"
                          className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">

                          <HiOutlinePencil className="text-green-500"/>
                          <span className="block">تعديل الفاتورة</span>
                      </Link>

                      <Link
                          href="/invoices"
                          className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
                          <HiOutlineTrash className=" text-red-500"/>
                          <span className="block">حذف الفاتورة</span>
                      </Link>
                    </div>
                    </>
                    : ""
                  }
                
            </div>
        </div>
  )
}

export default InvoicesItem

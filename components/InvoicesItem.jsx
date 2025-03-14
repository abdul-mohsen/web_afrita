'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"



const InvoicesItem = ({
  itemType,
   id,
   effective_date,
   state,
   subtotal,
  discount,
  vat,
  sequence_number,
  type,
   deleteBtn,
   order
  }) => {


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

    const [invoDate, setInvoDate] = useState('');
    useEffect(() => {
          const getInvoTodayDate = (date) => {
      setInvoDate(date.Time)
      return 
            if (Date.parse(date.Time)) {
              const invoDataBack = new Date(date);
              const formateInvoDate = invoDataBack.toISOString().split('T')[0];
              setInvoDate(formateInvoDate);
            } else {
              console.error("Invalid date format:", date);
            }
          };
          getInvoTodayDate(effective_date);
      }, [ effective_date]);
    
  return (
    <div className="item flex flex-row min-w-full w-fit bg-white hover:shadow-md">
      <div className="details flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(120px,_1fr))] text-app-gray mr-4 py-6 md:py-10 min-w-[800px]">
          <span className='item-number'>
            {order < 10 ? (
              `0${order + 1}`
            ) : (
              order
            )}
          </span>
          <h3 className='item-id text-primary font-bold '>{sequence_number}</h3>
          <span className="item-valyue mr-2  md:mr-0">{subtotal + vat - discount} ر.س</span>
          <span className="item-date">{effective_date.Time}</span>
          <span className="supplyer-id font-bold">{100}</span>
          <span className="item-type ">{type == true ? ("bill") : ("purchase bill")}</span>
          <span className="item-status">
          {state == 1 ? (
              "مدفوعة"
            ) : (
              "مرفوضة"
            )}</span>

      </div>
      <div className='actions relative flex flex-col justify-center items-center gap-4 w-[50px]' ref={dropRef}>
        {/* {itemType == "شراء" */}
        {/* ? <HiOutlineTrash className="w-6 h-6 text-red-500 cursor-pointer opacity-70 hover:opacity-100" /> */}
        <HiOutlineDotsVertical className="w-6 h-6 text-secondry cursor-pointer opacity-70 hover:opacity-100" onClick={actionsList} />
        
        {/* {itemType == "بيع"
          ? <> */}
            <div
            className={`${isOpenActionsList ? "flex" : "hidden"}  actions absolute text-sm text-app-gray py-2 flex-col w-max rounded-md bg-white top-8 left-8 shadow-lg shadow-primary/30 border border-primary/5`}>
              <Link
                  href={`/dashboard/invoices/edit/${id}`}
                  className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
                  <HiOutlinePencil className="text-green-500"/>
                  <span className="block">تعديل الفاتورة</span>
              </Link>
              <button
                  onClick={() => deleteBtn(id, type)}
                  className="flex flex-row justify-center items-center gap-2 px-4 py-1 hover:bg-app-light-gray">
                  <HiOutlineTrash className=" text-red-500"/>
                  <span className="block">حذف الفاتورة</span>
              </button>
            </div>
          {/* </>
          : ""
        } */}
      </div>
    </div>
  )
}
export default InvoicesItem

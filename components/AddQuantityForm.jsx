'use client';
import { HiOutlineXMark } from "react-icons/hi2";
import { useEffect } from "react";
import { markRequiredInputs } from "@/utils/utils";


const AddQuantityForm = ({productName, openForm}) => {
  
  useEffect(() => {
    markRequiredInputs();
  }, []);

  return (
    <div className="fixed flex w-screen h-screen top-0 right-0 z-40 justify-center items-center padding" >
      <div onClick={openForm} className="overlay absolute bg-black/30 w-screen h-screen"></div>
      <div className='relative z-50 bg-white w-full xl:w-1/2 lg:w-3/5 md:w-4/5 p-8 rounded-lg' >
        <form action="post" className="max-w-[600px]">
          <h3 className='text-primary text-2xl '> اضافة كمية جديدة</h3>
          <div className="space-y-6 pb-6">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4 border-b border-gray-900/10 pb-6">
              <div className="sm:col-span-4">
                <label
                    htmlFor="product-name"
                    className="block text-lg font-medium leading-6 text-primary">
                    اسم المنتج
                </label>
                <div className="mt-2">
                  <input
                    value={productName}
                    type="text"
                    name="product-name"
                    id="product-name"
                    autoComplete="given-name"
                    disabled
                    className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 bg-app-light-gray font-bold  sm:leading-6"/>
                </div>
              </div>
              <div className="sm:col-span-4 flex flex-row flex-wrap gap-x-6">
                <label
                  htmlFor="item-price"
                  className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">
                  سعر القطعة
                </label>
                <div className="mt-2 flex-1">
                  <input
                    required
                    id="item-price"
                    name="item-price"
                    type="number"
                    autoComplete="number"
                    min={0}
                    placeholder='سعر الشراء'
                    className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
                <div className="mt-2 flex-1">
                  <input
                    required
                    id="item-price"
                    name="item-price"
                    type="number"
                    min={0}
                    autoComplete="number"
                    placeholder='سعرالبيع'
                    className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
            </div>  
            <div  className="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-4 border-b border-gray-900/10 pb-6">
              <h3 className='text-primary text-xl col-span-4 mb-4'>اضافة لــ</h3>
              <div className="col-span-1 flex justify-center items-center my-1">
                <label
                  htmlFor="branch-one"
                  className="block text-lg font-medium leading-6 text-primary w-full flex-1">
                  فرع 1
                </label>
                <div className="flex-1">
                  <input
                    id="branch-one"
                    name="branch-one"
                    type="input"
                    placeholder=''
                    className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center my-1">
                <label
                  htmlFor="branch-two"
                  className="block text-lg font-medium leading-6 text-primary w-full flex-1">
                  فرع 2
                </label>
                <div className="flex-1">
                  <input
                    id="branch-two"
                    name="branch-two"
                    type="input"
                    placeholder=''
                    className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-x-6 text-white">
              <span
                onClick={openForm}
                className="absolute cursor-pointer top-0 left-0 text-lg font-semibold leading-6 bg-secondry p-2 rounded-full -translate-x-1/2 -translate-y-1/2"
              >
                <HiOutlineXMark />
                </span>
              <button
                type="submit"
                className="rounded-md bg-secondry px-8 py-4 text-2xl font-semibold shadow-sm hover:bg-secondry/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">إضافة منتج</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddQuantityForm
import React from 'react'
import Button from './Button'

function FilterNavbar() {
    return (
        <div className="p-6 rounded-md bg-app-light-gray  h-[287px] shadow-lg">
            <form>
                <div className="flex flex-col gap-y-3 md:gap-y-6">
                    <div className='flex gap-x-8'>
                        <div>
                            <label
                                htmlFor="our-products-filter"
                                className={`text-app-gray  text-2xl text-bold `}>
                                <input
                                    type='checkbox'
                                    name='our-products-filter'
                                    id='our-products-filter'
                                    className='ml-6'/>
                                منتجات
                            </label>
                        </div>
                        <div>
                            <label htmlFor="bills-filter" className={`text-app-gray  text-2xl text-bold `}>
                                <input type='checkbox' name='bills-filter' id='bills-filter' className='ml-6'/>
                                فواتير
                            </label>
                        </div>
                    </div>
                    <div className='py-3 flex-col flex md:flex-row gap-x-8'>
                        <div className="flex flex-col">
                            <label htmlFor='name-piece-filter' className='mb-1'>
                                اسم القطعة
                            </label>
                            <input
                                type='text'
                                id='name-piece-filter'
                                className='w-full h-[37px] md:h-[50px] rounded-md bg-transparent'/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='number-piece-filter' className='mb-1'>
                                رقم القطعة
                            </label>
                            <input
                                type='text'
                                id='number-piece-filter'
                                className='w-full h-[37px] md:h-[50px] rounded-md bg-transparent'/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div>
                            <button type='button' className="text-primary font-bold">اعادة تعيين</button>
                        </div>
                        <div className="flex  gap-x-4">
                            <button type="button" className="text-primary font-bold">الغاء</button>
                            <Button label="بحث" link="#" addclass="px-20 py-4  md:py-6 rounded-xl"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default FilterNavbar
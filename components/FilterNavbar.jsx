'use client'
import React, { useState } from 'react'
import Button from './Button'

function FilterNavbar({ onOpen, searchResults }) {
  const [invoicefilterOption, setinvoiceFilter] = useState(false)
  const handelInvoiceType = () => {
    setinvoiceFilter(!invoicefilterOption)
  }

  return (
    <div className='p-6 rounded-md bg-app-light-gray shadow-lg'>
      <div className='my-8 border-b-2'>
        {searchResults?.length ? (
          <h3 className='text-2xl font-bold'>نتائج البحث</h3>
        ) : (
          <h3 className='text-2xl font-bold'>بحث</h3>
        )}
        <div className='my-4'>
          {searchResults.map((result) => (
            <div key={result.id} className='flex flex-row gap-x-4'>
              <div className='flex flex-col'>
                <span className='text-app-gray'>رقم الموديل</span>
                <span className='text-lg font-bold'>{result.modelId}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-app-gray'>الموديل</span>
                <span className='text-lg font-bold'>{result.modelName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form>
        <div className='flex flex-col gap-y-3 md:gap-y-6'>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-x-6 gap-y-2'>
            <div className=' col-span-2 sm:col-span-1'>
              <label
                htmlFor='products-filter'
                className='text-app-gray md:text-lg text-bold'
              >
                <input
                  type='checkbox'
                  name='products-filter'
                  id='products-filter'
                  className='ml-5'
                />
                منتجات
              </label>
            </div>
            <div className=' col-span-2 sm:col-span-1 flex flex-row'>
              <input
                onClick={handelInvoiceType}
                type='checkbox'
                name='bills-filter'
                id='bills-filter'
                className='ml-5'
              />
              <label
                htmlFor={'bills-filter'}
                className=' block text-app-gray md:text-lg text-bold'
              >
                فواتير
              </label>
            </div>
            <div className=' col-span-2 sm:col-span-1'>
              <label
                htmlFor='clients-filter'
                className='text-app-gray md:text-lg text-bold'
              >
                <input
                  type='checkbox'
                  name='clients-filter'
                  id='clients-filter'
                  className='ml-5'
                />
                العملاء
              </label>
            </div>
            <div className=' col-span-2 sm:col-span-1'>
              <label
                htmlFor='suppliers-filter'
                className='text-app-gray md:text-lg text-bold'
              >
                <input
                  type='checkbox'
                  name='suppliers-filter'
                  id='suppliers-filter'
                  className='ml-5'
                />
                موردين
              </label>
            </div>
          </div>

          {invoicefilterOption && (
            <div className='py-3 flex-col flex md:flex-row gap-x-8'>
              <div className='flex flex-col'>
                <label htmlFor='invoice-type' className='mb-1'>
                  نوع الفاتورة
                </label>
                <div className='mt-2'>
                  <select
                    id='invoice-type'
                    name='invoice-type'
                    className='block w-full h-[37px] md:h-[50px] rounded-md py-1.5 text-app-gray bg-app-light-gray shadow-sm sm:text-sm sm:leading-6'
                  >
                    <option>بيع</option>
                    <option>شراء</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='number-piece-filter' className='mb-1'>
                  رقم الفاتورة
                </label>
                <input
                  type='text'
                  id='number-piece-filter'
                  className='mt-2 w-full h-[37px] md:h-[50px] rounded-md bg-transparent'
                />
              </div>
            </div>
          )}

          <div className='flex justify-between items-center '>
            <div>
              <button
                onClick={() => setinvoiceFilter(false)}
                type='reset'
                className='text-primary font-bold'
              >
                اعادة تعيين
              </button>
            </div>
            <div className='flex  gap-x-4'>
              <button
                onClick={onOpen}
                type='button'
                className='px-8 text-xl py-2 lg:px-7 lg:text-2xl lg:py-3 leading-none rounded-md border border-primary hover:bg-primary/10'
              >
                الغاء
              </button>
              <Button label='بحث' link='#' addclass='px-8' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default FilterNavbar

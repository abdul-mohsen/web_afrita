import React from 'react'

const AddBranchDetails = ({ branchNumber, btnDeleteBranch }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div className='flex justify-between col-span-4'>
                            <h3 className='text-primary text-2xl col-span-4 '>تفاصيل القطعة للفرع {branchNumber} </h3>
                            {btnDeleteBranch}
                            </div>
                            <div className="col-span-4">
                                <label
                                    htmlFor="brunch_quantity"
                                    className="block text-lg font-medium leading-6 text-gray-900">الكمية للفرع</label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="brunch_quantity"
                                        id="brunch_quantity"
                                        autoComplete="brunch_quantity"
                                        min={0}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="col-span-4  flex flex-row gap-x-6 flex-wrap">
                                <label htmlhtmlFor="product-place" className="block text-lg font-medium leading-6 text-gray-900 basis-full">مكان القطعة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        type="text"
                                        name="product_rack"
                                        id="product_rack"
                                        min={0}
                                        placeholder='رف'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                                <div className="mt-2 flex-1">
                                    <input
                                        type="text"
                                        name="product_column"
                                        id="product_column"
                                        min={0}
                                        placeholder='عمود'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="ssm:col-span-4 sm:col-start-1f flex flex-row gap-x-3 items-center">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="notifi_quantity"
                                        name="notifi_quantity"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 outline-none"/>
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlhtmlFor="notifi" className="font-medium text-gray-900">تنبيه عند الوصول الى</label>
                                </div>
                                <div className=" w-24">
                                    <input
                                        id='minimum_quantity'
                                        name='minimum_quantity'
                                        type="number"
                                        min={10}
                                        value={10}
                                        className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
  )
}

export default AddBranchDetails
import { HiOutlineBriefcase, HiChevronDoubleLeft, HiOutlinePlus } from 'react-icons/hi'

const EditeProductForm = () => {
  return (
    <div>
            <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
                <HiOutlineBriefcase className='text-primary' />
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'>تعديل قطعة</h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">
            <form class="max-w-[600px]">
                <h3 className='text-primary text-2xl '>بيانات اساسية</h3>
                <div class="space-y-12">
                    <div class="pb-12">
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">اضافة قطعة</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        placeholder='اسم القطعة'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label
                                    for="item-number"
                                    class="block text-lg font-medium leading-6 text-gray-900">رقم القطعة</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="item-number"
                                        id="item-number"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2 flex flex-row flex-wrap gap-x-6">
                                <label for="item-price" class="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">سعر القطعة</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="item-price"
                                        name="item-price"
                                        type="number"
                                        autocomplete="number"
                                        min={0}
                                        placeholder='سعر الشراء'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="item-price"
                                        name="item-price"
                                        type="number"
                                        min={0}
                                        autocomplete="number"
                                        placeholder='سعرالبيع'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label
                                    for="total-amount"
                                    class="block text-lg font-medium leading-6 text-gray-900">اجمالى الكمية</label>
                                <div class="mt-2">
                                    <input
                                        type="number"
                                        name="total-amount"
                                        id="total-amount"
                                        autocomplete="given-number"
                                        min={0}
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none "/>
                                </div>
                            </div>
                            </div>  

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <h3 className='text-primary text-2xl col-span-4 '>تفاصيل القطعة للفرع 1</h3>
                            <div class="col-span-full">
                                <label
                                    for="brunch-amount"
                                    class="block text-ld font-medium leading-6 text-gray-900">الكمية للفرع</label>
                                <div class="mt-2">
                                    <input
                                        type="number"
                                        name="brunch-amount"
                                        id="brunch-amount"
                                        autocomplete="brunch-amount"
                                        min={0}
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-4 sm:col-start-1 flex flex-row gap-x-6 flex-wrap">
                                <label for="item-place" class="block text-lg font-medium leading-6 text-gray-900 basis-full">مكان القطعة</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        type="text"
                                        name="item-place"
                                        id="item-place"
                                        min={0}
                                        placeholder='رف'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                                <div class="mt-2 flex-1">
                                    <input
                                        type="text"
                                        name="item-place"
                                        id="item-place"
                                        min={0}
                                        placeholder='عمود'
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4 sm:col-start-1f flex flex-row gap-x-3 items-center">
                                <div class="flex h-6 items-center">
                                    <input
                                        id="notifi"
                                        name="notifi"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 outline-none"/>
                                </div>
                                <div class="text-sm leading-6">
                                    <label for="notifi" class="font-medium text-gray-900">تنبيه عند الوصول الى</label>
                                </div>
                                <div class=" w-24">
                                    <input
                                        type="number"
                                        min={0}
                                        class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                        <div  class="mt-10 flex grid-cols-1 gap-x-6 sm:grid-cols-4 border-b border-gray-900/10 pb-12  cursor-pointer">
                            <HiOutlinePlus className='text-primary text-2xl' />
                            <h3 className='text-primary text-2xl col-span-4 '>اضافة تفاصيل فرع</h3>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">الغاء</button>
                    <button
                        type="submit"
                        class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">تحديث</button>
                </div>
            </form>

            </div>
        </div>
  )
}

export default EditeProductForm
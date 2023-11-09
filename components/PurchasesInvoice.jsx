import React from 'react'

const PurchasesInvoice = () => {
  return (
    <form class="max-w-[600px]">
                <h3 className='text-primary text-2xl '>فاتورة شراء</h3>
                <div class="space-y-12">
                    <div class="pb-12">
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">رقم الفاتورة</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900"> تاريخ الفاتورة</label>
                                <div class="mt-2">
                                    <input
                                        type="date"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">الرقم الضريبي</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        placeholder='615243'
                                        disabled
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="client-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">اسم العميل</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="client-name"
                                        id="client-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900"> رقم الطلبية</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            

                        </div>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                        <h3 className='text-primary text-2xl col-span-4 '> معلومات الطلبية</h3>
                            <div class="sm:col-span-2">
                                <label
                                    for="item-number"
                                    class="block text-lg font-medium leading-6 text-gray-900">القطعة</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="item-number"
                                        id="item-number"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-1 flex flex-row flex-wrap gap-x-6">
                                <label for="amount" class="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">الكمية</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        autocomplete="number"
                                        min={0}

                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                                
                            <div class="sm:col-span-1 flex flex-row flex-wrap gap-x-6">
                                <label for="amount" class="block text-lg font-medium leading-6 text-gray-900 flex-1 w-full basis-full ">السعر</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="item-price"
                                        name="item-price"
                                        type="number"
                                        min={0}
                                        autocomplete="number"
 
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                                <label for="total" class="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="total"
                                        name="total"
                                        type="text"
                                        autocomplete="number"
                                        min={0}
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                                <label for="tax" class="block text-lg font-medium leading-6 text-gray-900 flex-1">الضريبة</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="tax"
                                        name="tax"
                                        type="text"
                                        value="14%"
                                        disabled
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class=" flex flex-row flex-wrap col-start-3 col-end-5 gap-x-6 items-center">
                                <label for="total-amount" class="block text-lg font-medium leading-6 text-gray-900 flex-1">المجموع الكلى</label>
                                <div class="mt-2 flex-1">
                                    <input
                                        id="total-amount"
                                        name="total-amount"
                                        type="text"
                                        autocomplete="number"
                                        min={0}
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">حفظ مسودة</button>
                    <button
                        type="submit"
                        class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">حفظ الفاتورة</button>
                </div>
            </form>
  )
}

export default PurchasesInvoice
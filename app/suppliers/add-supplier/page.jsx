import Link from 'next/link'
import { HiChevronDoubleLeft, HiOutlineUsers } from 'react-icons/hi'



export default function AddSupplier() {
  return (
    <div>
        <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
            <Link href={"/suppliers"} >
                <HiOutlineUsers className='text-primary' />

            </Link>
            <HiChevronDoubleLeft className='text-app-gray' />
            <h2 className='text-app-gray'>اضافة مورد</h2>
        </div>
        <div className="add-form w-full bg-white p-8 rounded-xl">
            <form class="max-w-[600px]">
                <h3 className='text-primary text-2xl '> مورد جديد </h3>
                <div class="space-y-12">
                    <div class="pb-12">
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900"> اسم المورد</label>
                                <div class="mt-2">
                                    <input
                                        type="phone"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">رقم الهاتف</label>
                                <div class="mt-2">
                                    <input
                                        type="phone"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">  عنوان المورد</label>
                                <div class="mt-2">
                                    <input
                                        type="address"
                                        name="product-name"
                                        id="product-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label
                                    for="product-name"
                                    class="block text-lg font-medium leading-6 text-gray-900"> رقم المورد</label>
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
                                    for="client-name"
                                    class="block text-lg font-medium leading-6 text-gray-900"> الرقم الضريبى</label>
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
                                    for="client-name"
                                    class="block text-lg font-medium leading-6 text-gray-900">  الحساب البنكى</label>
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        name="client-name"
                                        id="client-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">الغاء </button>
                    <button
                        type="submit"
                        class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">حفظ </button>
                </div>
            </form>

        </div>
    </div>
  )
}
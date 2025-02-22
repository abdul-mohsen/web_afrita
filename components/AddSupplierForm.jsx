'use client'
import React, { useEffect } from 'react'
import { markRequiredInputs } from '@/utils/utils';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const AddSupplierForm = () => {
    const { data: userSession } = useSession();
    async function handleAdd(data) {
        console.error('Success click:', data);
        const name = data.get("supplier-name")
        const phone = data.get("supplier-phone")
        const address = data.get("supplier-address")
        const number = data.get("supplier-number")
        const vat_number = data.get("supplier-tax-number")
        const bankAccount = data.get("supplier-bank-account")

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URLL}/api/v2/supplier`,
            {
                headers: {
                    Authorization: `Bearer ${userSession?.user?.accessToken}`,
                },
                body: {
                    "name": name,
                    "address": address,
                    "phone_number": phone,
                    "number": number,
                    "vat_number": vat_number,
                    "bank_account": bankAccount
                },
            }
        );
        console.log(response)
    }
    useEffect(() => {
        markRequiredInputs();
    }, []);
    return (
        <form className="max-w-[600px]" action={handleAdd}>
            <h3 className='text-primary text-2xl '> مورد جديد </h3>

            <div className="space-y-12">
                <div className="pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="supplier-name"
                                className="block text-lg font-medium leading-6 text-gray-900"> اسم المورد</label>
                            <div className="mt-2">
                                <input
                                    type="phone"
                                    name="supplier-name"
                                    id="supplier-name"
                                    autocomplete="given-name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="supplier-phone"
                                className="block text-lg font-medium leading-6 text-gray-900">رقم الهاتف</label>
                            <div className="mt-2">
                                <input
                                    type="phone"
                                    name="supplier-phone"
                                    id="supplier-phone"
                                    autocomplete="given-name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="supplier-address"
                                className="block text-lg font-medium leading-6 text-gray-900">  عنوان المورد</label>
                            <div className="mt-2">
                                <input
                                    type="address"
                                    name="supplier-address"
                                    id="supplier-address"
                                    autocomplete="given-address"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="supplier-number"
                                className="block text-lg font-medium leading-6 text-gray-900"> رقم المورد</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="supplier-number"
                                    id="supplier-number"
                                    autocomplete="given-number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="supplier-tax-number"
                                className="block text-lg font-medium leading-6 text-gray-900"> الرقم الضريبى</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="supplier-tax-number"
                                    id="supplier-tax-number"
                                    autocomplete="given-number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="supplier-bank-account"
                                className="block text-lg font-medium leading-6 text-gray-900">  الحساب البنكى</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="supplier-bank-account"
                                    id="supplier-bank-account"
                                    autocomplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">الغاء </button>
                <button
                    type="submit"
                    className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    حفظ
                </button>
            </div>
        </form>
    )
}

export default AddSupplierForm

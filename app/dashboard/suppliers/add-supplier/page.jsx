import AddSupplierForm from '@/components/AddSupplierForm'
import Link from 'next/link'
import { HiChevronDoubleLeft, HiOutlineUsers } from 'react-icons/hi'

export default function AddSupplier() {
    return (
        <>
            <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
                <Link href={"/dashboard/suppliers"} >
                    <HiOutlineUsers className='text-primary' />
                </Link>
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'>اضافة مورد</h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">
                <AddSupplierForm />
            </div>
        </>
    )
}
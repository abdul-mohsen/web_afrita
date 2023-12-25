import AddClientForm from '@/components/AddClientForm'
import Link from 'next/link'
import { HiChevronDoubleLeft, HiOutlineUsers } from 'react-icons/hi'

export default function AddClient() {
    return (
        <div>
            <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
                <Link href={"/dashboard/clients"} >
                    <HiOutlineUsers className='text-primary' />
                </Link>
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'> اضافة عميل </h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">
                <AddClientForm />
            </div>
        </div>
    )
}
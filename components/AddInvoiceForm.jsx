"use client"
import { HiChevronDoubleLeft } from 'react-icons/hi'
import { IoReceiptOutline } from 'react-icons/io5'
import { Tabs } from '.'
import PurchasesInvoice from './PurchasesInvoice'
import SaleInvoice from './SaleInvoice'
import {useState} from 'react'
import Link from 'next/link'

const AddInvoiceForm = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <div>
            <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
                <Link href={"/dashboard/invoices"} >
                    <IoReceiptOutline className='text-primary' />
                </Link>
                <HiChevronDoubleLeft className='text-app-gray' />
                <h2 className='text-app-gray'>اضافة فاتورة</h2>
            </div>
            <div className="add-form w-full bg-white p-8 rounded-xl">

                <Tabs
                    items = {invoicesTypes}
                    useStateIn = {setSelectedTab}
                    />
                {invoicesTypes.map((item, index) => (
                    <div 
                        className={`${selectedTab === index ? "" : "hidden" }`}
                    >
                        {item.content}
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default AddInvoiceForm

const invoicesTypes = [
    {
        title: "فاتورة بيع",
        content: (
            <>
                <SaleInvoice />
            </>
        ),
    },
    {
        title: "فاتورة شراء",
        content: (
            <>
                <PurchasesInvoice />
            </>
        ),

    },
]


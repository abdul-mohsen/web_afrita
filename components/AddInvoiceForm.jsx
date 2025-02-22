"use client"
import { HiChevronDoubleLeft } from 'react-icons/hi'
import { IoReceiptOutline } from 'react-icons/io5'
import { Tabs } from '.'
import PurchasesInvoice from './PurchasesInvoice'
import SaleInvoice from './SaleInvoice'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import axios from 'axios'


const AddInvoiceForm = ({action, id}) => {

  const [selectedTab, setSelectedTab] = useState(0)
  const { data: userSession } = useSession();
  const [invoiceToEdit, setInvoiceToEdit] = useState(); 

  useEffect(() => {
    if (action === "edit") {
      // Get An Invoice With Id
      const fetchInvoice = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URLL}/api/v1/bills/${id}`,
            {
              headers: {
                Authorization: `Bearer ${userSession?.user?.accessToken}`,
              },
            }
          );
          setInvoiceToEdit(response.data);
        } catch (error) {console.error('Error fetching invoice:', error);}
      };
      fetchInvoice();
    }
  }, [userSession, action, id]);
    
  return (
    <div>
      <div className='breadcrumb w-full text-xl flex flex-row gap-5 justify-start items-center mb-6'>
        <Link href={"/dashboard/invoices"} >
            <IoReceiptOutline className='text-primary' />
        </Link>
        <HiChevronDoubleLeft className='text-app-gray' />
        {action === "edit" ? (
          <h2 className='text-app-gray'>تعديل فاتورة {id}</h2>
          ) : (
          action === "add" && (
              <h2 className='text-app-gray'>اضافة فاتورة</h2>
          )
        )}
      </div>
      <div className="add-form w-full bg-white p-8 rounded-xl">
        {action === "edit" ? (
            <SaleInvoice 
              action={"edit"}
              {...invoiceToEdit}
            />
          ) : (
            <>
              <Tabs items={invoicesTypes} useStateIn={setSelectedTab} />
              {invoicesTypes.map((item, index) => (
                <div key={index}>
                  {selectedTab === index && item.content}
                </div>
              ))}
            </>  
          )
        }
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
                <SaleInvoice  />
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


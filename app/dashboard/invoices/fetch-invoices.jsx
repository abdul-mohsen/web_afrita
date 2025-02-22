'use client';
import { useState, useEffect } from 'react';  // Import useEffect and useState
import { InvoicesItem } from '@/components';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const FetchInvoices = () => {

  const { data: userSession } = useSession();
  const [invoices, setInvoices] = useState([]); 
  const router = useRouter()

  // Fetch All Invoices
  useEffect(() => {
    const fetchInvoices = async () => {
      try {

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URLL}/api/v2/bill/all`,
          {},
          {
            headers: {
              Authorization: `Bearer ${userSession?.user?.accessToken}`,
            },
          }
        );
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();  
  }, []);  

  // To Delete An Invoice
  const deleteInvoice = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URLL}/api/v1/bills/2?store_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${userSession?.user?.accessToken}`,
          },
        }
      );
      if (response.ok) {
        console.log(`Invoice ${id} deleted successfully.`);
      }
      toast.success(`Invoice ${id} deleted successfully`)
      router.push('/dashboard/invoices')
      if (!response) {
        const { error } = response
        toast.error(error)
      }
    } catch (error) {
      toast.error(`Invoice ${id} can't deleted`)
      router.push('/dashboard/invoices')
      console.error(`Error deleting invoice with ID ${id}:`, error.message);
    }
  };

  return (
    <>
      {invoices.map((item, index) => (
        <InvoicesItem
          {...item}
          key={index}
          order={index}
            deleteBtn={deleteInvoice}
        />
      ))}
    </>
  );
};

export default FetchInvoices;

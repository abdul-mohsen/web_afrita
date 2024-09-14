'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { SupplierItem } from "@/components";

const FetchSuppliers = () => {

    const { data: userSession } = useSession();
    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v2/parts_provider`,
          {
            headers: {
              Authorization: `Bearer ${userSession?.user?.accessToken}`,
            },
          }
        );
        console.error('Success fetching suppliers :', response);
        setSuppliers(response.data)
        
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();  
  }, []);  

  const router = useRouter()

  // To Delete An Invoice
  const deleteInvoice = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills/2?store_id=${id}`,
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
            {suppliers.map((item) => {
                return <SupplierItem {...item} key={item._id}/>
            })}
    </>
  );
};

export default FetchSuppliers;

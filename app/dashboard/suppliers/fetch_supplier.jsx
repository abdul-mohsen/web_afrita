'use client';
import instance from '@/axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { SupplierItem } from "@/components";

const FetchSuppliers = () => {

  const [suppliers, setSuppliers] = useState([])
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await instance.get(
          `/api/v2/supplier/all`);
        console.error('Success fetching suppliers :', response.data);
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
      const response = await instance.delete(
        `/api/v1/bills/2?store_id=${id}`);
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
        console.error('Success fetching suppliers :', item);
        return <SupplierItem {...item} key={item._id} />
      })}
    </>
  );
};

export default FetchSuppliers;

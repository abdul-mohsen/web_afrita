"use client";
import { useState, useEffect } from "react"; // Import useEffect and useState
import { InvoicesItem } from "@/components";
import { toast } from "sonner";
import instance from "../../../axios";
import { useRouter } from "next/navigation";

const FetchInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const router = useRouter();

  // Fetch All Invoices
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await instance.post(`/api/v2/bill/all`, {});
        setInvoices(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
    fetchInvoices();
  }, []);

  // To Delete An Invoice
  const deleteInvoice = async (id, type) => {
    try {
      const response = await instance.delete(
        type ? `/api/v2/bill/${id}` : `/api/v2/purchase_bill/${id}`,
      );
      if (response.ok) {
        console.log(`Invoice ${id} deleted successfully.`);
      }
      toast.success(`Invoice ${id} deleted successfully`);
      router.push("/dashboard/invoices");
      if (!response) {
        const { error } = response;
        toast.error(error);
      }
    } catch (error) {
      toast.error(`Invoice ${id} can't deleted`);
      router.push("/dashboard/invoices");
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

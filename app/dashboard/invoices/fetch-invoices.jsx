"use client";
import { useState, useEffect } from "react"; // Import useEffect and useState
import ConfirmationDialog from "@/components/ConfirmationDialog";
import { InvoicesItem } from "@/components";
import { toast } from "sonner";
import instance from "../../../axios";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const FetchInvoices = () => {
  const searchParams = useSearchParams();
  const [invoices, setInvoices] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenDialog = (id) => {
    setSelectedId(id); // Set the ID of the item to delete
    setDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setSelectedId(null);
    setDialogOpen(false);
  };
  const handleConfirm = async (id, note) => {
    try {
      const response = await instance.post(`/api/v2/bill/credit`, {
        bill_id: id,
        note: note,
      });
    } catch (error) {
      toast.error(`Invoice ${id} can't deleted`);
      console.error("Error:", error); // Handle error
    }
  };

  const router = useRouter();

  // Fetch All Invoices
  useEffect(() => {
    const fetchInvoices = async () => {
      const currentPage = parseInt(searchParams.get("page")) || 0; // Default to page 1
      try {
        const response = await instance.post(`/api/v2/bill/all`, {
          page_number: currentPage,
        });
        if (response.data != null) {
          setInvoices(response.data);
        } else {
          console.log("no Data");
        }
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
    fetchInvoices();
  }, []);

  // To Delete An Invoice
  const deleteInvoice = async (id, type) => {
    try {
      var response;
      if (type) {
        handleOpenDialog(id);
      } else {
        response = await instance.delete(`/api/v2/purchase_bill/${id}`);
        if (response.ok) {
          console.log(`Invoice ${id} deleted successfully.`);
        }
        toast.success(`Invoice ${id} deleted successfully`);
        router.push("/dashboard/invoices");
        if (!response) {
          const { error } = response;
          toast.error(error);
        }
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
      <ConfirmationDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirm}
        itemId={selectedId}
      />
    </>
  );
};

export default FetchInvoices;

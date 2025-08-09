"use client";

import { InvoivePreview } from "@/components";
import Skeleton from "@/components/Skeleton";
import { useEffect, useState } from "react";
import instance from "../axios";

export default function Orders({ params }) {
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const { id } = await params;
        const response = await instance.get(`/api/v2/bill/` + id, {});
        console.log(response.data);
        setInvoice(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <section id="orders" className="h-full">
      <h1 className="mx-auto my-4">الطلبات</h1>
      <Skeleton />
      {/* <InvoivePreview /> */}
    </section>
  );
}

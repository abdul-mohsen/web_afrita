"use client";

import instance from "@/axios";
import { InvoivePreview } from "@/components";
import Skeleton from "@/components/Skeleton";
import { useEffect, useState } from "react";

export default function Orders({ params }) {
  const [invoice, setInvoice] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const { id } = await params;
        const response = await instance.get(`/api/v2/bill/` + id, {});
        console.log(response.data);
        setInvoice(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching invoices:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="orders" className="h-full">
      <h1 className="mx-auto my-4">الطلبات</h1>
      <Skeleton />
      <InvoivePreview togglue={true} data={invoice} />
    </section>
  );
}

import { AddInvoiceForm } from "@/components";

export default async function EditInvoice({ params }) {
  const { id } = await params;
  return <AddInvoiceForm action={"edit"} id={id} />;
}

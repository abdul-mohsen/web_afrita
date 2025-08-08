import { AddInvoiceForm } from "@/components";

export default function EditInvoice({ params }) {
  const { id } = params;
  return <AddInvoiceForm action={"edit"} id={id} />;
}

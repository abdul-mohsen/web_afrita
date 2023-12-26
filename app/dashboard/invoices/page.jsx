import { SectionNav, SectionTags } from "@/components";
import { HiOutlineHashtag } from 'react-icons/hi';
import { InvoicesItem } from '@/components'
import PagesNumber from "@/components/PagesNumber";
import FetchInvoices from "./fetch-invoices";

export default  function Invoices() {
  return (
    <section id='invoices'  className=" overflow-hidden">
      <div className="section-header" >
        <SectionNav
            heading="الفواتير"
            btnLabel="إضافة فاتورة"
            btnLink="/dashboard/invoices/add-invoice"
          />
      </div>
      <div className="items-container overflow-x-auto flex flex-col pb-4 mt-6 gap-6">
        <SectionTags 
          tags={[
            <HiOutlineHashtag />,
            "رقم الفاتورة",
            "قيمة الفاتورة",
            "تاريخ الفاتورة",
            "رقم المورد",
            " نوع الفاتورة",
            " حالة الفاتورة"
          ]}
          minW={800}
          />
          <FetchInvoices />
      </div>
      <div className="pt-4 flex justify-end">
        <PagesNumber />
      </div>
    </section>
  )
}
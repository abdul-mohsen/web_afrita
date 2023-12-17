import { SectionNav, SectionTags } from "@/components";
import { HiOutlineHashtag } from 'react-icons/hi';
import { InvoicesItem } from '@/components'
import PagesNumber from "@/components/PagesNumber";

export default function Invoices() {
  return (
    <section id='invoices'  className=" overflow-hidden">
      <div className="section-header" >
        <SectionNav
            heading="الفواتير"
            btnLabel="إضافة فاتورة"
            btnLink="/invoices/add-invoice"
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
        <InvoicesItem
          itemType="شراء" 
          itemStatus="مدفوعة"
          />
        <InvoicesItem 
          itemType="بيع" 
          itemStatus="مرفوضة"
          />
        <InvoicesItem
          itemType="شراء" 
          itemStatus="مدفوعة"
          />
        <InvoicesItem 
          itemType="بيع" 
          itemStatus="مرفوضة"
          />
      </div>
      <div className="pt-4 flex justify-end">
        <PagesNumber />
      </div>
    </section>
  )
}
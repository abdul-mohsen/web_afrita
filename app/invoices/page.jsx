import { SectionNav } from "@/components";
import { HiOutlineHashtag } from 'react-icons/hi';
import { InvoicesItem, InvoicesItemPaid } from '@/components'
export default function Invoices() {
    return (
      <section id='invoices'>
        <div className="section-header">
            <SectionNav
                heading="الفواتير"
                btnLabel="إضافة فاتورة"
                btnLink="/invoices/add-invoice"
                tags={[
                    <HiOutlineHashtag />,
                    "رقم الفاتورة",
                    "قيمة الفاتورة",
                    "تاريخ الفاتورة",
                    "رقم المورد",
                    " نوع الفاتورة",
                    " حالة الفاتورة"
                ]} />
            </div>
            <div className="items-container flex flex-col gap-6">
                <InvoicesItem
                  itemType="شراء" 
                  itemStatus="مدفوعة"
                  />
                <InvoicesItem 
                  itemType="بيع" 
                  itemStatus="مرفوضة"
                  />
                
            </div>
      </section>
    )
  }
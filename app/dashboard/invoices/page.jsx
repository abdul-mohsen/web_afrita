import { SectionNav, SectionTags } from "@/components";
import { HiOutlineHashtag } from 'react-icons/hi';
import { InvoicesItem } from '@/components'
import PagesNumber from "@/components/PagesNumber";
import axios from "axios";




// async function deleting(id) {
//   try {
//     const response = await axios.delete(
//       `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills/1?store_id=${id}`
//     );
//     if (response.ok) {
//       console.log(`Invoice deleted successfully.`);
//     }
//   } catch (error) {
//     console.error(`Error deleting invoice with ID ${id}:`, error.message);
//   }
// };
// async function editing(id, updatedData) {
//   try {
//     const response = await axios.put(
//       `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills/${id}`,
//       updatedData
//     );
//     if (response.ok) {
//       console.log(`Invoice with ID ${id} edited successfully.`);
//     }
//   } catch (error) {
//     console.error(`Error editing invoice with ID ${id}:`, error.message);
//   }
// }

export default async function Invoices() {
//     // const {invoices} = await getInvoices();
//     const deleteInvoice = (id) =>{
//       deleting(id)
//     }
//     const updateInvoice = (id, updatedData) =>{
//       editing(id, updatedData)
//     }
async function getInvoices(){
  try {
      const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills/purchase_register?storeId=1`,
        )
      if (response.ok) {
        console.log(response);
        return response.data;
      }
  } catch (error) {
      console.error('Error:', error.message);
  }
};
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
              {/* {invoices.map((item, index) => {
                <InvoicesItem
                  {...item}
                  key={index}
                  deleteBtn={deleteInvoice}
                  editeBtn={updateInvoice}
                  />
              })} */}
        {/* <InvoicesItem 
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
          /> */}
      </div>
      <div className="pt-4 flex justify-end">
        <PagesNumber />
      </div>
    </section>
  )
}
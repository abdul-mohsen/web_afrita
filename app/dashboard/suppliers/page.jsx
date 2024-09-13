import { SectionTags, SupplierItem } from "@/components";
import { SectionNav } from "@/components";
import DropdownHeading from "@/components/DropdownHeading";
import PagesNumber from "@/components/PagesNumber";
import { HiOutlineHashtag } from 'react-icons/hi';
import axios from 'axios';

export default async function Suppliers() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v2/part_provider`,
            {
                headers: {
                    Authorization: `Bearer ${userSession?.user?.accessToken}`,
                },
            }
        );
        console.error('Success fetching invoices:', response);
    } catch (error) {
        console.error('Error fetching invoices:', error);
    }
    
    return (
        <section id='suppliers' className=" overflow-hidden">
            <div className="section-header">
            <SectionNav
                heading={<DropdownHeading  heading="الموردين" options={["العملاء"]} link="/dashboard/clients" />}
                btnLabel="إضافة مورد"
                btnLink="/dashboard/suppliers/add-supplier"
            />
            </div>
            
            <div className="items-container overflow-x-auto flex flex-col pb-4 mt-6 gap-6">
                <SectionTags 
                    tags={[
                    <HiOutlineHashtag />,
                        "اسم المورد",
                        "عنوان المورد",
                        "رقم الهاتف",
                        "رقم المورد",
                        "الرقم الضريبى"
                    ]}
                    minW={700} 
                />
            </div>
                <div className="pt-4 flex justify-end">
                    <PagesNumber />
                </div>
        </section>
    )
}

import { SectionTags, SupplierItem } from "@/components";
import { SectionNav } from "@/components";
import DropdownHeading from "@/components/DropdownHeading";
import PagesNumber from "@/components/PagesNumber";
import { HiOutlineHashtag } from 'react-icons/hi';


export default function Clients() {
    return (
        <section id='clients' className=" overflow-hidden">
            <div className="section-header">
            <SectionNav
                heading={<DropdownHeading  heading="العملاء" options={["الموردين"]} link="/suppliers" />}
                btnLabel="إضافة عميل"
                btnLink="/clients/add-client"
            />
            </div>
            
            <div className="items-container overflow-x-auto flex flex-col pb-4 mt-6 gap-6">
            <SectionTags 
                    tags={[
                    <HiOutlineHashtag />,
                        "اسم العامل",
                        "عنوان المورد",
                        "رقم العامل",
                        "رقم المورد",
                        "الرقم العامل"
                    ]}
                    minW={700} 
                />
                <SupplierItem />
                <SupplierItem />
                <SupplierItem />
                <SupplierItem />
                
            </div>
                <div className="pt-4 flex justify-end">
                    <PagesNumber />
                </div>
        </section>
    )
}

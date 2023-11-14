import { SectionTags, SupplierItem } from "@/components";
import { SectionNav } from "@/components";
import DropdownHeading from "@/components/DropdownHeading";
import PagesNumber from "@/components/PagesNumber";
import { HiOutlineHashtag } from 'react-icons/hi';


export default function Suppliers() {
    return (
        <section id='suppliers' className=" overflow-hidden">
            <div className="section-header">
            <SectionNav
                heading={<DropdownHeading  heading="الموردين" options={["العملاء"]} />}
                btnLabel="إضافة مورد"
                btnLink="/suppliers/add-supplier"
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

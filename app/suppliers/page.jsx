import { SupplierItem } from "@/components";
import { SectionNav } from "@/components";
import DropdownHeading from "@/components/DropdownHeading";
import PagesNumber from "@/components/PagesNumber";
import { HiOutlineHashtag } from 'react-icons/hi';


export default function Products() {
    return (
        <section id='products'>
            <div className="section-header">
            <SectionNav
                heading={<DropdownHeading  heading="الموردين" options={["العملاء"]} />}
                btnLabel="إضافة مورد"
                btnLink="/suppliers/add-supplier"
                tags={[
                    <HiOutlineHashtag />,
                    "اسم المورد",
                    "عنوان المورد",
                    "رقم الهاتف",
                    "رقم المورد",
                    "الرقم الضريبى"
                ]} />
            </div>
            
            <div className="items-container flex flex-col gap-6">
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
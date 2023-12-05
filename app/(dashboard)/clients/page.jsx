import { SectionTags } from "@/components";
import { SectionNav } from "@/components";
import ClientItem from "@/components/ClientItem";
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
                        "اسم العميل",
                        "عنوان العميل",
                        "رقم الجوال",
                        "رقم العميل",
                        "الرقم المرجعى"
                    ]}
                    minW={700} 
                />
                <ClientItem />
                <ClientItem />
                <ClientItem />
                <ClientItem />
                
            </div>
                <div className="pt-4 flex justify-end">
                    <PagesNumber />
                </div>
        </section>
    )
}

import { ProductItem } from "@/components";
import { SectionNav } from "@/components";
import { SectionTags } from "@/components";
import PagesNumber from "@/components/PagesNumber";

import { HiOutlineHashtag } from 'react-icons/hi';

export default function Products() {


    return (
        <section id='products' className=" overflow-hidden">
            <div className="section-header">
            <SectionNav
                heading="المنتجات"
                quantity="500"
                btnLabel="إضافة منتج"
                btnLink="/products/addProduct"
            />
            </div>
            
            <div className="items-container overflow-x-auto flex flex-col pb-4 mt-6 gap-6">
                <SectionTags 
                    tags={[
                        <HiOutlineHashtag />,
                        "اسم القطعة",
                        "رقم القطعة",
                        "السعر",
                        "اجمالى الكمية",
                        "مكان القطعة"
                    ]}
                    minW={700} 
                />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
            <div className="pt-4 flex justify-end">
                    <PagesNumber />
                </div>

        </section>
    )
}

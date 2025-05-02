
import instance from "@/axios";
import { ProductItem } from "@/components";
import { SectionNav } from "@/components";
import { SectionTags } from "@/components";
import PagesNumber from "@/components/PagesNumber";
import { unstable_noStore } from "next/cache";
import { HiOutlineHashtag } from 'react-icons/hi';

async function getProducts() {
    // It caches it by default ¯\_(ツ)_/¯ inshallah it fixes your issue
    unstable_noStore();
    const response2 = await instance.get(`/api/v2/supplier/all`);
    const response = await instance.get(`/api/v2/product/all`);
    return response.data;

};

export default async function Products() {

    const { products } = await getProducts()

    return (
        <section id='products' className=" overflow-hidden">
            <div className="section-header">
                <SectionNav
                    heading="المنتجات"
                    quantity="500"
                    btnLabel="إضافة منتج"
                    btnLink="/dashboard/products/addProduct"
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
                {products.map((item) => {
                    return <ProductItem {...item} key={item._id} />
                })}
            </div>
            <div className="pt-4 flex justify-end">
                <PagesNumber />
            </div>
        </section>
    )
}

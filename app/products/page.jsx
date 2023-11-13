import { ProductItem } from "@/components";
import { SectionNav } from "@/components";
import PagesNumber from "@/components/PagesNumber";

import { HiOutlineHashtag } from 'react-icons/hi';

async function getProducts() {
    const res = await fetch('http://localhost:3000/api/products')
    

    return res.json()
}

export default async function Products() {
    const {products} = await getProducts()
    // const {products} = data

    console.log(products)

    return (
        <section id='products' className=" overflow-hidden">
            <div className="section-header">
            <SectionNav
                heading="المنتجات"
                quantity="500"
                btnLabel="إضافة منتج"
                btnLink="/products/addProduct"
                tags={[
                    <HiOutlineHashtag />,
                    "اسم القطعة",
                    "رقم القطعة",
                    "السعر",
                    "اجمالى الكمية",
                    "مكان القطعة"
                ]} />
            </div>
            
            <div className="items-container overflow-x-auto flex flex-col gap-6">
                {products.map((item) => {
                    return <ProductItem {...item} key={item._id}/>
                })}
              
            </div>
            <div className="pt-4 flex justify-end">
                    <PagesNumber />
                </div>

        </section>
    )
}

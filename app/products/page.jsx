
import { ProductItem, SectionNav } from "@/components";
import { HiOutlineHashtag } from 'react-icons/hi';

export default function Products() {


    return (
        <section id='products'>
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
            
            <div className="items-container flex flex-col gap-6">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

        </section>
    )
}


'use client';
import instance from "@/axios";
import { ProductItem } from "@/components";
import { SectionNav } from "@/components";
import { SectionTags } from "@/components";
import PagesNumber from "@/components/PagesNumber";
import { unstable_noStore } from "next/cache";
import { useEffect, useState } from "react";
import { HiOutlineHashtag } from 'react-icons/hi';

export default function Products() {
    async function getProducts() {
        unstable_noStore()
        const res = await instance.get("/api/v2/product/all")
        console.log(res.status, res.data)
        return res.data
    };

    const [products, setProduct] = useState([]);

    // Fetch All Invoices
    useEffect(() => {

        const fetchInvoices = async () => {
            try {
                setProduct(await getProducts());
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };
        fetchInvoices();

    }, []);
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
        </section >
    )
}

'use client'
import { SectionNav, SectionTags, SupplierItem } from "@/components";
import DropdownHeading from "@/components/DropdownHeading";
import PagesNumber from "@/components/PagesNumber";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from "react";
import { HiOutlineHashtag } from 'react-icons/hi';

export default function Suppliers() {
    const { data: userSession } = useSession();
    const [suppliers, setSuppliers] = useState(null)
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v2/parts_provider`,
          {
            headers: {
              Authorization: `Bearer ${userSession?.user?.accessToken}`,
            },
          }
        );
        setSuppliers(response.data)
        
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();  
  }, []);  
     
    
    if (!suppliers) return <div>Loading...</div>
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
                {suppliers.map((item) => {
                    return <SupplierItem {...item} key={item._id}/>
                })}
            </div>
                <div className="pt-4 flex justify-end">
                    <PagesNumber />
                </div>
        </section>
    )
}

"use client";
import { SectionNav, SectionTags, SupplierItem } from "@/components";
import DropdownHeading from "@/components/DropdownHeading";
import PagesNumber from "@/components/PagesNumber";
import { HiOutlineHashtag } from "react-icons/hi";
import FetchSuppliers from "./fetch_supplier";

export default function Suppliers() {
  const [refreshKey, setRefreshKey] = React.useState(0); // To trigger data refresh

  const handlePageChange = () => {
    setRefreshKey((prev) => prev + 1); // Increment to refresh data display component
  };

  return (
    <section id="suppliers" className=" overflow-hidden">
      <div className="section-header">
        <SectionNav
          heading={
            <DropdownHeading
              heading="الموردين"
              options={["العملاء"]}
              link="/dashboard/clients"
            />
          }
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
            "الرقم الضريبى",
          ]}
          minW={700}
        />

        <FetchSuppliers key={refreshKey} />
      </div>
      <div className="pt-4 flex justify-end">
        <PagesNumber onPageChange={handlePageChange} />
      </div>
    </section>
  );
}

'use client';
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlinePrinter } from "react-icons/hi2";
import { InvoivePreview } from ".";
import { markRequiredInputs } from '@/utils/utils';
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SaleInvoice = ({
    action,
    id,
    effective_date,
    sub_total,
    store_id,
    merchant_id,
    product = [
        {
            id: 0,
            part_name: "",
            price: 0,
            quantity: 0,
        },
        ],
    }) => {
      
    const router = useRouter()
    const [invoDate, setInvoDate] = useState('');
    const [invoicesId, setInvoicesId] = useState([]);
    const { data: userSession } = useSession();

    const addInvoice = async (newData) => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills`,
          newData,
          {
            headers: {
              Authorization: `Bearer ${userSession?.user?.accessToken}`,
            },
          }
        );
        if (response.data) {
          console.log(`Invoice add successfully.`);
          toast.success('Invoice add successfully.')
          router.push('/dashboard/invoices')
        }
      } catch (error) {
        console.error(`Error add invoice :`, error.message);
      }
    };

    const updateInvoice = async (id , updatedData) => {
      try {
          const response = await axios.put(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills/${id}`,
            updatedData,
            {
              headers: {
                Authorization: `Bearer ${userSession?.user?.accessToken}`,
              },
            }
          );
      
          if (response.status === 200) {
            toast.success('Invoice updated successfully.');
            console.log(`Invoice with ID ${id} edited successfully.`);
          } else {
            toast.error('Failed to update invoice.');
          }
        } catch (error) {
          toast.error('An error occurred while updating invoice.');
          console.error(`Error editing invoice with ID ${id}:`, error.message);
        }
    };
    
    useEffect(() => {
        if (action === "edit") {
          const getInvoTodayDate = (date) => {
            if (Date.parse(date)) {
              const invoDataBack = new Date(date);
              const formateInvoDate = invoDataBack.toISOString().split('T')[0];
              setInvoDate(formateInvoDate);
            } else {
              console.error("Invalid date format:", date);
            }
          };
          getInvoTodayDate(effective_date);

        } else {
          const getTodayDate = () => {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            setInvoDate(formattedDate);
          };
          getTodayDate();

          const fetchInvoices = async () => {
            try {
              const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/bills?storeId=1`,
                {
                  headers: {
                    Authorization: `Bearer ${userSession?.user?.accessToken}`,
                  },
                }
              );
              setInvoicesId(response.data);
              setFormData({ ...formData, id: invoicesId.length + 1 })
              
            } catch (error) {
              console.error('Error fetching invoices:', error);
            }
          };
          fetchInvoices();  
        }
      }, [action, effective_date, userSession]);

    console.log("Invoice Date:", invoDate)
    
    const [previewInvoice, setPreviewInvoice] = useState(false);

    const togglePreviewInvoice = () => {
        setPreviewInvoice(!previewInvoice);
    };
    useEffect(() => {
        markRequiredInputs();
    }, []);

    useEffect(() => {
        if (action === "edit") {
          setFormData({
            id: id,
            effective_date: invoDate,
            tax_number: 0,
            merchant_id: merchant_id ,
            store_id: store_id ,
            product: product ?? [
              {
                id: 0,
                part_name: "",
                price: '',
                quantity: 0,
              },
            ],
            sub_total: sub_total,
            tax: 0,
            total_amount: 0,
          });
        }
      }, [action, id, invoDate, merchant_id, store_id, product, sub_total]);
    

    const [formData, setFormData] = useState( {
        id: id,
        effective_date: invoDate ,
        tax_number: 0,
        merchant_id: merchant_id ?? 0,
        store_id: store_id ?? 0,
        product: product ?? [
          {
            id: 0,
            part_name: "",
            price: '',
            quantity: 0,
          },
        ],
        sub_total: sub_total ?? 0,
        tax: 0,
        total_amount: 0,
      });

    const handleSubmit = async (e) => {
        if(action === "edit"){
            e.preventDefault();
            const updateData = {
                store_id: formData.store_id,
                products: [
                    {
                        product_id: formData.product[0].id,
                        price: formData.product[0].price,
                        quantity: formData.product[0].quantity
                    }
                ]
            }
            updateInvoice(id, updateData);
        } else {
                e.preventDefault();
                const newData = {
                    store_id: formData.store_id,
                    products: [
                        {
                            product_id: formData.product[0].id,
                            price: formData.product[0].price,
                            quantity: formData.product[0].quantity
                        }
                    ]
                }
                addInvoice(newData);
            }
        
    };
      const handleInputChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleInputPruductChange = (e) => {
        const updatedProduct = {
          ...formData.product[0],
          [e.target.name]: e.target.value,
        };

        const calculatedValue = updatedProduct.price * updatedProduct.quantity;
        const totalAmount = (parseFloat(calculatedValue + calculatedValue * 0.14)).toFixed(2);
      
        setFormData({
          ...formData,
          product: [updatedProduct],
          sub_total: calculatedValue,
          total_amount: totalAmount,
        });
      };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-[600px]">
            {action === "edit" ? (
                    <h3 className='text-primary text-2xl'>تعديل </h3>
                    ) : (
                        <h3 className='text-primary text-2xl '>فاتورة جديدة</h3>
                    )}
                <div className="space-y-12">
                    <div className="pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="id"
                                    className="block text-lg font-medium leading-6 text-primary">رقم الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        value={formData.id}
                                        disabled
                                        type="text"
                                        name="id"
                                        id="invoice_id"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 cursor-not-allowed"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="effective_date"
                                    className="block text-lg font-medium leading-6 text-primary"> تاريخ الفاتورة</label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="effective_date"
                                        id="effective_date"
                                        value={invoDate}
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6 cursor-not-allowed"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="tax_number"
                                    className="block text-lg font-medium leading-6 text-primary">الرقم الضريبي</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="tax_number"
                                        id="tax_number"
                                        value='615243'
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6 cursor-not-allowed"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="merchant_id"
                                    className="block text-lg font-medium leading-6 text-primary">اسم العميل</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.merchant_id}
                                        type="text"
                                        name="merchant_id"
                                        id="merchant_id"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="merchant_id"
                                    className="block text-lg font-medium leading-6 text-primary">رقم العميل</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.merchant_id}
                                        type="text"
                                        name="merchant_id"
                                        id="merchant_id"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="id"
                                    className="block text-lg font-medium leading-6 text-primary"> رقم الطلبية</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputPruductChange}
                                        value={formData.product[0].id}
                                        type="text"
                                        name="id"
                                        id="product_id"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 border-b border-gray-900/10 pb-12">
                            <h3 className='text-primary text-2xl col-span-4 '> معلومات الطلبية</h3>
                            <div className="md:col-span-2 col-span-4">
                                <label
                                    htmlFor="part_name"
                                    className="block text-lg font-medium leading-6 text-primary">القطعة</label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleInputPruductChange}
                                        value={formData.product[0].part_name}
                                        type="text"
                                        name="part_name"
                                        id="part_name"
                                        autoComplete="family-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="md:col-span-1 max-md:col-span-2 max-sm:col-span-4 flex flex-row flex-wrap gap-x-6">
                                <label htmlFor="quantity" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">الكمية</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        onChange={handleInputPruductChange}
                                        value={formData.product[0].quantity}
                                        id="quantity"
                                        name="quantity"
                                        type="number"
                                        autoComplete="number"
                                        min={0}
                                        required

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                                
                            <div className="md:col-span-1 max-md:col-span-2 max-sm:col-span-4 flex flex-row flex-wrap gap-x-6">
                                <label htmlFor="price" className="block text-lg font-medium leading-6 text-primary flex-1 w-full basis-full ">السعر</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        onChange={handleInputPruductChange}
                                        value={formData.product[0].price}
                                        id="price"
                                        name="price"
                                        type="number"
                                        min={0}
                                        autoComplete="number"
                                        required

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label htmlFor="sub_total" className="block text-lg font-medium leading-6 text-primary flex-1">المجموع</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        value={formData.sub_total}
                                        readOnly
                                        id="sub_total"
                                        name="sub_total"
                                        type="text"
                                        autoComplete="number"
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label htmlFor="tax" className="block text-lg font-medium leading-6 text-primary flex-1">الضريبة</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="tax"
                                        name="tax"
                                        type="text"
                                        value="14%"
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-app-light-gray font-bold text-app-gray sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className=" flex flex-row flex-wrap col-span-4 sm:col-start-3 sm:col-end-5 gap-x-6 items-center">
                                <label htmlFor="total_amount" className="block text-lg font-medium leading-6 text-primary flex-1">المجموع الكلى</label>
                                <div className="mt-2 flex-1">
                                    <input
                                        id="total_amount"
                                        name="total_amount"
                                        type="text"
                                        value={formData.total_amount}
                                        autoComplete="number"
                                        disabled
                                        className="block w-full rounded-md border-0 py-1.5 bg-app-light-gray font-bold text-app-gray shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:justify-between justify-center max-md:gap-6 items-center mt-6">
                    <div className='flex flex-row gap-6 text-primary'>
                        <span className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
                            <HiOutlinePrinter className='w-6 h-6' />
                        </span>
                        <span  onClick={togglePreviewInvoice} className='block p-2 border border-primary rounded-full cursor-pointer opacity-30 hover:opacity-100'>
                            <HiOutlineEye className='w-6 h-6' />
                        </span>
                    </div>
                    <div className='flex items-center justify-end gap-x-6'>
                        <button
                            type="button" 
                            className="rounded-md md:py-4 py-2 px-6 text-sm font-semibold leading-6 text-primary border-2 border-primary">حفظ مسودة</button>
                        <button
                            type="submit"
                            className="rounded-md bg-primary md:py-4 py-2 px-6 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-2 border-primary">حفظ الفاتورة</button>
                    </div>

                </div>
            </form>
            {previewInvoice && <InvoivePreview togglue={togglePreviewInvoice} />}     
        </>
    )
}
export default SaleInvoice
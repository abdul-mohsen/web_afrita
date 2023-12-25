import React from 'react'

const ProductInfo = ({purchase_price,selling_price,product_rack,product_column}) => {
    return (
        <div className="product-info p-6">

            <div className='text-primary flex font-semibold mb-4'>
                <h3>تفاصيل المنتج</h3>
            </div>

            <div className="variety-details grid grid-cols-3 text-app-gray">

                <div className="amount col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '>اجمالى الكمية</h4>
                    <div className="brunch-amount flex gap-4">
                        <span>الفرع 1</span>
                        <span>{purchase_price}</span>
                    </div>
                    <div className="brunch-amount flex gap-4">
                        <span>الفرع 2</span>
                        <span>{selling_price}</span>
                    </div>
                </div>

                <div className="place col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '> مكان القطعة</h4>
                    <div className=" flex gap-4">
                        <span>رف {product_rack}</span>
                        <span>عمود {product_column}</span>
                    </div>
                    <div className=" flex gap-4">
                    <span>رف {product_rack}</span>
                        <span>عمود {product_column}</span>
                    </div>
                </div>

                <div className="price col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '> سعر القطعة</h4>
                    <div className="purchase-price flex gap-4">
                        <span> سعر الشراء</span>
                        <span>{purchase_price}</span>
                    </div>
                    <div className="selling-price flex gap-4">
                        <span>سعر البيع</span>
                        <span>{selling_price}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProductInfo
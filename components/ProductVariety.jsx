import React from 'react'

const ProductVariety = () => {
  return (
    <div className='varieties'>

        <div className="variety p-10">
            <div className='text-primary flex font-semibold mb-4'>
                <h3>سماعات المانى استيراد </h3>
                <span className='mr-4'>#2534</span>
            </div>
            <div className="variety-details grid grid-cols-3 text-app-gray">
                <div className="amount col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '>اجمالى الكمية</h4>
                    <div className="brunch-amount flex gap-4">
                        <span>الفرع 1</span>
                        <span>200</span>
                    </div>
                    <div className="brunch-amount flex gap-4">
                        <span>الفرع 2</span>
                        <span>300</span>
                    </div>
                </div>
                <div className="price col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '> سعر القطعة</h4>
                    <div className="purchase-price flex gap-4">
                        <span> سعر الشراء</span>
                        <span>200</span>
                    </div>
                    <div className="selling-price flex gap-4">
                        <span>سعر البيع</span>
                        <span>300</span>
                    </div>
                </div>
                <div className="place col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '> مكان القطعة</h4>
                    <div className=" flex gap-4">
                        <span>رف 1</span>
                        <span>عمود A</span>
                    </div>
                    <div className=" flex gap-4">
                    <span>رف 1</span>
                        <span>عمود A</span>
                    </div>
                </div>
                

            </div>
        </div>
        <div className="variety p-10">
            <div className='text-primary flex font-semibold mb-4'>
                <h3>سماعات يابانى استيراد </h3>
                <span className='mr-4'>#2935</span>
            </div>
            <div className="variety-details grid grid-cols-3 text-app-gray">
                <div className="amount col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '>اجمالى الكمية</h4>
                    <div className="brunch-amount flex gap-4">
                        <span>الفرع 1</span>
                        <span>200</span>
                    </div>
                    <div className="brunch-amount flex gap-4">
                        <span>الفرع 2</span>
                        <span>300</span>
                    </div>
                </div>
                <div className="price col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '> سعر القطعة</h4>
                    <div className="purchase-price flex gap-4">
                        <span> سعر الشراء</span>
                        <span>200</span>
                    </div>
                    <div className="selling-price flex gap-4">
                        <span>سعر البيع</span>
                        <span>300</span>
                    </div>
                </div>
                <div className="place col-span-1 flex flex-col gap-4">
                    <h4 className='font-bold '> مكان القطعة</h4>
                    <div className=" flex gap-4">
                        <span>رف 1</span>
                        <span>عمود A</span>
                    </div>
                    <div className=" flex gap-4">
                    <span>رف 1</span>
                        <span>عمود A</span>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default ProductVariety
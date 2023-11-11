import { HiOutlineDotsVertical } from "react-icons/hi"

const SupplierItem = () => {
  return (
        <div className="supplier flex flex-row  bg-white">
            <div className="details flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(0,_1fr))] text-app-gray pr-4 py-10">
                <span className='supplier-number'>01</span>
                <h3 className='supplier-name text-primary font-bold'>INV-0001</h3>
                <span className="supplier-adress">الرياض</span>
                <span className="supplier-phone">0539548246</span>
                <span className="total-id font-bold">AS-22</span>
                <span className="supplier-tax-number">615243</span>

            </div>
                <div className='actions flex flex-col justify-center items-center gap-4 w-[50px]'>
                <HiOutlineDotsVertical className="w-6 h-6 text-primary"/>
            </div>
        </div>
  )
}

export default SupplierItem
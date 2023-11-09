import { HiOutlineDotsVertical, HiOutlineTrash } from "react-icons/hi"

const InvoicesItem = ({itemType, itemStatus}) => {

  return (
    <div className="item flex flex-row  bg-white">
            <div className="details flex-1 grid grid-cols-[50px_repeat(auto-fit,_minmax(0,_1fr))] text-app-gray pr-4 py-10">
                <span className='item-number'>01</span>
                <h3 className='item-id text-primary font-bold'>INV-0001</h3>
                <span className="item-valyue">500 ر.س</span>
                <span className="item-date"></span>
                <span className="supplyer-id font-bold">AS-20</span>
                <span className="item-type">{itemType}</span>
                <span className="item-status">{itemStatus}</span>

            </div>
                <div className='actions flex flex-col justify-center items-center gap-4 w-[50px]'>
                  {itemType == "شراء"
                  ? <HiOutlineTrash className="w-6 h-6 text-red-500" />
                  : <HiOutlineDotsVertical className="w-6 h-6 text-secondry" />
                  } 
                
            </div>
        </div>
  )
}

export default InvoicesItem

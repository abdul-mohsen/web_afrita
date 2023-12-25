// import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import { CgHome } from 'react-icons/cg'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { FiBox } from 'react-icons/fi'
import { LuSettings } from 'react-icons/lu'
import { IoReceiptOutline } from 'react-icons/io5'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { HiOutlineUsers } from 'react-icons/hi2'
import { CiLocationOn } from 'react-icons/ci'


export const navLinks = [
    {   href: "/dashboard",
        label: "الرئيسية",
        icon: <CgHome className="w-5 h-5"/>
    
    },
    {   href: "/dashboard/orders", 
        label: "الطلبات",
        icon: <FiBox className="w-5 h-5" />,
        count:100
    },
    {   href: "/dashboard/products", 
        label: "المنتجات",
        icon: <HiOutlineBriefcase className="w-5 h-5" />,
        count:100
    },
    {   href: "/dashboard/setting", 
        label: "الإعدادات",
        icon: <LuSettings className="w-5 h-5" /> 
    },
    {   href: "/dashboard/invoices", 
        label: "الفواتير",
        icon: <IoReceiptOutline className="w-5 h-5" />
    },
    {   href: "/dashboard/messages", 
        label: "الرسائل",
        icon: <HiOutlineEnvelope className="w-5 h-5" />,
        count:100
    },
    {   href: "/dashboard/suppliers", 
        label: "العملاء و الموردين",
        icon: <HiOutlineUsers className="w-5 h-5" />
    },
    {   href: "/dashboard/branches", 
        label: "الفروع",
        icon: <CiLocationOn className="w-5 h-5" />
    },

];
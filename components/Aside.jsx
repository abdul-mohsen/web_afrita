import React from 'react';
import LogoImage from '/public/logo.png';
import Image from 'next/image';
import  NavLinks  from './NavLinks';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';


const Aside = () => {

   return (
    <aside className="z-20 hidden w-[18rem] overflow-y-auto bg-white md:block flex-shrink-0">
        <div className="py-4 text-gray-500">
            <a className="px-6 flex justify-center items-center text-lg font-bold w-full" href="./" >
                <Image src={LogoImage} alt="" className=' w-3/5' />
            </a>
            <NavLinks />
            <div className="px-6 my-6">
                <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg bg-primary hover:bg-primary/75 focus:outline-none focus:shadow-outline-primary">
                    تسجيل الخروج
                    <span className="mr-2" aria-hidden="true">
                    <HiOutlineArrowRightOnRectangle className='w-6 h-6'/>
                    </span>
                </button>
            </div>
        </div>
    </aside>
    )
}
export default Aside
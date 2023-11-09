import React from 'react';
import LogoImage from '/public/logo.png';
import Image from 'next/image';
import  NavLinks  from './NavLinks';


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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.89999 7.55999C9.20999 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.23999 20.08 8.90999 16.54" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 12H3.62" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.85 8.64999L2.5 12L5.85 15.35" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </aside>
    )
}
export default Aside
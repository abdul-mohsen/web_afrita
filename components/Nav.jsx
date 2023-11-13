'use client'
import useDropdown from '@/hooks/useDropdown';
import FilterNavbar from './FilterNavbar';
import AvatarImage from '/public/avatar.svg';
import Image from 'next/image'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5';
import { BiChevronDown } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
    const dropRef = useRef(null);
   const {dropdownRef,handleClick,isOpen,iconRef} = useDropdown()
   const [isUserInfo, setUserInfo] = useState(false);

    const userInfo = () => {
        setUserInfo(!isUserInfo);
      };
      const userInfoOut = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target) && dropRef.current && !dropRef.current.contains(event.target)) {
        setUserInfo(isUserInfo);
      }
    };
    useEffect(() => {
        document.addEventListener('mousedown', userInfoOut);
    
        return () => {
          document.removeEventListener('mousedown', userInfoOut);
        };
      }, []);

 


    return (
        <nav className="h-[108px] flex justify-evenly flex-row-reverse gap-6 ps-6 padding-l bg-white w-full">
            <div className="user flex justify-between flex-row items-center gap-6">
                <div className="notif max-md:hidden">
                <IoNotificationsOutline className='w-6 h-6' />
                </div>
                <div className="user-info relative flex flex-row justify-center items-center gap-2" ref={dropRef}>
                    <BiChevronDown onClick={userInfo} className='md:hidden rounded-full w-4 h-4 bg-app-light-gray text-primary cursor-pointer'/>
                    <Image src={AvatarImage} alt="User Image" id='user_image' />
                    <div  ref={dropRef} className={`${isUserInfo ? "block" : "max-md:hidden" } max-md:absolute top-full left-2 max-md:p-3 max-md:rounded-md`}>
                        <span className="user-name" id='user_name'> أحمد بن خالد</span>
                    </div>
                </div>
            </div>
            
            <div className="search-input relative flex-1 flex justify-center items-center bg-white max-md:pe-0 p-6 ps-0"
            
            >
                <label htmlFor="search" className="flex-1 w-full flex flex-row justify-between items-center px-6 py-3 rounded-md bg-app-light-gray cursor-pointer"> 
                    <span className="text-app-gray">
                    <IoSearchOutline className='w-6 h-6' />
                    </span>
                    <input type="" name="search" id="search" className="bg-app-light-gray text-primary flex-1 px-6 focus:outline-[0_!important]  border-[transparent_!important] focus:border-[transparent_!important]" />
                    <button className="text-app-gray"   onClick={handleClick} ref={iconRef}>
                    <HiOutlineAdjustmentsHorizontal className="w-6 h-6"/>
                    </button>
                </label>

           {isOpen && <div className="p-4 absolute z-[30] w-full mt-3 top-16"
           ref={dropdownRef}
           >
                 <FilterNavbar />
           </div>}
          
            </div>
        </nav>
    )
}

export default Nav
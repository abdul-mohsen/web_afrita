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
    const dropReff = useRef(null);
   const {dropdownRef,handleClick,isOpen,iconRef} = useDropdown()
   const [isUserInfo, setUserInfo] = useState(false);
   const [isSearchBar, setSearchBar] = useState(false);

    const userInfo = () => {
        setUserInfo(!isUserInfo);
      };
    const openSearchBar = () => {
        setSearchBar(true);
      };
      const mouseDown = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target) && dropRef.current && !dropRef.current.contains(event.target)) {
        setUserInfo(isUserInfo);
      } 
      if (dropReff.current && !dropReff.current.contains(event.target) && dropReff.current && !dropReff.current.contains(event.target)) {
        setSearchBar(false);
      }
    };
    useEffect(() => {
        document.addEventListener('mousedown', mouseDown);
    
        return () => {
          document.removeEventListener('mousedown', mouseDown);
        };
      }, []);

    return (
        <nav className="h-[108px] flex justify-evenly flex-row-reverse gap-6 ps-6 padding-l bg-white w-full">
            <div ref={dropRef} className="user flex justify-between flex-row items-center gap-6">
                <div className="notif max-lg:hidden">
                <IoNotificationsOutline className='w-6 h-6' />
                </div>
                <div  className="user-info relative flex flex-row justify-center items-center gap-2">
                    <BiChevronDown onClick={userInfo} className='lg:hidden rounded-full w-4 h-4 bg-app-light-gray text-primary cursor-pointer'/>
                    <Image src={AvatarImage} alt="User Image" id='user_image' />
                    <div className={`${isUserInfo ? "block" : "max-lg:hidden" } max-lg:absolute top-full max-lg:p-3 max-lg:rounded-md max-lg:bg-app-light-gray max-lg:w-max max-lg:shadow-lg max-lg:z-40  max-lg:mt-2 left-0`}>
                        <span className="user-name" id='user_name'> أحمد بن خالد</span>
                    </div>
                </div>
            </div>
            
            <div ref={dropReff} className="search-input relative flex-1 flex justify-center items-center bg-white max-md:pe-0 px-0">
              <label htmlFor="search" onClick={openSearchBar}  className={`${isSearchBar ? "flex-1 max-lg:rounded-md" : "max-lg:rounded-full"} rounded-md lg:flex-1 lg:w-full w-[70px] overflow-hidden ml-auto flex flex-row justify-between items-center px-6 py-3 bg-app-light-gray cursor-pointer`}> 
                  <span className="text-app-gray">
                  <IoSearchOutline className='w-6 h-6' />
                  </span>
                  <input type="" name="search" id="search" className=" bg-app-light-gray text-primary flex-1 px-6 focus:outline-[0_!important]  border-[transparent_!important] focus:border-[transparent_!important] w-[inherit]"/>
                  <button className="text-app-gray"   onClick={handleClick} ref={iconRef}>
                  <HiOutlineAdjustmentsHorizontal className="w-6 h-6"/>
                  </button>
              </label>

              {isOpen && <div className="absolute z-[30] w-full mt-6 top-16" ref={dropdownRef}>
                    <FilterNavbar />
              </div>}
          
            </div>
        </nav>
    )
}

export default Nav
'use client'
import React from 'react'
import LogoImage from '/public/afrita-logo.svg'
import MobileLogo from '/public/afrita-mob-logo.svg'
import Image from 'next/image'
import NavLinks from './NavLinks'
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2'

const Aside = () => {
  return (
    <aside className='z-20 lg:w-[18rem] overflow-y-auto bg-white flex-shrink-0'>
      <div className='lg:py-4 text-gray-500'>
        <a
          className='px-2 lg:px-6 flex justify-center items-center text-lg font-bold w-full max-lg:h-[100px]'
          href='./'
        >
          <Image
            src={LogoImage}
            alt='Afrita Logo'
            className='max-lg:hidden w-3/5'
          />
          <Image src={MobileLogo} alt='Afrita Logo' className='lg:hidden' />
        </a>
        <NavLinks />
        <div className='lg:px-6 my-6'>
          <div onClick={() => signOut()}>
            <button className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary hover:bg-primary/75 focus:outline-none focus:shadow-outline-primary'>
              <span className='lg:block hidden'>تسجيل الخروج</span>
              <span>
                <HiOutlineArrowRightOnRectangle className='w-6 h-6' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
export default Aside

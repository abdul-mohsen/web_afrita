'use client'
import useDropdown from '@/hooks/useDropdown'
import FilterNavbar from './FilterNavbar'
import AvatarImage from '/public/avatar.svg'
import Image from 'next/image'
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowRightOnRectangle,
  HiUser,
} from 'react-icons/hi2'
import { IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { searchItemsAction } from '@/actions/search-result'
import axios from 'axios'
import { ComboboxDemo } from './combo-box'

const Nav = () => {
  const dropRef = useRef(null)
  const dropReff = useRef(null)
  const { dropdownRef, handleClick, isOpen, iconRef } = useDropdown()
  const [isUserInfo, setUserInfo] = useState(false)
  const [isSearchBar, setSearchBar] = useState(false)
  const [userSearchText, setUserSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const { data } = useSession()

  console.log('searchResults', searchResults)

  const searchItems = async (searchText) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URLL}/api/v2/cars/search?query=${searchText}`
    if (!data?.accessToken || !searchText) return
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${data?.accessToken}`,
      },
    })
    if (response?.data?.length) {
      setSearchResults(response?.data)
      if (!isOpen) handleClick()
    }
  }

  useEffect(() => {
    if (userSearchText.length > 2) {
      searchItems(userSearchText)
    }
  }, [userSearchText])

  const userInfo = () => {
    setUserInfo(!isUserInfo)
  }
  const openSearchBar = () => {
    setSearchBar(true)
  }
  const mouseDown = (event) => {
    if (
      dropRef.current &&
      !dropRef.current.contains(event.target) &&
      dropRef.current &&
      !dropRef.current.contains(event.target)
    ) {
      setUserInfo(isUserInfo)
    }
    if (
      dropReff.current &&
      !dropReff.current.contains(event.target) &&
      dropReff.current &&
      !dropReff.current.contains(event.target)
    ) {
      setSearchBar(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', mouseDown)
    return () => {
      document.removeEventListener('mousedown', mouseDown)
    }
  }, [])
  return (
    <nav className='h-[108px] flex justify-evenly flex-row-reverse gap-6 ps-6 padding-l bg-white w-full'>
      <div
        ref={dropRef}
        className='user flex justify-between flex-row items-center gap-6'
      >
        <div className='notif'>
          <IoNotificationsOutline className='w-6 h-6' />
        </div>
        <button
          onClick={userInfo}
          className='user-info relative flex flex-row justify-center items-center gap-2'
        >
          <Image src={AvatarImage} alt='User Image' id='user_image' />
          <div
            className={`${
              isUserInfo ? 'flex flex-col gap-2' : 'max-lg:hidden'
            } max-lg:absolute top-full max-lg:p-3 max-lg:rounded-md max-lg:bg-app-light-gray max-lg:w-max max-lg:shadow-lg max-lg:z-40  max-lg:mt-2 left-0`}
          >
            <Link
              href={'/'}
              className={`${
                isUserInfo
                  ? 'flex flex-row justify-between items-center gap-8 '
                  : ''
              } user-name hover:text-primary`}
              id='user_name'
            >
              <span>أحمد بن خالد</span>
              {isUserInfo && <HiUser className='w-4 h-4 lg:hidden' />}
            </Link>
            {isUserInfo && (
              <button
                onClick={() => signOut()}
                className={`${
                  isUserInfo
                    ? 'flex flex-row justify-between items-center gap-8 max-lg:hover:text-primary lg:hidden'
                    : ''
                }`}
                id='logout'
              >
                <span>تسجيل الخروج</span>
                <HiOutlineArrowRightOnRectangle className='w-4 h-4' />
              </button>
            )}
          </div>
        </button>
      </div>

      <div
        ref={dropReff}
        className='search-input relative flex-1 flex justify-center items-center bg-white max-md:pe-0 px-0'
      >
        <div className='rounded-md gap-10 lg:flex-1 lg:w-full w-[70px] overflow-hidden ml-auto flex flex-row justify-between items-center px-6 py-3 bg-app-light-gray cursor-text'>
          <label
            htmlFor='search'
            onClick={openSearchBar}
            className={`${
              isSearchBar ? 'flex-1 max-lg:rounded-md' : 'max-lg:rounded-full'
            } rounded-md lg:flex-1 lg:w-full w-[70px] overflow-hidden ml-auto flex flex-row justify-between items-center px-6 py-3 bg-app-light-gray cursor-text`}
          >
            <span className='text-app-gray'>
              <IoSearchOutline className='w-6 h-6' />
            </span>
            <input
              autoComplete='off'
              autoSave='off'
              autoCorrect='off'
              type=''
              onChange={(event) => {
                if (event.target.value.length > 2) {
                  setUserSearchText(event?.target?.value)
                } else {
                  setSearchResults([])
                }
              }}
              name='search'
              id='search'
              className=' bg-app-light-gray text-primary flex-1 px-6 focus:outline-[0_!important]  border-[transparent_!important] focus:border-[transparent_!important] w-[inherit]'
            />
            <button
              className='text-app-gray'
              onClick={handleClick}
              ref={iconRef}
            >
              <HiOutlineAdjustmentsHorizontal className='w-6 h-6' />
            </button>
          </label>
        </div>

        {isOpen && (
          <div className='absolute z-[30] w-full mt-6 top-16' ref={dropdownRef}>
            <FilterNavbar onOpen={handleClick} searchResults={searchResults} />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav

'use client'
import { navLinks } from '@/constants';
import Link from 'next/link';
import { useEffect, useState} from 'react'

const NavLinks = () => {
  const [currentPath, setCurrentPath] = useState('')
  const [isParentPath, setParentPath] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
    setCurrentPath(window.location.pathname);
    setParentPath(window.location.pathname.split("/")[1]);
  }
  }, []); 
  
  const navHandleClick = (index) => {
    const currentNavLink = document.querySelector(
      `.nav-link.bg-primary`
    );
    if (currentNavLink) {
      currentNavLink.classList.remove('bg-primary','text-white');
    }
    const clickedNavLink = document.querySelectorAll('.nav-link')[index];
    clickedNavLink.classList.add('bg-primary','text-white');
  };

  return (
    <nav className="mt-6 lg:px-6 max-lg:flex flex-col max-lg:justify-center max-lg:items-center">
      {navLinks.map((item, index) => (
        <Link 
          key={item.label}
          href={item.href}
          className={`${
            typeof window !== "undefined" && (currentPath === item.href || `/${isParentPath}` === item.href) 
              ? "bg-primary text-white"
              : "" 
          }
            nav-link block lg:flex max-lg:w-fit items-center rounded-full lg:rounded-lg hover:bg-primary text-lg max-lg:my-1`}
          onClick={() => {navHandleClick(index)}}
        >
        <div className="px-3 lg:px-6 py-3 lg:inline-flex items-center lg:w-full text-lg font-semibold transition-colors duration-150 hover:text-white">
            {item.icon}
            <span className="hidden lg:block mr-4">{item.label}</span>
            <span className='hidden lg:block count mr-auto'> {item.count} </span>
        </div>
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;

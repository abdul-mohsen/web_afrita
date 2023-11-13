'use client'
import { navLinks } from '@/constants';
import Link from 'next/link';
import { useRef, useEffect} from 'react'

const NavLinks = () => {

    const firstNavLink = useRef();

    useEffect(() => {
        if (firstNavLink.current) {
          firstNavLink.current.classList.add('bg-primary');
        }
      }, []);


      
    const navHandleClick = (index) => {
        // Remove the `border-secondry` class from the currently active button
        const currentNavLink = document.querySelector(
          `.nav-link.bg-primary`
        );
        if (currentNavLink) {
          currentNavLink.classList.remove('bg-primary','text-white');
        }
        
        // Add the `border-secondry` class to the clicked button
        const clickedNavLink = document.querySelectorAll('.nav-link')[index];
      clickedNavLink.classList.add('bg-primary','text-white');
  
    };
    return (
        <nav className="mt-6 md:px-6 max-md:flex flex-col max-md:justify-center max-md:items-center">
                {navLinks.map((item, index) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`${
                            
                        
                        typeof window !== "undefined" && window.location.pathname === item.href
                            ? "bg-primary text-white"
                            : "" 
                        }
                        nav-link block md:flex max-md:w-fit items-center rounded-full md:rounded-lg hover:bg-primary text-lg max-md:my-2`}
                        onClick={() => {navHandleClick(index)}}
                        >
                    <div className="px-3 md:px-6 py-3 md:inline-flex items-center md:w-full text-lg font-semibold transition-colors duration-150 hover:text-white">
                        {item.icon}
                        <span className="hidden md:block mr-4">{item.label}</span>
                        <span className='hidden md:block count mr-auto'> {item.count} </span>
                    </div>
                    </Link>
                ))}
            </nav>
  );
};

export default NavLinks;

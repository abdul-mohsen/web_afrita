"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const DropdownHeading = ({ heading, options, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <div
        className=" flex  items-center  px-0 w-[162px] h-[45px]  md:w-[200px] md:h-[61px] rounded-md text-primary   border-primary border-2 cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full px-4 justify-between gap-x-4 items-center">
          <h2 className="text-bold py-1">{heading}</h2>
          <span className="flex items-center justify-center">
            <RiArrowDropDownLine />
          </span>
        </div>

        {isOpen && (
          <div className="absolute top-full right-0   flex  items-center w-[162px] h-[45px]  md:w-[200px] md:h-[61px]  mr-[-2px]  bg-app-light-gray border-primary border-2 rounded-md">
            {options.map((option, index) => (
              <div key={index} className="w-full px-2 py-1">
                <Link href={link}>{option}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownHeading;

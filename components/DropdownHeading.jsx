'use client'
import { RiArrowDropDownLine } from "react-icons/ri"
import { useState } from "react"

const DropdownHeading = ({ heading, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className="w-[200px] rounded-md text-primary  border-primary border-2 cursor-pointer relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex w-full px-4 justify-between items-center">
                    <h2 className="text-bold py-1">{heading}</h2>
                    <span className="flex items-center justify-center"><RiArrowDropDownLine /></span>
                </div>

                {isOpen && (
<<<<<<< 29967fe4c8b6a754bb927fe0822378740b473b77
                    <div className="absolute top-full right-0  w-[200px] mr-[-2px] bg-white  border-primary border-2 rounded-md">
=======
                    <div className="absolute top-full right-0  w-[200px] mr-[-2px]  bg-app-light-gray border-primary border-2 rounded-md">
>>>>>>> 0bb655e223fc21cfcf4e5077ecf898b87c5cbcf0
                        {options.map((option, index) => (
                            <div key={index} className="w-full px-2 py-1">
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropdownHeading;

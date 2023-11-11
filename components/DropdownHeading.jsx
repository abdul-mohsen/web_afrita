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
                    <div className="absolute top-full right-0  w-[200px] mr-[-2px] bg-white border border-primary border-2 rounded-md">
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

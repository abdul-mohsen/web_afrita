import React from 'react'
import Button from './Button'
import Link from 'next/link';

const SectionNav = ({heading, btnLabel, tags, btnLink, quantity}) => {
    const tagsArray = Array.isArray(tags) ? tags : [];
    return (
        <div className="section-head flex flex-col gap-6 mb-4">
            <div className="flex justify-between items-center  text-3xl">
                <div className='flex flex-row justify-center items-center'>
                <h2 className="text-primary  ">{heading}</h2>
                
                    {
                        quantity
                        ? <span className='py-1 px-2 bg-app-gray/20 text-app-gray text-lg rounded-md mr-4'>{quantity}</span>
                        : ""
                    }
                
                
                </div>
                <Button label={btnLabel} link={btnLink} />
            </div>
            <ul className="grid grid-cols-[50px_repeat(auto-fit,_minmax(0,_1fr))] text-app-gray pr-4  pl-[50px]">
            {tagsArray.map((tag) => (
                    <li key={tag} className="">
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SectionNav
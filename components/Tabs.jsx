"use client"
import {useEffect, useRef, useState} from 'react'

const Tabs = ({ items, useStateIn }) => {

    const firstTapRef = useRef();
    const [ activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Add the `border-b-secondry` class to the currently active button
        if (firstTapRef.current) {
            firstTapRef.current.classList.add('border-b-secondry');
        }
    }, []);

    // Change tab border on click
    const handleClick = (index) => {
        // Remove the `border-b-secondry` class from the currently active button that has `border-b-secondry` class 
        const currentButton = document.querySelector(`.invoice-btn-type.border-b-secondry`);
        if (currentButton) {
            currentButton.classList.remove('border-b-secondry');
        }

        // Add the `border-b-secondry` class to the clicked button
        const clickedButton = document.querySelectorAll('.invoice-btn-type')[index];
        clickedButton.classList.add('border-b-secondry');

        // Update the active index
        setActiveIndex(index);
        useStateIn(index);
    };

    return (
        <div class="mb-6 border-b border-gray-900/10 flex gap-12 text-lg ">
            {items.map((item, index) => (
                <button
                    ref = {index === 0 ? firstTapRef : null}
                    key={index}
                    className={`${
                        index === activeIndex
                        ? "border-b-secondry"
                        : ""
                    } invoice-btn-type cursor-pointer pb-6 text-app-gray border-transparent hover:border-b-secondry border-b-2 font-semibold`}
                    onClick={() => {useStateIn(index); handleClick(index)}}
                >
                    {item.title}
                </button>
            ))}
        </div>
    )
}
export default Tabs

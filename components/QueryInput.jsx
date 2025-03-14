// components/QueryInput.js

import { useState, useEffect } from 'react';

const QueryInput = ({ fetchData, onSelect, mapItemToString }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setData] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    let prevInputValue = ""
    let active = false
    let timer; // Declare timer variable

    useEffect(() => {
        if (!isTyping) {
            // Set a timer to query the backend every 3 seconds
            timer = setInterval(() => {
                handleFetchData();
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isTyping]);

    const handleFetchData = async () => {
        console.log(inputValue && inputValue !== prevInputValue && !active)
        if (inputValue && inputValue !== prevInputValue && !active) {
            active = true
            try {
                const result = await fetchData(inputValue); // Call the passed fetchData function
                console.log("ssda", result);
                setData(result.data); // Update the data state with the fetched results
                prevInputValue = inputValue
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                active = false
            }
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsTyping(true); // User is typing, so we set isTyping to true

        // Clear the typing state after 3 seconds of inactivity
        clearTimeout(timer);
        timer = setTimeout(() => {
            setIsTyping(false);
        }, 500);
    };

    const handleSuggestionClick = (item) => {
        onSelect(item); // Call the onSelect function with the selected item
        setInputValue(mapItemToString(item)); // Clear the input after selection
        setData([]); // Clear the data after selection
    };

    const renderSuggestion = (suggestion) => (
        <div className="cursor-pointer p-2 hover:bg-gray-200">
            {mapItemToString(suggestion)} {/* Use the mapping function to display the suggestion */}
        </div>
    );

    return (
        <div className="relative">
            <input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Search..."
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {suggestions.length > 0 && (
                <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
                    {suggestions.map((suggestion) => (
                        <div
                            key={mapItemToString(suggestion)}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                        >
                            {mapItemToString(suggestion)} {/* Use the mapping function to display the suggestion */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QueryInput;

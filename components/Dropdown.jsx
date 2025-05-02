// components/Dropdown.js
import { useEffect, useState } from 'react';
import instance from '@/axios';

const Dropdown = ({ apiUrl, onSelect }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    // Function to fetch options from the API
    const fetchOptions = async () => {
        try {
            console.log("your url", apiUrl)
            const response = await instance.get(apiUrl); // Use the apiUrl prop
            console.log(response.data);
            if (response.data.constructor === Array) {
                setOptions(response.data); // Assuming the response data is an array of options
                onSelect(response.data[0])
            }

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // useEffect to call fetchOptions when the component mounts
    useEffect(() => {
        fetchOptions();
    }, [apiUrl]); // Add apiUrl to the dependency array

    // Handle selection change
    const handleChange = (event) => {
        const selectedId = event.target.value;
        const selected = options.find(option => option.id == selectedId);
        console.log(selectedId, selected, options)
        setSelectedOption(selected);
        onSelect(selected); // Call the onSelect prop with the selected object
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching options: {error.message}</p>;

    return (
        <select onChange={handleChange} value={selectedOption ? selectedOption.id : '123'}>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;

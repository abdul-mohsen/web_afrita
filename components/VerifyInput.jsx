// components/VerifyInput.js
import React, { useState } from 'react';
import instance from '@/axios';

const VerifyInput = ({ apiUrl, onChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState(null); // 'success', 'error', or null
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Function to fetch options from the API
    const handleVerify = async () => {
        setLoading(true);
        setStatus(null); // Reset status before the new request
        try {
            console.log(apiUrl + inputValue)
            const response = await instance.get(apiUrl + inputValue); // Use the apiUrl prop
            console.log(response.data);
            if (response.status == 200) {
                setStatus('success');
                if (onChange) {
                    onChange(inputValue); // Call the onChange callback with the valid input value
                }
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Verification failed:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value to verify..."
                className="border border-gray-300 rounded-lg p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleVerify}
                disabled={loading}
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
                {loading ? 'Verifying...' : 'Verify'}
            </button>
            {status === 'success' && <p className="text-green-500 mt-2">Verification successful!</p>}
            {status === 'error' && <p className="text-red-500 mt-2">Verification failed. Please try again.</p>}
        </div>
    );
};

export default VerifyInput;

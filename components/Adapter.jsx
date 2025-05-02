// components/ItemList.js

import { useState, useEffect } from 'react';

const Adapter = ({ initialList, renderItem, onAdd, onDelete, onUpdate }) => {
    const [items, setItems] = useState(initialList);

    // Effect to call onUpdate whenever items change
    useEffect(() => {
        onUpdate(items);
    }, [items, onUpdate]);

    const handleAddItem = () => {
        const addedItem = onAdd ? onAdd() : null;
        if (addedItem === null) {
            return; // Prevent adding if onAdd returns null
        }

        setItems([...items, addedItem]); // Add the returned item
    };

    const handleDeleteItem = (index) => {
        const itemToDelete = items[index];

        // Call onDelete and check its return value
        if (onDelete && onDelete(itemToDelete) === false) {
            return; // Prevent deleting if onDelete returns false
        }

        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const setValue = (name, value, index) => {
        const newItems = [...items];
        newItems[index][name] = value;
        setItems(newItems);
    }


    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="justify-between items-center mb-2">
                        {renderItem(setValue, index, item, () => handleDeleteItem(index))}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddItem}>إضافة</button>
        </div>
    );
};

export default Adapter;


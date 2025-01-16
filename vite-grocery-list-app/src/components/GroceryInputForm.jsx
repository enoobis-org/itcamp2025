import React, { useState } from 'react';

const GroceryInputForm = ({ onAddItem }) => {
    const [itemName, setItemName] = useState(""); 

    const handleAddItem = () => {
        if (itemName.trim()) { 
            onAddItem(itemName);
            setItemName(""); 
        }
    };

    return (
        <div className="my-3 d-flex justify-content-center">
            <input
                type="text"
                className="form-control w-50"
                placeholder="Enter item name"
                value={itemName} // Binds the input value to the state.
                onChange={(e) => setItemName(e.target.value)} // Updates state on input change.
            />
            <button className="btn btn-success ms-2" onClick={handleAddItem}>
                Add Item
            </button>
        </div>
    );
};

export default GroceryInputForm;

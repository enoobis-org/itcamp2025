// Step 7: Implement AppGrocery.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';
import GroceryInputForm from './components/GroceryInputForm';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';

const AppGrocery = () => {
    const [items, setItems] = useState([]); // Manages the list of grocery items.

    const handleAddItem = (name) => {
        setItems([...items, { id: Date.now(), name:name, bought: false }]); // Adds a new item with a default bought state.
    };

    const handleToggleBought = (index) => {
        setItems(
            items.map((item, i) =>
                i === index ? { ...item, bought: !item.bought } : item // Toggles the bought state of the item.
            )
        );
    };

    const handleDeleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index)); // Removes the item from the list.
    };

    return (
        <div>
            <HeaderNav/>
            <div className="container my-4">
                <GroceryInputForm onAddItem={handleAddItem} />
                <GroceryList
                    items={items} // Passes the current items to the list.
                    onToggleBought={handleToggleBought} // Passes the toggle handler.
                    onDeleteItem={handleDeleteItem} // Passes the delete handler.
                />
            </div>
            <Footer
                totalItems={items.length} // Total number of items.
                totalBoughtItems={items.filter((item) => item.bought).length} // Total bought items.
            />
        </div>
    );
};

export default AppGrocery;

import React from 'react';

const GroceryList = ({ items, onToggleBought, onDeleteItem }) => {
    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <li
                    key={index} 
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span
                        style={{ textDecoration: item.bought ? "line-through" : "none" }} 
                        onClick={() => onToggleBought(index)} 
                        className="cursor-pointer"
                    >
                        {item.name}
                    </span>
                    <div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDeleteItem(index)} 
                        >
                         <i className="bi bi-trash">Delete</i>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default GroceryList;
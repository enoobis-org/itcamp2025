import React from 'react';

const Footer = ({ totalItems, totalBoughtItems }) => {
    return (
        <footer className="text-center py-3">
            <p>{totalBoughtItems} out of {totalItems} items bought</p> // Displays summary statistics.
        </footer>
    );
};

export default Footer;
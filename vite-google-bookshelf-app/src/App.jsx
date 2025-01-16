import React, { useState } from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';

const App = () => {
  const [query, setQuery] = useState('python'); // Default query

  const handleSearch = (newQuery) => {
    setQuery(newQuery); 
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} /> {/* Pass handleSearch to NavBar */}
      <BookList query={query} /> {/* Pass query to BookList */}
    </div>
  );
};

export default App;
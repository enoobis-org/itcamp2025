import React, { useState } from 'react';
import './App.css';
import Homework1 from './homework/homework1.jsx';
import Homework11 from './homework/homework1-1.jsx';
import Homework2 from './homework/homework2.jsx';
import Homework21 from './homework/homework2-1.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    if (activeComponent === 'homework1') {
      return <Homework1/>;
    }
    if (activeComponent === 'homework1-1') {
      return <Homework11/>;
    }
    if (activeComponent === 'homework2') {
      return <Homework2/>;
    }
    if (activeComponent === 'homework2-1') {
      return <Homework21/>;
    }
    return 
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => setActiveComponent('homework1')}>h1</button>
        <button onClick={() => setActiveComponent('homework1-1')}>h1-1</button>
        <button onClick={() => setActiveComponent('homework2')}>h2</button>
        <button onClick={() => setActiveComponent('homework2-1')}>h2-1</button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;

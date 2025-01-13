import { useState } from 'react'
import '../css/homework1-1.css'

function homework11() {
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setCount(isNaN(newValue) ? "" : newValue); // Handle invalid input gracefully
  };

  return (
    <div className="homework1-1">
      <h1>cntr-inv</h1>
      <label>
        Number:
        <input 
          type="number" 
          value={count} 
          onChange={handleInputChange} 
        />
      </label>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default homework11






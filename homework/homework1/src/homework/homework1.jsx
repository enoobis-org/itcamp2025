import { useState } from 'react'
import '../css/homework1.css'

function homework1() {
  const [count, setCount] = useState(0);

  return (
    <div className="homework1">
      
      <h1>cntr-app</h1>
      <label>Number: {count}</label>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default homework1

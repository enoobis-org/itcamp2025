import { useState } from 'react'
import '../css/homework2.css'

function homework2() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }
      
    if (operator === "+") {
      setResult(number1 + number2);
    } else if (operator === "-") {
      setResult(number1 - number2);
    } else if (operator === "*") {
      setResult(number1 * number2);
    } else if (operator === "/") {
      setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by zero");
    } else {
      setResult("Invalid operator");
    }
    
  };

  return (
    <div className="homework2">
      <h1>clctr</h1>
      <div>
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label>
          <input
            type="radio"
            name="operator"
            value="+"
            checked={operator === "+"}
            onChange={(e) => setOperator(e.target.value)}
          />
          "+"
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="-"
            checked={operator === "-"}
            onChange={(e) => setOperator(e.target.value)}
          />
          "-"
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="*"
            checked={operator === "*"}
            onChange={(e) => setOperator(e.target.value)}
          />
          "*"
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="/"
            checked={operator === "/"}
            onChange={(e) => setOperator(e.target.value)}
          />
          "/"
        </label>
      </div>
      <br></br>
      <button onClick={calculate}>calculate</button>
      <br></br>
      <h2>result: {result !== null ? result : ""}</h2>
    </div>
  ); 
  
}

export default homework2

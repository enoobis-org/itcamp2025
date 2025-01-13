import { useState } from 'react'

function Calculator({ num1, setNum1, num2, setNum2, operator, setOperator, calculate }) {
  return (
    <div>
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
      <br />
      <div>
        <label>
          <input
            type="radio"
            name="operator"
            value="+"
            checked={operator === "+"}
            onChange={(e) => setOperator(e.target.value)}
          />
          +
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="-"
            checked={operator === "-"}
            onChange={(e) => setOperator(e.target.value)}
          />
          -
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="*"
            checked={operator === "*"}
            onChange={(e) => setOperator(e.target.value)}
          />
          *
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="/"
            checked={operator === "/"}
            onChange={(e) => setOperator(e.target.value)}
          />
          /
        </label>
      </div>
      <br />
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default Calculator;

import { useState } from 'react'
import "../css/homework2-1.css";
import Calculator from "../components/calculator";
import Result from "../components/result";

function Homework21() {
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

    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by 0");
        break;
      default:
        setResult("Invalid operator");
        break;
    }
  };

  return (
    <div className="homework2-1">
      <h1>Calculator</h1>
      <Calculator
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}
        operator={operator}
        setOperator={setOperator}
        calculate={calculate}
      />
      <Result result={result} />
    </div>
  );
}

export default Homework21;

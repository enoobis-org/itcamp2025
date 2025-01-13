import { useState } from 'react'

function Result({ result }) {
  return (
    <div>
      <h2>Result: {result !== null ? result : ""}</h2>
    </div>
  );
}

export default Result;

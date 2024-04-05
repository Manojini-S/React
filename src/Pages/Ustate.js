import React from 'react';
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  
  }
  return (
    <div>
      <h1>Hello world</h1>
      <div className="button-container">
        <button onClick={decrementCount}> - </button>
        <span> {count} </span>
        <button> + </button>
      </div>
     
    </div>
  );
}
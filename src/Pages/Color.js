import React, { useState } from 'react';

export default function ColorChanger() {
  const [color, setColor] = useState('blue');

  const handleClick = () => {
    
    setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue' );
    // setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue' );
  };

  return (
    <div>
      <h1 style={{ color: color }}>color</h1>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

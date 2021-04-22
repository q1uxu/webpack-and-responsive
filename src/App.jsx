import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  return (
    <div>
      <div className="count">count: { count }</div>
      <button onClick={handleAddCount}>add</button>
    </div>
  )
}

export default App;
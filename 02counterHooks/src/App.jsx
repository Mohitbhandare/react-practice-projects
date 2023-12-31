import { useState } from 'react';
import './App.css';

function App() {
  // using the hooks react update the UI so we use useState hooks.

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>code with react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  );
}

export default App;

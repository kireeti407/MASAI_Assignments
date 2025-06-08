import React from 'react';
import { useToggleItems } from './useToggleItems';
function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Current Item: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}
export default App;
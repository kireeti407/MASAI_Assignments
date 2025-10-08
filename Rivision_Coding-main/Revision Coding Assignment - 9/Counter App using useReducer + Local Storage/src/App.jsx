import { useReducer, useEffect, useState } from 'react';
import './App.css';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'SHOW_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    count: JSON.parse(localStorage.getItem('counter')) || 0,
    inputValue: 1,
    message: '',
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(state.count));
    if (state.count !== initialState.count) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }
  }, [state.count]);

  const handleInputChange = (e) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: Number(e.target.value) });
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="card">
        <h2>{state.count}</h2>
        <div className="input-container">
          <input
            type="number"
            value={state.inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <button onClick={() => dispatch({ type: 'INCREMENT', payload: state.inputValue })}>+</button>
          <button onClick={() => dispatch({ type: 'DECREMENT', payload: state.inputValue })}>−</button>
          <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
        {showMessage && <p className="message">Counter updated!</p>}
      </div>
    </div>
  );
}

export default App;
import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count++ };
    default:
      return { count: state.count-- };
  }
}
export default function Counter() {
  const [theme, setTheme] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: theme.theme,
          color: theme.theme === "white" ? "black" : "white",
        }}
      >
        <h1>{theme.count}</h1>
        <button
          onClick={() => {
            setTheme({ type: "DEC" });
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            setTheme({ type: "INC" });
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
}

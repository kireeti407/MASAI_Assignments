import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./theem";

function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(prev => ({
            bg: prev.bg === "white" ? "black" : "white",
            color: prev.color === "black" ? "white" : "black"
        }));
    };

    return (
        <div style={{ backgroundColor: theme.bg, color: theme.color, padding: "20px" }}>
            <h1>Hello with Theme!</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

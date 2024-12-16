import { useState } from "react";
import "./App.css";

function App() {
  const [gradient, setGradient] = useState(generateRandomGradient());

  // Function to generate random gradient
  function generateRandomGradient() {
    const getRandomColor = () =>
      `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  }

  const handleNewGradient = () => {
    setGradient(generateRandomGradient());
  };

  return (
    <div className="app">
      <div className="gradient-box" style={{ background: gradient }}></div>
      <button onClick={handleNewGradient} className="gradient-button">
        New gradient
      </button>
      <p className="footer">
        Made by{" "}
        <a
          href="https://your-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Armond Schneider
        </a>
      </p>
    </div>
  );
}

export default App;

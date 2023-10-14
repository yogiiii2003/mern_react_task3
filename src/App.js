import React, { useState } from "react";
import "./App.css";

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
    document.getElementById("body").style.backgroundColor = color;
  };

  return (
    <div className="color-picker">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "#4fb04f", color: "white" }}
      >
        Pick a color
      </button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "pink",
    "orange",
    "brown",
    "gray",
  ];
  return <ColorPicker colors={colors} />;
}

export default App;

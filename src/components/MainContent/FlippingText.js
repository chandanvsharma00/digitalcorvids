import React, { useState, useEffect } from "react";
import "./MainContent.css"
import Bulb from "./Bulb"; // Assuming the Bulb component is already defined

const FlippingText = () => {
  const [currentText, setCurrentText] = useState("INNOVATION");
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const words = ["INNOVATION", "CREATION", "REVOLUTION"];
    let index = 0;

    const interval = setInterval(() => {
      setIsFlipping(true); // Start flip animation
      setTimeout(() => {
        index = (index + 1) % words.length;
        setCurrentText(words[index]);
        setIsFlipping(false); // End flip animation
      }, 1000); // Delay during flip animation
    }, 5000); // Total time for each cycle

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <h2
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {currentText === "INNOVATION" ? (
        <span
          className={`flipping-text ${isFlipping ? "flip-animation" : ""}`}
          style={{
            display: "inline-block",
          }}
        >
          INNOVATI
          <span className="invisible">O</span>
          <span className="BulbN">
            <Bulb />
            N
          </span>
        </span>
      ) : (
        <span
          className={`flipping-text ${isFlipping ? "flip-animation" : ""}`}
          style={{
            display: "inline-block",
          }}
        >
          {currentText}
        </span>
      )}
    </h2>
  );
};



export default FlippingText;

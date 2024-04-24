import React, { useState, useEffect } from "react";

function TypingEffect() {
  const [text, setText] = useState("");

  const initialText = "HHi there ! I'm Alok Kumar.";
 
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < initialText.length) {
        setText((prevText) => prevText + initialText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150); // Adjust typing speed as needed
    return () => clearInterval(timer);
  }, []); // Runs once on component mount

  return (
    <h2 className="text-3xl sm:text-5xl font-bold text-green-600 w-[340px] ">
      {text}
    </h2>
  );
}

export default TypingEffect;

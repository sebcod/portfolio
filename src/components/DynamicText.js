import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["dev", "web", "front", "react"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);
      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 4s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 1800);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <div className="dynamic-text">
      <span>Portfollio</span>
      <span id="text-target"></span>
    </div>
  );
};

export default DynamicText;

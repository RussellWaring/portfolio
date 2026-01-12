import React from "react";
import { useEffect } from "react";
import "./CosmicText.css";

function CosmicText({ text }) {
  useEffect(() => {
    const letters = document.querySelectorAll(".cosmic-letter");

    function handleMouseMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2;
        const letterY = rect.top + rect.height / 2;

        const dx = mouseX - letterX;
        const dy = mouseY - letterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = 40; // impacts range of 'cosmic' effect on text from cursor hover

        if (distance < radius) {
          letter.classList.add("active");
          letter.style.opacity = 1 - distance / radius;
        } else {
          letter.classList.remove("active");
          letter.style.opacity = 0.8;
        }
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

//   return (
//     <>
//       {text.split("").map((char, idx) => (
//         <span key={idx} className="cosmic-letter">
//           {char}
//         </span>
//       ))}
//     </>
//   );
    // }
    
    // --- Preserve spaces using \u00A0 ---
  return (
    <>
      {text.split("").map((char, idx) => (
        <span key={idx} className="cosmic-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default CosmicText;
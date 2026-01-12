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

        if (distance < 80) {
          letter.classList.add("active");
          letter.style.opacity = 1 - distance / 120;
        } else {
          letter.classList.remove("active");
          letter.style.opacity = 0.8;
        }
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {text.split("").map((char, idx) => (
        <span key={idx} className="cosmic-letter">
          {char}
        </span>
      ))}
    </>
  );
}

export default CosmicText;
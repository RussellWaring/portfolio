import { useEffect } from "react";
import "./CosmicText.css";

export default function CosmicText({ text }) {
  useEffect(() => {
    const letters = document.querySelectorAll(".cosmic-letter");
    const radius = 60; // how far the effect spreads

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

        if (distance < radius) {
          letter.classList.add("active");
          letter.style.opacity = Math.max(0.5, 1 - distance / radius);
          if (letter.fadeTimeout) clearTimeout(letter.fadeTimeout);
        } else if (!letter.fadeTimeout) {
          letter.fadeTimeout = setTimeout(() => {
            letter.classList.remove("active");
            letter.style.opacity = 0.8;
            letter.fadeTimeout = null;
          }, 500); // keep trail for 0.5s
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
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

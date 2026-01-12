// src/components/CosmicText.jsx
import { useEffect, useRef } from "react";
import "./CosmicText.css";

export default function CosmicText({ text }) {
  const mouse = useRef({ x: 0, y: 0 });
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = document.querySelectorAll(".cosmic-letter");
    lettersRef.current = Array.from(letters);

    const radius = 35; // pixels around cursor

    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      lettersRef.current.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2;
        const letterY = rect.top + rect.height / 2;

        const dx = mouse.current.x - letterX;
        const dy = mouse.current.y - letterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          letter.classList.add("active");
        } else {
          letter.classList.remove("active");
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

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

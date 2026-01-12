import { useEffect, useRef } from "react";
import "./CosmicText.css";

export default function CosmicText({ text }) {
  const mouse = useRef({ x: 0, y: 0 });
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = document.querySelectorAll(".cosmic-letter");
    lettersRef.current = Array.from(letters);

    const radius = 35;   // distance around cursor
    const fadeSpeed = 0.03; // opacity decrement per frame (adjust for speed)

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

        let currentOpacity = parseFloat(letter.style.opacity || 1);

        if (distance < radius) {
          letter.classList.add("active");
          letter.style.opacity = Math.max(0.5, 1 - distance / radius);
        } else {
          letter.classList.remove("active");
          currentOpacity -= fadeSpeed;
          letter.style.opacity = Math.max(0.5, currentOpacity);
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

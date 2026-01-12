import { useEffect, useRef } from "react";
import "./CosmicText.css";

export default function CosmicText({ text }) {
  const mouse = useRef({ x: 0, y: 0 });
  const lettersRef = useRef([]);

  useEffect(() => {
  const letters = document.querySelectorAll(".cosmic-letter");
  lettersRef.current = Array.from(letters);
  const radius = 35; // distance around cursor
  const fadeDuration = 1000; // 1 second

  lettersRef.current.forEach((letter) => {
    if (!letter._lastActive) letter._lastActive = 0;
  });

    function handleMouseMove(e) {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
    const now = Date.now();

    lettersRef.current.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2;
        const letterY = rect.top + rect.height / 2;

        const dx = mouse.current.x - letterX;
        const dy = mouse.current.y - letterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
        letter.classList.add("active");
        letter._lastActive = now;
        letter.style.opacity = 1;
        } else if (letter._lastActive) {
        const delta = now - letter._lastActive;
        if (delta < fadeDuration) {
            letter.style.opacity = 1 - (delta / fadeDuration) * 0.5; // fades to 0.5
        } else {
            letter.classList.remove("active");
            letter.style.opacity = 0.5;
        }
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

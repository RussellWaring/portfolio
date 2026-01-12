import { useEffect, useRef } from "react";
import "./CosmicText.css";

export default function CosmicText({ children, radius = 35 }) {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lettersRef = useRef([]);

  // Wrap all text nodes in spans
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      const parent = node.parentNode;
      if (node.nodeValue.trim() === "") return;

      const fragment = document.createDocumentFragment();
      node.nodeValue.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "cosmic-letter";
        span.textContent = char === " " ? "\u00A0" : char;
        fragment.appendChild(span);
      });

      parent.replaceChild(fragment, node);
    });

    lettersRef.current = container.querySelectorAll(".cosmic-letter");
  }, [children]);

  // Mouse move logic
  useEffect(() => {
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
  }, [radius]);

  return <div ref={containerRef}>{children}</div>;
}

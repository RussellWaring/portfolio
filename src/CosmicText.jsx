import { useEffect, useRef } from "react";
import "./CosmicText.css";

export default function CosmicText({ children, radius = 35 }) {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lettersRef = useRef([]);

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
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const parent = node.parentNode;
      if (!node.nodeValue.trim()) return;
      if (parent.closest?.('[data-cosmic="ignore"]')) return;

      const fragment = document.createDocumentFragment();

      // Only split if parent is block-ish 
      const blockElements = ["P", "LI", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"];
      const shouldSplit = blockElements.includes(parent.tagName);

      if (!shouldSplit) {
        // Keep inline nodes intact 
        const span = document.createElement("span");
        span.className = "cosmic-letter";
        span.textContent = node.nodeValue;
        fragment.appendChild(span);
        parent.replaceChild(fragment, node);
        return;
      }

      // Split into tokens: words + whitespace (spaces as wrap points)
      const tokens = node.nodeValue.split(/(\s+)/);

      tokens.forEach((tok) => {
        if (!tok) return;

        if (/^\s+$/.test(tok)) {
          fragment.appendChild(document.createTextNode(tok));
          return;
        }

        const wordSpan = document.createElement("span");
        wordSpan.className = "cosmic-word";

        tok.split("").forEach((char) => {
          const letter = document.createElement("span");
          letter.className = "cosmic-letter";
          letter.textContent = char;
          wordSpan.appendChild(letter);
        });

        fragment.appendChild(wordSpan);
      });

      parent.replaceChild(fragment, node);
    });

    lettersRef.current = container.querySelectorAll(".cosmic-letter");
  }, [children]);

  useEffect(() => {
    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    let raf = 0;
    function animate() {
      lettersRef.current.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const dx = mouse.current.x - (rect.left + rect.width / 2);
        const dy = mouse.current.y - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) letter.classList.add("active");
        else letter.classList.remove("active");
      });

      raf = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [radius]);

  return (
    <div ref={containerRef} className="cosmic-root">
      {children}
    </div>
  );
}
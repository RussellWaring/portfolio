import { useEffect, useRef } from "react";
import "./CosmicText.css";

export default function CosmicText({ children, radius = 35 }) {
  const containerRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 }); // start "offscreen"
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

      const blockElements = ["P", "LI", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"];
      const shouldSplit = blockElements.includes(parent.tagName);

      if (!shouldSplit) {
        const span = document.createElement("span");
        span.className = "cosmic-letter";
        span.textContent = node.nodeValue;
        fragment.appendChild(span);
        parent.replaceChild(fragment, node);
        return;
      }

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
    // Treat touch devices differently (tap should fade out)
    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;

    let clearTimer = null;

    const setPoint = (x, y) => {
      mouse.current.x = x;
      mouse.current.y = y;

      // On mobile/touch: clear shortly after last contact
      if (isCoarsePointer) {
        if (clearTimer) clearTimeout(clearTimer);
        clearTimer = setTimeout(() => {
          mouse.current.x = -9999;
          mouse.current.y = -9999;
        }, 650); // tweak: 400-900ms feels good
      }
    };

    const clearPoint = () => {
      if (clearTimer) clearTimeout(clearTimer);
      clearTimer = null;
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    // Pointer events cover mouse + touch + pen
    const onPointerMove = (e) => setPoint(e.clientX, e.clientY);
    const onPointerDown = (e) => setPoint(e.clientX, e.clientY);
    const onPointerUp = () => clearPoint();
    const onPointerCancel = () => clearPoint();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerCancel, { passive: true });

    // If the user scrolls/changes tabs, also clear
    window.addEventListener("blur", clearPoint);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clearPoint();
    });

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
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      window.removeEventListener("blur", clearPoint);
      if (clearTimer) clearTimeout(clearTimer);
      cancelAnimationFrame(raf);
    };
  }, [radius]);

  return (
    <div ref={containerRef} className="cosmic-root">
      {children}
    </div>
  );
}

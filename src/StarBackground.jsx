import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarBackground = React.memo(({ theme = "dark" }) => {
  const containerRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
  }, []);

  // Static config.
  const baseOptions = useMemo(() => {
    return {
      background: { color: "#0d0d0d" }, // overridden after load
      fpsLimit: 60,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" }, // overridden after load
        shape: { type: "circle" },
        opacity: {
          value: { min: 0, max: 0.8 },
          animation: {
            enable: true,
            startValue: "min",
            destroy: "max",
            speed: 0.5,
          },
        },
        size: { value: 2, random: true },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    };
  }, []);

  // Update colors upon theme change without recreating the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isLight = theme === "light";
    const bg = isLight ? "#f2f2f2" : "#0d0d0d";
    const star = isLight ? "#111111" : "#ffffff";

    // Update container options directly
    container.options.background.color.value = bg;
    container.options.particles.color.value = star;

    // Apply and redraw without full reset
    container.refresh(false);
  }, [theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={baseOptions}
    />
  );
});

export default StarBackground;
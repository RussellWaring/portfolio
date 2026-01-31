import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarBackground = ({ theme = "dark" }) => {
  // This runs when the particles engine initializes
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Optional: remove this once you're done debugging
  const particlesLoaded = (container) => {
    // console.log("Particles loaded:", container);
  };

  const options = useMemo(() => {
    const isLight = theme === "light";

    return {
      background: {
        // In light mode: light background, in dark: dark background
        color: isLight ? "#f2f2f2" : "#0d0d0d",
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          // Stars: black in light mode, white in dark mode
          value: isLight ? "#111111" : "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0, max: 0.8 },
          animation: {
            enable: true,
            startValue: "min",
            destroy: "max",
            speed: 0.5,
          },
        },
        size: {
          value: 2,
          random: true,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            quantity: 3,
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
  );
};

export default StarBackground;

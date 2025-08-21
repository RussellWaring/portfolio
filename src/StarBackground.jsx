import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarBackground = () => {
  // This runs when the particles engine initializes
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // This runs when the particles are fully loaded
  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}           // Initialization callback
      loaded={particlesLoaded}       // Loaded callback
      options={{
        background: {
          color: "#0d0d0d",
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
            value: "#ffffff",
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
      }}
    />
  );
};

export default StarBackground;
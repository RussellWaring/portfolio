import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
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
            value: 0.8,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "bottom",
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

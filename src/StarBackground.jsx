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
            value: 100,
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
            value: 1.5,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "bottom",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarBackground;

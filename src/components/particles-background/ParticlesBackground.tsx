import React from "react";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const ParticlesBackground = () => {
  return (
    <Particles
      params={particlesOptions}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;

import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesConfig from "../particles-config";
import Particles from "react-tsparticles";


const ParticleBackground = () => {
  const particlesInit = useCallback((engine) => loadFull(engine), []);

  return (
    <div>
        <Particles options={particlesConfig} init={particlesInit} />
    </div>
  );
};

export default ParticleBackground;

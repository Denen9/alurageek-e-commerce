import React, { useCallback, lazy, Suspense } from "react";
import { loadFull } from "tsparticles";
import particlesConfig from "../particles-config";

const Particles = lazy(() => import("react-tsparticles"));

const ParticleBackground = () => {
  const particlesInit = useCallback((engine) => loadFull(engine), []);

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Particles options={particlesConfig} init={particlesInit} />
      </Suspense>
    </div>
  );
};

export default ParticleBackground;

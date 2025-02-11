import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './particlesConfig';

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  return init ? (
    <Particles
      id={props.id || "tsparticles"}
      options={particlesConfig}
    />
  ) : null;
};

export default ParticlesComponent;

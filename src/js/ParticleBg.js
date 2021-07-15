import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from '../config/particle-config';

export default function ParticleBg() {
    return(
        <Particles params={particleConfig}></Particles>
    )
}
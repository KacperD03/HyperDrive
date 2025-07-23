'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#000000",
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
              quantity: 4,
            },
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#00ffff", "#ff00ff", "#00ff00"],
            animation: {
              enable: true,
              speed: 30,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}

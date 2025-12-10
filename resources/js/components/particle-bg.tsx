// components/ParticleBackground.jsx
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    // Initialize the engine once
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            // Make background transparent so it overlays your Slate-950 background
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab', // Connects particles to cursor
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: '#22d3ee', // Tailwind Cyan-400
                },
                links: {
                    color: '#0891b2', // Tailwind Cyan-600
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: false,
                    speed: 1.5, // Smooth floating speed
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                // Tailwind: Absolute positioning to stick behind content
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            />
        );
    }

    return <></>;
}

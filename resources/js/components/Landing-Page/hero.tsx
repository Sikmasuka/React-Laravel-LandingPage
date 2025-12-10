import { register } from '@/routes';
import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950"
        >
            {/* 1. Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Your uploaded image goes here */}
                <img
                    src="/images/hero.jpg"
                    alt="Global Network"
                    className="h-full w-full object-cover opacity-50"
                />
                {/* Gradient Overlay: Makes text readable and blends image into the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>

                {/* Radial Gradient: Spotlights the center text */}
                <div className="bg-radial-gradient absolute inset-0 from-transparent to-slate-950 opacity-80"></div>
            </div>

            {/* 2. Content Layer */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
                {/* Main Headline */}
                <h1 className="mb-6 text-5xl leading-tight font-extrabold tracking-tight text-white md:text-7xl">
                    <span className="block text-slate-300 drop-shadow-lg">
                        Where History Meets
                    </span>
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                        The Digital Horizon
                    </span>
                </h1>

                {/* Detailed Narrative Paragraph */}
                <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                    Technology does not stand still. Like a living entity, it
                    arises from the foundations of the past to shape the
                    architecture of the future. At{' '}
                    <strong className="text-white">Group 4</strong>, we bridge
                    the gap between yesterday's data and tomorrow's
                    intelligence, creating a seamless network that evolves with
                    time itself.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href={register()}
                        className="group relative flex h-12 w-48 items-center justify-center overflow-hidden rounded-full bg-white text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Begin Journey
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </Link>

                    <a
                        href="#about-us"
                        className="flex h-12 w-48 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
                    >
                        Read Our Story
                    </a>
                </div>
            </div>

            {/* Decorative Grid Floor */}
            <div className="absolute bottom-0 h-32 w-full bg-[url('/images/grid.svg')] [mask-image:linear-gradient(to_top,black,transparent)] bg-center opacity-20"></div>
        </section>
    );
}

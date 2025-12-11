import ParticleBackground from '@/components/particle-bg';
import { Link } from '@inertiajs/react';
import { Cpu } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 md:p-10">
            <ParticleBackground />
            {/* Background Tech Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
            </div>
            {/* --- 2. CONTENT LAYER --- */}
            {/* This sits on top (z-10) */}
            <div className="relative z-10 w-full max-w-md">
                {/* Header Section: Logo & Titles */}
                <div className="mb-8 flex flex-col items-center gap-2 text-center">
                    <Link
                        href={'/'}
                        // ADDED 'group' here so the children know when to animate
                        className="group flex flex-col items-center gap-2 font-medium text-white transition-opacity hover:opacity-100"
                    >
                        {/* Icon Container */}
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:ring-cyan-400/50">
                            {/* Lucide Icon */}
                            <Cpu
                                className="h-6 w-6 text-cyan-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-180"
                                strokeWidth={2.5}
                            />
                        </div>
                    </Link>

                    {/* Title with drop shadow for readability */}
                    <h1 className="mt-4 text-2xl font-bold text-white shadow-black drop-shadow-md">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-200 shadow-black drop-shadow-md">
                        {description}
                    </p>
                </div>

                {/* The Login/Register Form (Children) renders here */}
                {children}
            </div>
        </div>
    );
}

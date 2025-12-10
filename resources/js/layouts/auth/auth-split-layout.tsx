import AppLogoIcon from '@/components/app-logo-icon';
import ParticleBackground from '@/components/particle-bg';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
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
                        href={home()}
                        className="flex flex-col items-center gap-2 font-medium text-white transition-opacity hover:opacity-80"
                    >
                        {/* Glassy Logo Container */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                            <AppLogoIcon className="size-8 fill-current text-white" />
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

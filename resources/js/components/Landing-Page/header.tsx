import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeaderSection({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to prevent layout bugs
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isHomePage =
        typeof window !== 'undefined' && window.location.pathname === '/';

    const navLinks = [
        { name: 'Home', href: isHomePage ? '#hero' : '/#hero' },
        { name: 'Evolution', href: isHomePage ? '#about-us' : '/#about-us' },
        { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
    ];

    const handleLogin = () => {
        router.visit('/login');
    };

    return (
        <div
            // FIXED: Removed margins/padding on mobile to ensure full width
            // Only adds padding on Desktop (md:pt-6) for the floating look
            className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
                scrolled ? 'pt-0' : 'pt-0 md:pt-6'
            }`}
        >
            <header
                className={`relative flex w-full items-center justify-between px-6 py-4 transition-all duration-300 ${
                    /* --- Mobile Styles --- */
                    /* Always full width, no rounded corners on mobile */
                    scrolled
                        ? 'border-b border-white/5 bg-slate-950/90 backdrop-blur-xl'
                        : 'border-transparent bg-transparent'
                } ${
                    /* --- Desktop Styles (md:) --- */
                    /* Floating Island look ONLY applies to Desktop when not scrolled */
                    !scrolled &&
                    'md:mx-auto md:max-w-7xl md:rounded-2xl md:border md:border-white/10 md:bg-slate-900/40 md:shadow-lg md:backdrop-blur-md'
                } ${
                    /* Desktop Scrolled: Becomes a full navbar */
                    scrolled && 'md:w-full md:rounded-none'
                } `}
            >
                <Link
                    href="/"
                    className="group relative z-50 flex items-center gap-3"
                >
                    {/* Icon Container */}
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:ring-cyan-400/50">
                        {/* Lucide Icon */}
                        <Cpu
                            className="h-6 w-6 text-cyan-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-180"
                            strokeWidth={2.5}
                        />
                    </div>

                    {/* Text */}
                    <h1 className="text-xl font-bold tracking-[0.2em] text-white transition-colors group-hover:text-white/90">
                        GROUP
                        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                            4
                        </span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 transition-all hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-4 md:flex">
                    {auth.user ? (
                        <Link
                            href={dashboard()} // Ensure this returns a string like '/dashboard'
                            className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="flex items-center gap-4">
                            {/* FIXED: Changed Link to button and href to onClick */}
                            <Link
                                href={login()}
                                className="text-sm font-medium text-white hover:text-cyan-300"
                            >
                                Log In
                            </Link>

                            {canRegister && (
                                <Link
                                    href={register()} // Ensure this returns a string like '/register'
                                    className="group relative overflow-hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                >
                                    <span className="relative z-10">
                                        Register
                                    </span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
                {/* Mobile Hamburger Toggle */}
                <button
                    className="relative z-50 flex flex-col gap-1.5 p-1 md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                            isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                            isMobileMenuOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                            isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                        }`}
                    />
                </button>
            </header>

            {/* Mobile Menu Dropdown - FIXED FULL WIDTH */}
            <div
                className={`fixed inset-x-0 top-[60px] h-screen w-full bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? 'visible opacity-100'
                        : 'pointer-events-none invisible opacity-0'
                }`}
            >
                <div className="flex flex-col items-center gap-8 p-8">
                    {/* Links */}
                    <div className="flex w-full flex-col items-center gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-medium text-slate-300 hover:text-cyan-400"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full max-w-[200px] bg-white/10"></div>

                    {/* Auth Buttons */}
                    <div className="flex w-full max-w-xs flex-col gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="w-full rounded-lg bg-cyan-600 py-3 text-center font-bold text-white shadow-lg shadow-cyan-500/20"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="w-full rounded-lg bg-white/5 py-3 text-center font-medium text-slate-300 hover:bg-white/10"
                                >
                                    Log In
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="w-full rounded-lg border border-cyan-500/30 bg-cyan-500/10 py-3 text-center font-bold text-cyan-300"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Link } from '@inertiajs/react';

export default function FooterSection() {
    return (
        <footer
            id="contact"
            className="relative border-t border-white/10 bg-slate-950 pt-20 pb-10 text-white"
        >
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="mb-6 flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_15px_#22d3ee]"></div>
                            <h2 className="text-2xl font-bold tracking-widest">
                                GROUP
                                <span className="font-light text-cyan-400">
                                    4
                                </span>
                            </h2>
                        </Link>
                        <p className="mb-6 max-w-sm leading-relaxed text-slate-400">
                            Connecting the dots between historical foundations
                            and future innovations. We provide the
                            infrastructure that allows technology to arise,
                            adapt, and serve humanity in real-time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 font-bold text-white">
                            The Network
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>
                                <a
                                    href="#hero"
                                    className="transition-all hover:pl-2 hover:text-cyan-400"
                                >
                                    Home Interface
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about-us"
                                    className="transition-all hover:pl-2 hover:text-cyan-400"
                                >
                                    Evolution Timeline
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-all hover:pl-2 hover:text-cyan-400"
                                >
                                    System Status
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-all hover:pl-2 hover:text-cyan-400"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 font-bold text-white">
                            Transmission
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                                <span>
                                    123 Innovation Blvd,
                                    <br />
                                    Tech District, Era 4.0
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="block h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                                <a
                                    href="mailto:hello@group4.tech"
                                    className="hover:text-white"
                                >
                                    hello@group4.tech
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="block h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                                <span>+1 (800) 555-0199</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-slate-600 md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Group 4 Technologies.
                        All systems operational.
                    </p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        <a href="#" className="hover:text-slate-400">
                            Privacy Protocol
                        </a>
                        <a href="#" className="hover:text-slate-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

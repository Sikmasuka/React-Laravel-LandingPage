import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '../ui/input';

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative flex w-full items-center justify-center bg-slate-950 px-4 py-24"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-900/20 blur-[100px]"></div>

            <div className="relative z-10 w-full max-w-5xl">
                {/* Container */}
                <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-xl md:grid-cols-2">
                    {/* LEFT SIDE: Contact Info */}
                    <div className="relative flex flex-col justify-center border-b border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-10 md:border-r md:border-b-0">
                        {/* Decorative line */}
                        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

                        <div>
                            <span className="mb-4 inline-block rounded border border-cyan-500/30 bg-cyan-900/20 px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                                TRANSMISSION LINK
                            </span>
                            <h2 className="mb-4 text-4xl font-bold text-white">
                                Establish <br />
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Connection
                                </span>
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Ready to integrate with the network? Have a
                                query about our protocols? Fill out the data
                                fields and our team will respond to your signal
                                shortly.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <span>janpauldelacera-it@srcb.edu.ph</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span>Balingasag, Misamis Oriental</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Simple Form */}
                    <div className="bg-slate-950/50 p-10">
                        <form>
                            <FieldSet className="space-y-6">
                                <FieldGroup className="space-y-5">
                                    {/* Name Input */}
                                    <Field>
                                        <FieldLabel
                                            htmlFor="name"
                                            className="text-xs font-bold tracking-widest text-slate-500 uppercase"
                                        >
                                            Identity
                                        </FieldLabel>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            autoComplete="name"
                                            className="mt-2 h-11 w-full rounded-lg border-white/10 bg-white/5 text-sm text-white transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:bg-cyan-950/10 focus:ring-1 focus:ring-cyan-500"
                                        />
                                    </Field>

                                    {/* Email Input */}
                                    <Field>
                                        <FieldLabel
                                            htmlFor="email"
                                            className="text-xs font-bold tracking-widest text-slate-500 uppercase"
                                        >
                                            Digital Address
                                        </FieldLabel>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            autoComplete="email"
                                            className="mt-2 h-11 w-full rounded-lg border-white/10 bg-white/5 text-sm text-white transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:bg-cyan-950/10 focus:ring-1 focus:ring-cyan-500"
                                        />
                                    </Field>

                                    {/* Message Input */}
                                    <Field>
                                        <FieldLabel
                                            htmlFor="message"
                                            className="text-xs font-bold tracking-widest text-slate-500 uppercase"
                                        >
                                            Message us
                                        </FieldLabel>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Input your message here..."
                                            className="mt-2 flex w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:bg-cyan-950/10 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                                        />
                                    </Field>
                                </FieldGroup>

                                {/* Send Button */}
                                <button className="group relative mt-2 w-full overflow-hidden rounded-lg bg-white py-3 text-center text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Send
                                        <svg
                                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </FieldSet>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

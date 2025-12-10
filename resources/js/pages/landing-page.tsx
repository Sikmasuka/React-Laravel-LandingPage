import AboutSection from '@/components/Landing-Page/about';
import ContactSection from '@/components/Landing-Page/contact';
import FooterSection from '@/components/Landing-Page/footer';
import HeaderSection from '@/components/Landing-Page/header';
import HeroBanner from '@/components/Landing-Page/hero';
import ParticleBackground from '@/components/particle-bg';

export default function LandingPage() {
    return (
        <div className="relative min-h-screen w-full !scroll-smooth bg-[#0f0c29] font-sans text-white selection:bg-purple-500 selection:text-white">
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 h-full w-full">
                <div
                    className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: "url('/images/hero.jpg')" }}
                >
                    {/* Gradient Overlay: Darker at bottom for text readability, clear at top */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/95"></div>

                    {/* Purple Tint Overlay to unify colors */}
                    <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay"></div>
                </div>
            </div>

            {/* Sections */}
            <HeaderSection />
            <section id="hero" className="scroll-mt-28">
                <HeroBanner />
            </section>
            <section id="about-us" className="scroll-mt-28">
                <AboutSection />
            </section>

            <section id="contact" className="scroll-mt-28">
                <ContactSection />
            </section>
            <section id="footer" className="scroll-mt-28">
                <FooterSection />
            </section>

            {/* Footer */}
            <footer className="absolute bottom-4 z-10 w-full text-center">
                <p className="font-mono text-xs tracking-widest text-white/30 uppercase">
                    © 2025 Group 4 • Designed with mystical vibes
                </p>
            </footer>
            <ParticleBackground />
        </div>
    );
}

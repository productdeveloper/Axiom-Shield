import { useEffect } from 'react';
import HeaderBanner from '../components/HeaderBanner';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TransparencySection from '../components/TransparencySection';
import FounderSection from '../components/FounderSection';
import TrustBanner from '../components/TrustBanner';
import Footer from '../components/Footer';

export default function LandingPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section, header').forEach(el => {
            el.classList.add('fade-in-hidden');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans text-gray-100 selection:bg-green-accent selection:text-background">
            <HeaderBanner />
            <Navbar />
            <main>
                <Hero />
                <Features />
                <TransparencySection />
                <FounderSection />
                <TrustBanner />
            </main>
            <Footer />
        </div>
    );
}

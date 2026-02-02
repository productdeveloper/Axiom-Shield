import HeroDemo from './HeroDemo';

export default function Hero() {
    return (
        <header className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-accent/5 blur-[120px] -z-10 rounded-full"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
                <div className="flex flex-col items-start translate-y-0 opacity-100 transition-all duration-700">
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 gradient-text">
                        Privacy-First Safety For Every AI Session
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl">
                        Mask private data, block secret leaks, and prevent liability instantly. Axiom Shield works across ChatGPT,
                        Gemini, Claude, and more.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16">
                        <button className="bg-green-accent hover:bg-green-500 text-background px-8 py-4 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-1">
                            Add to Chrome — It's Free
                        </button>
                        <a href="#features" className="bg-surface hover:bg-surface/80 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
                            Explore Features
                        </a>
                    </div>

                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-green-accent">100%</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Client-Side</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-green-accent">6+</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Platforms</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-green-accent">&lt;10ms</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Latency</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <HeroDemo />
                </div>
            </div>
        </header >
    );
}

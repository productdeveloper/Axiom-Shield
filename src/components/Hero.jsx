import HeroDemo from './HeroDemo';

export default function Hero() {
    return (
        <header className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-accent/5 blur-[120px] -z-10 rounded-full"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
                <div className="flex flex-col items-start translate-y-0 opacity-100 transition-all duration-700">
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 gradient-text">
                        Privacy-First Safety for AI Used at Work
                    </h1>
                    <p className="text-xl text-gray-400 mb-6 max-w-xl">
                        Reduce the risk of accidental data exposure when developers and teams use ChatGPT, Claude, Gemini, and other AI tools for real work.
                    </p>
                    <p className="text-sm text-green-accent/80 font-bold mb-10 tracking-wide uppercase">
                        Built for professionals, developers, founders, and operators who use AI with real data. Not casual chat.
                    </p>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white/10 text-gray-400 px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed border border-white/5 flex items-center gap-2">
                                Add to Chrome – Free
                                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                            </button>
                            <a href="#features" className="bg-surface hover:bg-surface/80 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
                                Explore Features
                            </a>
                        </div>
                        <p className="text-xs text-yellow-500/80 font-bold tracking-widest uppercase pl-4">
                            Pending Chrome Web Store Approval
                        </p>
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

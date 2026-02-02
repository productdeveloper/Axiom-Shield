import vimalImage from '../assets/vimal-makhija.jpg';

export default function FounderSection() {
    return (
        <section className="py-24 bg-surface dark:bg-[#1a1f2e] text-center">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="flex flex-col items-center">
                    <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-8 border-4 border-green-accent/20">
                        <img src={vimalImage} alt="Vimal Makhija" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-green-accent font-bold mb-4">AI Privacy Advocate</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Vimal Makhija</h3>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed italic">
                        "I built Axiom Shield after realizing how easy it is to accidentally paste private work data into public AI tools. I needed a safety net that was fast, transparent, open source and ran entirely in my browser. Now, I can use AI without the anxiety of a leak."
                    </p>

                    <div className="flex gap-6 mb-10 text-gray-400">
                        <a href="https://www.linkedin.com/in/vimalmakhija/" target="_blank" rel="noopener noreferrer" className="hover:text-green-accent transition-colors font-medium">LinkedIn</a>
                        <span className="opacity-20">•</span>
                        <a href="https://github.com/productdeveloper/Axiom-Shield" target="_blank" rel="noopener noreferrer" className="hover:text-green-accent transition-colors font-medium">GitHub</a>
                    </div>

                </div>
            </div>
        </section>
    );
}

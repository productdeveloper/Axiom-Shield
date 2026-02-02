export default function TrustBanner() {
    return (
        <section id="security" className="py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-green-accent/[0.02] radial-gradient"></div>
            <div className="container mx-auto px-6 relative">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Your data never leaves your browser.</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Axiom Shield is 100% client-side. No logs, no external APIs, no tracking. Total privacy by design.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-green-accent/10 border border-green-accent/20 text-green-accent px-6 py-2 rounded-full font-bold text-sm">Local-Only Processing</span>
                    <span className="bg-green-accent/10 border border-green-accent/20 text-green-accent px-6 py-2 rounded-full font-bold text-sm">Open Verification</span>
                    <span className="bg-green-accent/10 border border-green-accent/20 text-green-accent px-6 py-2 rounded-full font-bold text-sm">Zero Data Collection</span>
                </div>
            </div>
        </section>
    );
}

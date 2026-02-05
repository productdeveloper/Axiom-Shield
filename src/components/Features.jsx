export default function Features() {
    const features = [
        {
            icon: "🔒",
            title: "Mask Personally Identifiable Information",
            description: "Automatically detects and masks common Personally Identifiable Information (PII) like emails, phone numbers, credit card numbers, SSNs and IDs before they reach AI tools."
        },
        {
            icon: "🛡️",
            title: "Secret Blocker",
            description: "Helps prevent accidental exposure of common API keys and secrets by detecting known key patterns before submission."
        },
        {
            icon: "⚖️",
            title: "View Liability Alerts",
            description: "Provides early warnings for potentially risky language that could create unintended commitments."
        },
        {
            icon: "🌍",
            title: "Multi-Platform Ready",
            description: "Works across popular AI tools like ChatGPT, Gemini, Claude, and more."
        }
    ];

    return (
        <section id="features" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">Practical Safety Controls for Everyday AI Use</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-surface p-10 rounded-3xl border border-white/5 hover:border-green-accent/50 transition-all hover:-translate-y-1 group">
                            <div className="text-4xl mb-6">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-accent transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

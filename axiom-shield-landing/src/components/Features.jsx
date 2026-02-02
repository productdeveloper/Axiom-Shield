export default function Features() {
    const features = [
        {
            icon: "🔒",
            title: "Mask Personally Identifiable Information",
            description: "Instantly masks emails, phone numbers, SSNs, and credit cards before they ever reach the AI."
        },
        {
            icon: "🛡️",
            title: "Secret Blocker",
            description: "Detects and blocks OpenAI, AWS, GitHub, Anthropic, and Google API keys from being leaked in prompts."
        },
        {
            icon: "⚖️",
            title: "View Liability Alerts",
            description: "Passive alerts for risky words like \"guarantee\" or \"warranty\" that could create legal binding."
        },
        {
            icon: "🌍",
            title: "Multi-Platform Ready",
            description: "Works across ChatGPT, Gemini, Claude, and more."
        }
    ];

    return (
        <section id="features" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">Bulletproof Security Suite</h2>
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

import { Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
    const plans = [
        {
            name: "Free",
            status: "Available Now",
            description: "Essential safety for every individual user.",
            features: [
                "Real-time PII detection",
                "Basic secret pattern detection",
                "Client-side processing only",
                "No accounts. No tracking."
            ],
            buttonText: "Add to Chrome",
            current: true
        },
        {
            name: "Pro",
            status: "Coming Soon",
            description: "Advanced safety controls for professionals and teams.",
            features: [
                "Advanced rule customization",
                "Local audit history",
                "Team policy controls",
                "Early access to new safety features"
            ],
            buttonText: "Join Waitlist",
            current: false,
            highlight: true
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Simple, Transparent Plans</h2>
                    <p className="text-gray-400 text-lg">Safety shouldn't be a luxury. Start for free, upgrade for control.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <div key={index} className={`p-10 rounded-3xl border ${plan.highlight ? 'border-green-accent/30 bg-green-accent/[0.02]' : 'border-white/5 bg-surface/30'} relative group hover:-translate-y-1 transition-all`}>
                            {plan.highlight && (
                                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-accent/10 border border-green-accent/20 text-green-accent text-xs font-bold uppercase tracking-widest">
                                    <Sparkles size={12} /> Pro
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-green-accent font-bold text-sm uppercase tracking-widest">{plan.status}</p>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-5 h-5 rounded-full bg-green-accent/10 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-green-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {plan.name === "Free" ? (
                                <a
                                    href="https://chromewebstore.google.com/detail/axiom-shield-%E2%80%93-privacy-fi/aajkcokfedagojjfiiahjbphplncpeed?pli=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 rounded-full font-bold bg-green-accent text-background hover:bg-green-500 transition-all text-center shadow-[0_4px_20px_rgba(16,185,129,0.2)]"
                                >
                                    {plan.buttonText}
                                </a>
                            ) : (
                                <button className="w-full py-4 rounded-full font-bold transition-all bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed">
                                    {plan.buttonText}
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-lg text-gray-400 font-medium">
                        You stay protected for free. <span className="text-white">Pro adds control, not fear.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

import { Search, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: <Search className="text-green-accent" size={32} />,
            title: "Step 1. Detect risk locally",
            description: "As you type or paste into AI tools, Axiom Shield scans text in real time for common risk patterns like emails, API keys, and sensitive identifiers. All processing happens inside your browser."
        },
        {
            icon: <ShieldAlert className="text-green-accent" size={32} />,
            title: "Step 2. Warn or redact before sending",
            description: "When a potential risk is detected, Axiom Shield highlights or blocks it before the data reaches the AI model, giving you a chance to fix it."
        },
        {
            icon: <CheckCircle2 className="text-green-accent" size={32} />,
            title: "Step 3. Stay in control",
            description: "You decide what to send. Axiom Shield never sends, stores, or logs your data externally."
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How Axiom Shield Works (in 3 steps)</h2>
                    <div className="w-24 h-1 bg-green-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-surface rounded-3xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-green-accent/30 transition-all group-hover:-translate-y-2">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

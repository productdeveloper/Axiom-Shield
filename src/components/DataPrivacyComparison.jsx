import { Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function DataPrivacyComparison() {
    const canSee = [
        "Text you type or paste into supported AI tools",
        "File contents you choose to scan locally",
        "Risk patterns (e.g. \"looks like an API key\")"
    ];

    const neverSees = [
        "Your conversations stored anywhere",
        "Your files leaving the browser",
        "Your identity or accounts",
        "Any analytics or tracking data"
    ];

    return (
        <section className="py-24 bg-surface/50 border-y border-white/5 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        What Axiom Shield Can See. And What It Never Sees.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* CAN See */}
                    <div className="bg-background/40 p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                                <Eye size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">What Axiom Shield CAN see</h3>
                        </div>
                        <ul className="space-y-4">
                            {canSee.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-lg">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NEVER Sees */}
                    <div className="bg-green-accent/[0.02] p-10 rounded-3xl border border-green-accent/10 relative overflow-hidden group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-green-accent/10 rounded-2xl flex items-center justify-center text-green-accent">
                                <EyeOff size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">What Axiom Shield NEVER sees</h3>
                        </div>
                        <ul className="space-y-4">
                            {neverSees.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-300 text-lg">
                                    <ShieldCheck className="text-green-accent flex-shrink-0 mt-0.5" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xl font-bold text-green-accent flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-green-accent/30" />
                        Your data never leaves your browser. Ever.
                        <span className="w-8 h-px bg-green-accent/30" />
                    </p>
                </div>
            </div>
        </section>
    );
}

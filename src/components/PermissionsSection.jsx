import { ShieldCheck, Info } from 'lucide-react';

export default function PermissionsSection() {
    return (
        <section className="py-16 bg-background border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-surface/30 p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-accent/10 rounded-2xl flex items-center justify-center text-green-accent">
                            <Info size={24} />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Permissions & Privacy</h2>

                            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                <p>Axiom Shield requests only the minimum permissions required to:</p>
                                <ul className="space-y-3 pl-2">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-green-accent rounded-full" />
                                        Detect text entered into supported AI tools
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-green-accent rounded-full" />
                                        Intercept uploads you explicitly choose to scan
                                    </li>
                                </ul>
                                <p className="pt-2">
                                    These permissions are required to provide local protection.
                                    <span className="text-white font-bold ml-1">No data is sent to external servers. No analytics are collected.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

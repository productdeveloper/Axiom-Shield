import { Unlock, ShieldCheck, Zap, Github, FileText } from 'lucide-react';

export default function TransparencySection() {
    const items = [
        {
            icon: <ShieldCheck className="text-green-accent" size={24} />,
            title: "Open Source Core",
            description: "Security-critical components like PII redaction and API key detection are 100% open source."
        },
        {
            icon: <Unlock className="text-warning-yellow" size={24} />,
            title: "Zero Data Collection",
            description: "Axiom Shield is 100% client-side. We have no servers, no analytics, and no tracking."
        },
        {
            icon: <Zap className="text-blue-400" size={24} />,
            title: "Premium Features",
            description: "Pro features like file scanning extend the open source core without accessing sensitive data."
        },
        {
            icon: <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px] font-bold">VM</div>,
            title: "Auditable Security",
            description: "We believe security tools should be transparent. MIT Licensed. Open to audits."
        }
    ];

    return (
        <section id="security" className="py-24 bg-[#FFF9E6]/[0.03] border-y border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-white">The Axiom Commitment</h2>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Security tools should be auditable. We have nothing to hide. That's why our core detection logic is open to everyone.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-surface/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="mb-4">{item.icon}</div>
                            <h4 className="font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-surface p-10 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-left space-y-4 max-w-xl">
                        <h3 className="text-3xl font-bold text-white">Open Source Core</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Axiom Shield runs 100% client-side. The redaction logic, PII patterns, and liability warnings are local to your browser. Use, modify, and audit freely under the MIT License.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/productdeveloper/Axiom-Shield" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-green-accent transition-colors font-bold">
                                <Github size={18} /> View Source Code
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="flex items-center gap-2 text-white hover:text-green-accent transition-colors font-bold">
                                <FileText size={18} /> Security Audit Guide
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center min-w-[240px]">
                        <div className="text-sm uppercase tracking-widest text-green-accent font-bold mb-2">License</div>
                        <div className="text-2xl font-bold text-white mb-1">MIT License</div>
                        <div className="text-xs text-gray-500">Free to use & audit</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

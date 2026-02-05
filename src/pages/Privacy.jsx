import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-gray-100 py-20 px-6 font-sans">
            <div className="container mx-auto max-w-3xl">
                <Link to="/" className="inline-flex items-center gap-2 text-green-accent hover:gap-3 transition-all mb-12 font-bold group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <h1 className="text-5xl font-extrabold mb-4 text-white">Privacy Policy</h1>
                <p className="text-gray-500 mb-12 font-medium">Last Updated: January 31, 2026</p>

                <div className="space-y-12">
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">1. The Short Version</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Axiom Shield is designed to reduce the risk of accidental data exposure, not collect user data. The extension runs entirely on your local device. All detection and redaction logic executes inside your browser. No data is transmitted to external servers.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">2. Data Collection</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                <strong className="text-white block mb-2">Personal Information:</strong>
                                Axiom Shield does not collect, store, or transmit personal information. The extension does not identify users and does not create user profiles.
                            </p>
                            <p>
                                <strong className="text-white block mb-2">Usage Data:</strong>
                                Axiom Shield does not collect analytics, telemetry, or usage metrics. We do not use tracking pixels, cookies, or third-party analytics tools.
                            </p>
                            <p>
                                <strong className="text-white block mb-2">Server Transmission:</strong>
                                Axiom Shield does not send text, files, or metadata to any external servers. All processing occurs locally within your browser environment.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">3. Browser Permissions</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            Axiom Shield requests minimal permissions, strictly required to provide local safety protections:
                        </p>
                        <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-4 text-gray-400">
                            <p>
                                <strong className="text-white">Active Tab:</strong> Used to detect and protect text entered into supported AI tools when you are actively using them.
                            </p>
                            <p>
                                <strong className="text-white">Content Script Access (Site-specific):</strong> The extension runs only on explicitly supported AI websites (such as ChatGPT, Gemini, Claude, Perplexity). This allows Axiom Shield to scan text input fields locally for risk patterns before submission.
                            </p>
                            <div className="pt-4 border-t border-white/5 font-medium italic">
                                Axiom Shield does NOT read browsing history, monitor unrelated websites, or record page content outside supported AI tools.
                            </div>
                        </div>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">4. How Detection Works</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-4">
                            Axiom Shield scans text locally using predefined patterns to identify common risks such as:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400 text-lg ml-2">
                            <li>Personally identifiable information (PII)</li>
                            <li>API keys and secrets</li>
                            <li>Potentially risky legal language</li>
                        </ul>
                        <p className="mt-4 text-gray-400 text-lg italic">
                            Detected risks may be highlighted, redacted, or blocked before submission. Users remain in full control of what is sent.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">5. Third-Party Access</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Since we do not collect data, we have nothing to share with third parties, advertisers, or government agencies.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">6. Open Source Verification</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Trust, but verify. Core detection logic is open source and publicly auditable. Users can inspect the code to verify that no data exfiltration exists.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">7. Contact</h2>
                        <p className="text-gray-400 text-lg">
                            For questions about this policy, contact: <a href="mailto:contact@aimagine.in" className="text-green-accent hover:underline font-bold">contact@aimagine.in</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

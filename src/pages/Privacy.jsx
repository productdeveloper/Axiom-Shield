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
                            Axiom Shield is designed to protect your privacy, not invade it. We do not collect, store, or transmit your personal data. The extension runs entirely on your local device (Client-Side). What you type in your browser stays in your browser.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">2. Data Collection</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                <strong className="text-white block mb-2">Personal Information:</strong>
                                We collect zero personal information (PII). We do not know who you are, what you type, or which websites you visit.
                            </p>
                            <p>
                                <strong className="text-white block mb-2">Usage Data:</strong>
                                We do not collect analytics or usage metrics. We do not use Google Analytics, Mixpanel, or any tracking pixels.
                            </p>
                            <p>
                                <strong className="text-white block mb-2">Server Transmission:</strong>
                                The extension does not send any data to external servers. All text processing (PII detection and redaction) happens locally on your computer's CPU.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">3. Permissions</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            To function, Axiom Shield requires specific browser permissions:
                        </p>
                        <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 italic text-gray-400">
                            <p>
                                <strong className="text-white not-italic">"Read and change all your data on the websites you visit":</strong>
                                This sounds scary, but it is technically required for the extension to "see" the chat box on ChatGPT or Gemini and redact sensitive text before you send it. We only use this permission to scan input fields for PII patterns (like emails and API keys). We do not read your browsing history.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">4. Third-Party Access</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Since we do not collect data, we have nothing to share with third parties, advertisers, or government agencies.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">5. Open Source Verification</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Trust, but verify. Our core detection logic is open source. You can audit our code on GitHub to confirm that no data exfiltration exists.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">6. Contact</h2>
                        <p className="text-gray-400 text-lg">
                            If you have questions about this policy, please contact us at: <a href="mailto:contact@aimagine.in" className="text-green-accent hover:underline font-bold">contact@aimagine.in</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

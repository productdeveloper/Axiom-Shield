import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-gray-100 py-20 px-6 font-sans">
            <div className="container mx-auto max-w-3xl">
                <Link to="/" className="inline-flex items-center gap-2 text-green-accent hover:gap-3 transition-all mb-12 font-bold group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <h1 className="text-5xl font-extrabold mb-4 text-white">Terms of Service</h1>
                <p className="text-gray-500 mb-12 font-medium">Last Updated: January 31, 2026</p>

                <div className="space-y-12">
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            By installing and using the Axiom Shield browser extension ("Software"), you agree to these Terms. If you do not agree, please uninstall the extension.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">2. The Service</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Axiom Shield provides a suite of tools designed to identify potential privacy leaks and liability risks in text input. It is provided by AImagine Labs ("Company").
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">3. Disclaimer of Warranties</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p className="italic bg-surface/30 p-4 rounded-xl border border-white/5">
                                The Software is provided "AS IS" and "AS AVAILABLE" without warranty of any kind.
                            </p>
                            <p>
                                <strong className="text-white block mb-2">Not Legal Advice:</strong>
                                Axiom Shield’s "Liability Warnings" are for informational purposes only. They do not constitute legal advice. You should not rely on the Software as a substitute for professional legal counsel.
                            </p>
                            <p>
                                <strong className="text-white block mb-2">Not Perfect:</strong>
                                While we strive for accuracy, Axiom Shield may miss some PII (false negatives) or flag safe text (false positives). You remain solely responsible for the data you submit to third-party AI services.
                            </p>
                        </div>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">4. Limitation of Liability</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To the maximum extent permitted by law, AImagine Labs and its founders shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Software, including but not limited to data loss, data leaks, or legal liability arising from your use of AI tools.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">5. User Conduct</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            You agree not to reverse engineer, decompile, or use the Software to create a competing product. You agree not to use the Software for any illegal purpose.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">6. Changes</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            We may update these terms at any time. Continued use of the Software signifies your acceptance of the changes.
                        </p>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-green-accent pl-4">7. Contact</h2>
                        <p className="text-gray-400 text-lg">
                            For support or legal inquiries: <a href="mailto:contact@aimagine.in" className="text-green-accent hover:underline font-bold">contact@aimagine.in</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

import { useState, useRef } from 'react';
import { Send, Shield, AlertTriangle } from 'lucide-react';

export default function HeroDemo() {
    const [inputText, setInputText] = useState("");
    const [redactedText, setRedactedText] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const textareaRef = useRef(null);

    // Exact Patterns from extension content.js
    const piiPatterns = {
        email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/gi,
        phone: /\b(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\b/g,
        ssn: /\b\d{3}-\d{2}-\d{4}\b/g,
        secret: /sk-(?:proj-)?[a-zA-Z0-9_-]{7,}|AIza[0-9A-Za-z_-]{20,}|AKIA[0-9A-Z]{12,}|ghp_[a-zA-Z0-9]{20,}/g
    };

    const liabilityWords = ['guarantee', 'promise', 'warranty', 'refund', '100% safe'];

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputText(val);

        // Liability check
        const hasLiability = liabilityWords.some(word =>
            val.toLowerCase().includes(word.toLowerCase())
        );
        setShowWarning(hasLiability);

        // Apply Redaction logic (display-only, does not affect textarea value)
        let tempText = val;

        tempText = tempText.replace(piiPatterns.email, '[EMAIL_REDACTED]');
        tempText = tempText.replace(piiPatterns.phone, '[PHONE_REDACTED]');
        tempText = tempText.replace(piiPatterns.ssn, '[SSN_REDACTED]');
        tempText = tempText.replace(piiPatterns.secret, '[KEY_REDACTED]');

        setRedactedText(tempText);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-2xl bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                {/* Browser Chrome */}
                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-[#1e1e1e] px-8 py-1 rounded-md text-[10px] text-gray-500 font-mono">
                        chatgpt.com
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-accent">
                        <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                        <span className="hidden sm:inline tracking-wider">🛡️ AXIOM SHIELD ACTIVE</span>
                    </div>
                </div>

                {/* Chat Interface */}
                <div className="bg-[#1e1e1e] p-6 h-[260px] overflow-y-auto flex flex-col gap-6 relative">
                    {/* AI Message */}
                    <div className="flex gap-4 items-start max-w-[90%]">
                        <div className="w-8 h-8 rounded-sm bg-teal-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
                            AI
                        </div>
                        <div className="bg-transparent text-gray-300 text-sm leading-relaxed">
                            Hello! I am ready to help. Please share your client details.
                        </div>
                    </div>

                    {/* User Message (Instant Redaction View) */}
                    {redactedText && (
                        <div className="flex gap-4 items-start justify-end self-end max-w-[90%] animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-[#2f2f2f] text-gray-200 text-sm p-3 rounded-2xl border border-white/5">
                                {redactedText}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-extrabold">
                                YOU
                            </div>
                        </div>
                    )}

                    {/* View Liability Alerts */}
                    {showWarning && (
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] bg-warning-yellow p-3 rounded-xl flex items-center gap-3 shadow-2xl animate-bounce-subtle z-20">
                            <AlertTriangle size={18} className="text-[#856404] flex-shrink-0" />
                            <div className="text-[#856404] text-xs font-bold leading-tight">
                                ⚠️ Legal Risk Detected: Word creating liability found.
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="bg-[#1e1e1e] p-4 border-t border-white/5">
                    <div className="relative">
                        <textarea
                            ref={textareaRef}
                            className="w-full bg-[#343541] text-white text-sm rounded-xl py-4 pl-4 pr-12 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-green-accent/20 placeholder-gray-500 transition-all border border-white/5"
                            placeholder="Try typing: 'Email is john@gmail.com' or 'I guarantee a refund'..."
                            value={inputText}
                            onChange={handleInputChange}
                        ></textarea>
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-accent transition-colors">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <p className="mt-4 text-gray-400 text-sm font-bold animate-pulse">
                👆 Try it live: Type a fake email above.
            </p>
        </div>
    );
}

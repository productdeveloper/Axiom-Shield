import { X } from 'lucide-react';
import { useState } from 'react';

export default function HeaderBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-green-900/20 backdrop-blur-md border-b border-white/5 py-2 px-4 flex justify-center items-center relative z-[1001]">
            <p className="text-sm font-bold text-gray-200 uppercase tracking-widest">
                A product by <a href="https://aimagine.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-accent transition-colors">AIMagine</a>
            </p>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Dismiss"
            >
                <X size={16} className="text-gray-400 hover:text-white" />
            </button>
        </div>
    );
}

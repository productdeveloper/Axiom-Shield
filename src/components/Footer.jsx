import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex flex-col items-center mb-8">
                    <p className="text-gray-400 text-sm mb-2">Questions? Contact us at <a href="mailto:contact@aimagine.in" className="text-green-accent hover:underline">contact@aimagine.in</a></p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">© 2026 Axiom Shield. A Privacy product by AImagine Labs.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    <a href="https://github.com/productdeveloper/Axiom-Shield" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

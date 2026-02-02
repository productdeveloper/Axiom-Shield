import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-[1000] bg-background/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-green-accent rounded-lg flex items-center justify-center font-bold text-background text-lg">A</div>
                    <span className="font-extrabold text-2xl text-white">Axiom Shield</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a href="/#features" className="text-gray-400 hover:text-green-accent font-medium transition-colors">Features</a>
                    <a href="/#security" className="text-gray-400 hover:text-green-accent font-medium transition-colors">Security</a>
                </div>
            </div>
        </nav>
    );
}

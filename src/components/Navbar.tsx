import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
    onOpenInstall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInstall }) => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['how-it-works', 'safety-gate', 'features', 'sandbox', 'benchmarks'];
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the top 40% of the screen or higher
                    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
                        current = section;
                        break;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'safety-gate', label: 'Safety Gate' },
        { id: 'features', label: 'Capabilities' },
        { id: 'sandbox', label: 'Live Sandbox' },
        { id: 'benchmarks', label: 'Benchmarks' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/40 backdrop-blur-md border-b border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Zone 1: Single text element wordmark */}
                <a
                    href="#"
                    className="flex items-center gap-2.5 text-slate-900 font-semibold tracking-tight text-lg hover:text-black transition-colors"
                >
                    <img src="/spider_logo.ico" alt="Spider Logo" className="w-6 h-6 object-contain" />
                    <span className="font-display font-medium tracking-tight">SpideyAgent</span>
                </a>

                {/* Zone 2: 4-6 clean text navigation links */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-slate-600">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`transition-colors whitespace-nowrap ${activeSection === link.id
                                ? 'text-red-600 font-medium'
                                : 'hover:text-slate-900'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Zone 3: 1-2 primary actions */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/iqandeq006-hue/SIH-26171"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:text-black transition-colors whitespace-nowrap"
                    >
                        <span>SIH26171 Spec</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>

                    <button
                        onClick={onOpenInstall}
                        className="px-4 py-2 text-xs font-medium text-slate-900 bg-gradient-to-r from-slate-100 via-white to-slate-200 hover:from-white hover:to-white rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
                    >
                        Add to Browser — Free
                    </button>
                </div>
            </div>
        </header>
    );
};

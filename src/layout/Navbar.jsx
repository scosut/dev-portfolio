import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { NavLinks, Icons } from '@/data/data';

const Navbar = () => {
    const [animationOption, setAnimationOption] = useState('');
    const [didScroll, setDidScroll] = useState(false);

    const handleScroll = () => {
        setDidScroll(window.scrollY > 50);
    };

    const handleMenuClick = () => {
        const opt = animationOption === 'in' ? 'out' : 'in';
        setAnimationOption(opt);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border border-transparent transition-all duration-500 ${didScroll ? 'glass-strong py-3' : 'bg-transparent py-5'}`}
        >
            <nav className="container mx-auto px-6 flex flex-wrap items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    SS<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        <NavLinks />
                    </div>
                </div>

                {/* CTA Button */}
                <a href="#contact">
                    <Button className="hidden md:block" size="sm" type="button">
                        Contact Me
                    </Button>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={handleMenuClick}
                >
                    {animationOption === 'in' ? (
                        <Icons.X size={24} />
                    ) : (
                        <Icons.Menu size={24} />
                    )}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden glass-strong w-full ${`animate-fade-${animationOption}`}`}
                >
                    <div className="container mx-auto p-6 flex flex-col gap-4">
                        <NavLinks
                            clickHandler={() => setAnimationOption('out')}
                        />

                        <a
                            href="#contact"
                            onClick={() => setAnimationOption('out')}
                        >
                            <Button className="w-full">Contact Me</Button>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

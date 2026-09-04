import { FooterLinks, SocialLinks } from '@/data/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center lg:text-left">
                        <a
                            href="#"
                            className="text-xl font-bold tracking-tight"
                        >
                            SS<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Scott Sutton. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <FooterLinks />

                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

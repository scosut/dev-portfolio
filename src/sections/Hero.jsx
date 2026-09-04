import Button from '@/components/Button';
import AnimatedBorderButton from '@/components/AnimatedBorderButton';
import { SocialLinks, Icons, Skills } from '@/data/data';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: '#20B2A6',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column – text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                Full Stack Developer | WordPress, Vue, LAMP,
                                MERN
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting{' '}
                                <span className="text-primary glow-text">
                                    digital
                                </span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif font-normal text-white">
                                    precision
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hello, I'm Scott Sutton — a full stack developer
                                proficient in WordPress, Vue, LAMP, and MERN. I
                                build scalable, responsive web applications that
                                streamline workflows for the end user.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg">
                                    Contact Me{' '}
                                    <Icons.ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a
                                href={`${import.meta.env.BASE_URL}resume_scosut.pdf`}
                                download
                            >
                                <AnimatedBorderButton>
                                    <Icons.Download className="w-5 h-5" />
                                    Download Resumé
                                </AnimatedBorderButton>
                            </a>

                            {/* Social Links */}
                            <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
                                <span className="text-sm text-muted-foreground">
                                    Follow Me:{' '}
                                </span>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                    {/* Right column – profile image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src={`${import.meta.env.BASE_URL}profile/dev_writing_code.jpg`}
                                    alt="Developer writing code"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium">
                                            Available for work
                                        </span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">
                                        10+
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Years Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with:
                    </p>
                    <div className="relative h-15">
                        <div className="absolute overflow-hidden">
                            <div className="flex animate-marquee">
                                <Skills />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">
                        Scroll
                    </span>
                    <Icons.ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;

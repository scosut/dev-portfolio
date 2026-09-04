import { Highlights } from '@/data/data';

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif font-normal text-white">
                                {' '}
                                one component at a time
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a passionate developer with over 10 years'
                                experience, crafting digital products that truly
                                make a difference. My journey began with a
                                personal need to automate the repetitive
                                portions of my job so I could pursue more
                                creative opportunities. That yearning to
                                eliminate busywork coupled with frequent
                                exposure to challenging projects has evolved
                                into a strong expertise in modern web
                                technologies.
                            </p>
                            <p>
                                I'm proficient in both LAMP & MERN technology
                                stacks, building everything from landing pages
                                to department-level applications. My approach
                                combines quality workmanship with a keen eye for
                                form and function.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring
                                new technologies, identifying improvements to
                                existing practices, and sharing my knowledge
                                with the developer community.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                &ldquo;My mission is to create digital
                                experiences that are not only functional, but
                                aesthetically pleasing — products that combine
                                an ease of use with minimal upkeep.&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Right column – highlights */}
                    <Highlights />
                </div>
            </div>
        </section>
    );
};

export default About;

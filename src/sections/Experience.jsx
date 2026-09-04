import { Experiences } from '@/data/data';

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Relevant experience that
                        <br />
                        <span className="font-serif font-normal text-white">
                            {' '}
                            speaks volumes
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from humble
                        beginnings to seasoned pro, mentoring junior developers
                        and building products at scale.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-primary/10 md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <Experiences />
                </div>
            </div>
        </section>
    );
};

export default Experience;

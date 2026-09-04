import { Examples, Icons } from '@/data/data';
import AnimatedBorderButton from '@/components/AnimatedBorderButton';

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

            {/* Section Header */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl text-secondary-foreground font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Projects that
                        <span className="font-serif font-normal text-white">
                            {' '}
                            make an impact
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A sampling of my work, from web applications to
                        practical tools that solve real-world problems.
                    </p>
                </div>

                {/* Examples Grid */}
                <Examples />

                {/* View all CTAs */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a href="https://github.com/scosut" target="_blank">
                        <AnimatedBorderButton>
                            View All Projects
                            <Icons.ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import { Recommendations, Icons } from '@/data/data';
import { useState } from 'react';

const Testimonials = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What People Say
                    </span>
                    <h2 className="text-4xl md:text-5xl text-secondary-foreground font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Kind words from
                        <span className="font-serif font-normal text-white">
                            {' '}
                            amazing people
                        </span>
                    </h2>
                </div>

                {/* Testimonial carousel */}
                <div key={carouselIndex} className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Icons.Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-8 pt-4">
                                &ldquo;{Recommendations[carouselIndex].quote}
                                &rdquo;
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                    src={`${import.meta.env.BASE_URL}${Recommendations[carouselIndex].avatar}`}
                                    alt={Recommendations[carouselIndex].author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div>
                                    <div className="font-semibold">
                                        {Recommendations[carouselIndex].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {Recommendations[carouselIndex].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={() =>
                                    setCarouselIndex((prev) =>
                                        prev === 0
                                            ? Recommendations.length - 1
                                            : prev - 1,
                                    )
                                }
                            >
                                <Icons.ChevronLeft />
                            </button>

                            <div className="flex items-center gap-2">
                                {Recommendations.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`rounded-full w-2.5 h-2.5 transition-all duration-300 ${index === carouselIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                                        onClick={() => setCarouselIndex(index)}
                                    />
                                ))}
                            </div>

                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={() =>
                                    setCarouselIndex((prev) =>
                                        prev === Recommendations.length - 1
                                            ? 0
                                            : prev + 1,
                                    )
                                }
                            >
                                <Icons.ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

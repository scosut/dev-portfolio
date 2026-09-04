import {
    AlertCircle,
    ArrowRight,
    ArrowUpRight,
    CheckCircle,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Code2,
    Download,
    Github,
    Lightbulb,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    Phone,
    Quote,
    Rocket,
    Send,
    Users,
    X,
} from 'lucide-react';

// Button component sizing
export const SizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

// Labels for section links in top navigation & footer
export const SectionLinks = ['about', 'projects', 'experience', 'testimonials'];

// NavLinks component in top navigation
export const NavLinks = ({ clickHandler }) => {
    return SectionLinks.map((item, index) => (
        <a
            key={index}
            href={`#${item}`}
            className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:text-foreground hover:bg-surface"
            onClick={clickHandler}
        >{`${item.slice(0, 1).toUpperCase()}${item.slice(1)}`}</a>
    ));
};

// FooterLinks component in footer
export const FooterLinks = () => {
    return (
        <nav className="flex flex-wrap justify-center gap-6">
            {SectionLinks.map((item, index) => (
                <a
                    key={index}
                    href={`#${item}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    {`${item.slice(0, 1).toUpperCase()}${item.slice(1)}`}
                </a>
            ))}
        </nav>
    );
};

// SocialLinks component that appear in Hero section & footer
export const SocialLinks = () => {
    const items = [
        {
            icon: Github,
            href: 'https://github.com/scosut',
            label: 'Github',
        },
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/scosut/',
            label: 'LinkedIn',
        },
    ];

    return items.map((item, index) => (
        <a
            key={index}
            href={item.href}
            aria-label={item.label}
            className="py-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            target="_blank"
        >
            {<item.icon className="w-5 h-5" />}
        </a>
    ));
};

// Icons used throughout portfolio
export const Icons = {
    AlertCircle,
    ArrowRight,
    ArrowUpRight,
    CheckCircle,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Code2,
    Download,
    Github,
    Lightbulb,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    Phone,
    Quote,
    Rocket,
    Send,
    Users,
    X,
};

// Hero section
export const Skills = () => {
    const items = [
        'Bootstrap',
        'Docker',
        'Express',
        'Git',
        'MongoDB',
        'MySQL',
        'Node.js',
        'PHP',
        'PostgreSQL',
        'React',
        'Redux',
        'Sass',
        'Tailwind CSS',
        'TypeScript',
        'Vercel',
        'Vite',
        'Vue',
        'Vuex',
        'WordPress',
    ];

    return [...items, ...items].map((item, index) => (
        <div key={index} className="flex-shrink-0 px-6 py-4">
            <span className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {item}
            </span>
        </div>
    ));
};

// About section
export const Highlights = () => {
    const items = [
        {
            icon: Code2,
            title: 'Clean Code',
            description:
                'Writing organized, expandable code continuously refined through sensible refactoring.',
        },
        {
            icon: Rocket,
            title: 'Performance',
            description:
                'Optimizing for speed to deliver snappy and intuitive user interactions.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description:
                'Partnering with teams to transform collectively-formed concepts into reality.',
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description:
                'Future-proofing by following current trends and best practices.',
        },
    ];

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`glass p-6 rounded-2xl animate-fade-in animation-delay-${(index + 1) * 100}`}
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

// Projects section
export const Examples = () => {
    const items = [
        {
            title: 'Cost Calculator',
            description:
                'Calculates the cost to manufacture an item of clothing. Vendor selects materials and tasks required to produce apparel item, then executes CTA to yield final tally. Vendor maintains site content via dashboard panels.',
            image: '/projects/project_01.png',
            tags: [
                'Sass',
                'React',
                'Router',
                'TanStack Query',
                'TypeScript',
                'Node.js',
                'Express',
                'MongoDB',
            ],
            link: '#',
            github: 'https://github.com/scosut/calculate-cost-frontend',
        },
        {
            title: 'Event Planner',
            description:
                'Generates printable materials needed for an annual group trip. Event coordinator enters a list of attendees, assigns seating graphically, then executes CTA to render place cards, table tents, and seating chart.',
            image: '/projects/project_02.png',
            tags: [
                'Sass',
                'React',
                'Router',
                'TanStack Query',
                'TypeScript',
                'Node.js',
                'Express',
                'MongoDB',
                'PdfLib',
            ],
            link: '#',
            github: 'https://github.com/scosut/event-planner-frontend',
        },
        {
            title: 'Website - Registered Agent',
            description:
                'Helps entrepreneurs form LLCs and corporations, acts as an official point of contact for legal mail, and provides digital tools like business phone numbers and website hosting.',
            image: '/projects/project_03.png',
            tags: [
                'Bootstrap',
                'Sass',
                'jQuery',
                'Vue',
                'Vuex',
                'WordPress',
                'PHP',
                'MySQL',
            ],
            link: 'https://www.californiaregisteredagents.net',
            github: '#',
        },
        {
            title: 'Website - Landlord',
            description:
                "Manages a landlord's rental properties. Prospective tenants can view listings, schedule showings, and complete the rental application online. Landlord can manage property content and view/export applicant submitted data from a password‑protected dashboard.",
            image: '/projects/project_04.png',
            tags: [
                'Bootstrap',
                'jQuery',
                'PHP',
                'MVC',
                'MySQL',
                'SMTP',
                'FPDM',
                'PHPExcel',
            ],
            link: 'https://www.handhrentalproperties.com',
            github: 'https://github.com/scosut/hh-rental-properties',
        },
        {
            title: 'Crypto Dashboard',
            description:
                'Integrates with the CoinGecko API to retrieve cryptocurrency data. Dashboard displays coins by name, symbol, logo, and price market cap. Search, filter, and sort provide additional capabilities for viewing data. Coin details are represented numerically and graphically.',
            image: '/projects/project_05.png',
            tags: ['React', 'Router', 'Chart.js', 'CoinGecko API'],
            link: 'https://scosut.github.io/crypto-dash',
            github: 'https://github.com/scosut/crypto-dash',
        },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, itemIndex) => (
                <div
                    key={itemIndex}
                    className={`group glass rounded-2xl overflow-hidden md:row-span-1 animate-fade-in animation-delay-${(itemIndex + 1) * 100}`}
                >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                        <img
                            src={`${import.meta.env.BASE_URL}${item.image}`}
                            alt={item.title}
                            className="w-full object-cover transition-transform duration-700 group-hover:opacity-75 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>

                        {/* Overlay links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href={item.link}
                                target="_blank"
                                onClick={
                                    item.link === '#'
                                        ? (e) => e.preventDefault()
                                        : null
                                }
                                className={`p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all ${item.link === '#' && 'hover:cursor-not-allowed'}`}
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a
                                href={item.github}
                                target="_blank"
                                onClick={
                                    item.github === '#'
                                        ? (e) => e.preventDefault()
                                        : null
                                }
                                className={`p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all ${item.github === '#' && 'hover:cursor-not-allowed'}`}
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-2 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary cursor-default transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Experience section
export const Experiences = () => {
    const items = [
        {
            period: '2021 – 2025',
            role: 'Frontend Developer',
            company: 'Corporate Tools',
            description: [
                'Contributed code and documentation to over 150 business formation websites using WordPress enhanced with custom plugins written in PHP and Vue.',
                'Supported the conversion of standalone forms to a form generator tool by programming features that enable end users to activate and customize forms on their site via an administrative dashboard.',
                'Coordinated the construction of a company directory application that consolidated organizational content from several disparate systems.',
            ],
            technologies: [
                'Bootstrap',
                'Sass',
                'jQuery',
                'Vue',
                'Vuex',
                'WordPress',
                'PHP',
                'MySQL',
            ],
            current: false,
        },
        {
            period: '2018 – 2021',
            role: 'Freelance Developer',
            company: 'Self-Employed',
            description: [
                'Upgraded former email-based contact and spreadsheet-based tracking methods to bespoke content management systems, automating 85 percent of workflow processes and eliminating 90 percent of data compiling tasks.',
            ],
            technologies: [
                'Bootstrap',
                'jQuery',
                'PHP',
                'MVC',
                'MySQL',
                'SMTP',
                'FPDM',
                'PHPExcel',
            ],
            current: false,
        },
        {
            period: '2009 – 2013',
            role: 'Business Systems Analyst II',
            company: 'Liberty Mutual',
            description: [
                'Crafted desktop application to monitor project resources, generate requirements, and estimate timelines, reducing administrative tasks by 50 percent.',
            ],
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
                'C#',
                'ASP.NET',
                'TSQL',
                'VBA',
            ],
            current: false,
        },
        {
            period: '2001 – 2009',
            role: 'Web Developer',
            company: 'Safeco',
            description: [
                'Spearheaded transition from mainframe request forms to web-based equivalents, improving the product with validation, data collection & storage, and personalized reporting options, which shortened overall request processing time by 75 percent.',
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'VBScript', 'ASP'],
            current: false,
        },
    ];

    return (
        <div className="space-y-12">
            {items.map((item, itemIndex) => (
                <div
                    key={itemIndex}
                    className={`relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-${(itemIndex + 1) * 100}ms`}
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                        {item.current && (
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                        )}
                    </div>

                    {/* Content */}
                    <div
                        className={`pl-8 md:pl-0 ${itemIndex % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}
                    >
                        <div
                            className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                        >
                            <span className="text-sm text-primary font-medium">
                                {item.period}
                            </span>
                            <h3 className="text-xl font-semibold mt-2">
                                {item.role}
                            </h3>
                            <p className="text-muted-foreground">
                                {item.company}
                            </p>
                            <ul className="text-sm text-muted-foreground mt-4">
                                {item.description.map((desc, descIndex) => (
                                    <li
                                        key={descIndex}
                                        className="flex gap-2 mb-2"
                                    >
                                        <span>
                                            <ChevronRight className="w-3 h-3 mt-[3px] text-primary" />
                                        </span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {item.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Testimonials section
export const Recommendations = [
    {
        quote: "Scott's efficiency is unmatched; he has a calm focused approach where he just zeroes in on a problem and eliminates it completely. Someone on our team once described him as a silent assassin of difficult problems because when he sets his sights on them, they just disappear. No one ever sees them again. It's like they never even existed.",
        author: 'Bridgett Byrd',
        role: 'Frontend Developer, Corporate Tools',
        avatar: '/testimonials/b_byrd.jpg',
    },
    {
        quote: "Scott is an amazing mentor to junior developers. He was extremely helpful in the onboarding of new hires and continued to successfully mentor them one-on-one post orientation. I cannot express enough appreciation for his assistance with issues I, myself, encountered. If I ever had any questions or complex tasks I needed help with, Scott's response was always informative, positive, and considerate.",
        author: 'Christine Coleman',
        role: 'Sr. Frontend Developer & Team Lead, Corporate Tools',
        avatar: '/testimonials/c_coleman.jpg',
    },
    {
        quote: "What makes Scott stand out isn't just his technical expertise but also his professionalism and collaboration. Scott has a calm, steady presence under pressure and approaches every challenge with both creativity and sound judgment. He brings immediate value, raises the bar for quality, and strengthens the people he works with. I give him my highest recommendation.",
        author: 'Naasir Bush',
        role: 'Frontend Development Manager, Corporate Tools',
        avatar: '/testimonials/n_bush.jpg',
    },
    {
        quote: "When Scott takes on a problem, he fully commits — researching every angle, reading the documentation front to back, and delivering solutions that are both precise and well-documented. He's the kind of engineer you trust with complex systems and tight deadlines because you know the work will be accurate, thoughtful, and rock solid. Any team would be lucky to have him.",
        author: 'Rocky Kev',
        role: 'Sr. Developer, Corporate Tools',
        avatar: '/testimonials/r_kev.jpg',
    },
];

// Contact Me section
export const ContactInfo = () => {
    const items = [
        {
            icon: Mail,
            label: 'Email',
            value: 'ssutton6609@gmail.com',
            href: 'mailto:ssutton6609@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '(253) 266-5769',
            href: 'tel:2532665769',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Spokane, WA',
            href: '#',
        },
    ];

    return (
        <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-xl hover:bg-surface transition-colors group"
                        onClick={
                            item.href === '#' ? (e) => e.preventDefault() : null
                        }
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <div className="text-xs md:text-sm text-muted-foreground">
                                {item.label}
                            </div>
                            <div className="text-xs md:text-sm font-medium">
                                {item.value}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

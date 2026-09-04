import { SizeClasses } from '@/data/data';

const Button = ({ className, size = 'md', children, ...props }) => {
    return (
        <button
            className={`${className} ${SizeClasses[size]} relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 leading-none`}
            {...props}
        >
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default Button;

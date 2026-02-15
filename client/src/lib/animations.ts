export const isMobile = typeof window !== 'undefined' ? (window.innerWidth < 768 || 'ontouchstart' in window) : false;

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: isMobile ? 10 : 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: isMobile ? 0.4 : 0.8,
            ease: [0.16, 1, 0.3, 1] as any
        }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: isMobile ? 0.05 : 0.1,
            delayChildren: isMobile ? 0.1 : 0.2
        }
    }
};

export const simpleFade = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: isMobile ? 0.3 : 0.6
        }
    }
};

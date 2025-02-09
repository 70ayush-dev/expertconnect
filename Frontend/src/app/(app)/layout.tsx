"use client";

import { ReactNode, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pageTransitionVariants = {
    initial: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    })
};

const ROUTES_ORDER = ['/', '/experts', '/dashboard', '/messages'];

const AppLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const [prevPath, setPrevPath] = useState(pathname);
    const currentIndex = ROUTES_ORDER.indexOf(pathname);
    const prevIndex = ROUTES_ORDER.indexOf(prevPath);
    
    useEffect(() => {
        setPrevPath(pathname);
    }, [pathname]);

    const direction = currentIndex === -1 || prevIndex === -1 
        ? 1 
        : currentIndex > prevIndex ? 1 : -1;


    return (
        <motion.div
            key={pathname}
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
        >
            {children}
        </motion.div>
    );
};

export default AppLayout;

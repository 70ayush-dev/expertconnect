"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SlideIn({ 
    children, 
    direction = "left",
    className = "",
    delay = 0
}: { 
    children: ReactNode;
    direction?: "left" | "right";
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 
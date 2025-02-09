"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export function ScrollReveal({ 
    children, 
    className = "",
    direction = "up",
    delay = 0
}: { 
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const offsetDirections = {
        up: [50, 0],
        down: [-50, 0],
        left: [50, 0],
        right: [-50, 0]
    };

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        offsetDirections[direction]
    );

    return (
        <motion.div
            ref={ref}
            style={{ 
                y: direction === "up" || direction === "down" ? y : 0,
                x: direction === "left" || direction === "right" ? y : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ApplicationLogo = (props) => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <Image
            src='/favicon-dark.png'
            alt="IT Expert"
            width={100}
            height={40}
            priority
            {...props}
        />
    ); // Avoids hydration mismatch

    const currentTheme = theme === "system" ? systemTheme : theme;
    const logoSrc = currentTheme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";

    return (
        <Image
            src={logoSrc}
            alt="IT Expert"
            width={100}
            height={40}
            priority
            {...props}
        />
    );
};

export default ApplicationLogo;

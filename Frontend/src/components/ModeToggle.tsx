"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-[40px] h-[40px]" />;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="relative overflow-hidden group h-9 w-9"
        >
            <Sun
                className={`
                    absolute transition-all duration-500 ease-in-out
                    ${currentTheme === "dark"
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"}
                    group-hover:rotate-45 group-hover:scale-110
                `}
            />
            <Moon
                className={`
                    absolute transition-all duration-500 ease-in-out
                    ${currentTheme === "dark"
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"}
                    group-hover:-rotate-45 group-hover:scale-110
                `}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

export default ModeToggle;
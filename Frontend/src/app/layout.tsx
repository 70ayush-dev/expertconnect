import { Nunito } from "next/font/google";
import type { Metadata } from 'next'
import "@/app/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import { ProgressBar } from "@/components/ProgressBar";
import { MotionConfig } from "framer-motion";

// Add Lenis for smooth scrolling
import { SmoothScroll } from "@/components/SmoothScroll";

const nunitoFont = Nunito({
    subsets: ["latin"],
    display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning className={nunitoFont.className}>
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body className="antialiased min-h-svh bg-background font-sans overflow-x-hidden">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <MotionConfig reducedMotion="user">
                        <SmoothScroll>
                            <ProgressBar className="custom-progress-bar fixed top-0 h-[2px] z-[100]">
                                <div className="relative flex min-h-svh flex-col bg-background">
                                    <div className='border-grid flex flex-1 flex-col'>
                                        <header className="border-grid sticky top-0 z-50 w-full">
                                            <Navigation />
                                        </header>
                                        <main className="container">
                                            {children}
                                        </main>
                                    </div>
                                </div>
                            </ProgressBar>
                        </SmoothScroll>
                    </MotionConfig>
                </ThemeProvider>
            </body>
        </html>
    );
};

export const metadata: Metadata = {
    title: 'Expert Platform',
    description: 'Connect with experts in various fields',
    icons: {
        icon: [
            {
                url: '/favicon-dark.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/favicon.png',
                media: '(prefers-color-scheme: light)',
            },
        ],
    },
}

export default RootLayout;

import { Nunito } from "next/font/google";
import "@/app/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";

const nunitoFont = Nunito({
    subsets: ["latin"],
    display: "swap",
});

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning className={nunitoFont.className}>
            <head>
                <link rel="icon" href="/favicon.png" />

            </head>
            <body className="antialiased min-h-svh bg-background font-sans">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="relative flex min-h-svh flex-col bg-background">
                        <div className='border-grid flex flex-1 flex-col'>
                            <header className="border-grid sticky top-0 z-50 w-full">
                                <Navigation />
                            </header>
                            <main>
                                {children}
                            </main>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export const metadata = {
    title: "It Expert",
};

export default RootLayout;

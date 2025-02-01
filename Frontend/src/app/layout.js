import { Nunito } from "next/font/google";
import "@/app/global.css";
import { ThemeProvider } from "@/components/theme-provider";

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
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export const metadata = {
    title: "It Expert",
};

export default RootLayout;

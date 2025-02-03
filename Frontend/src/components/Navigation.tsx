"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, MessageSquare, Users, Home, LayoutDashboard, Shield } from 'lucide-react';
import ApplicationLogo from '@/components/ApplicationLogo';
import ModeToggle from '@/components/ModeToggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/auth'


interface User {
    name: string;
    email: string;
    isAdmin?: boolean;
}

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const { user, logout } = useAuth();

    const navigation = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Experts', href: '/experts', icon: Users },
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Messages', href: '/messages', icon: MessageSquare },
    ];

    if (user?.isAdmin) {
        navigation.push({ name: 'Admin', href: '/admin', icon: Shield });
    }

    return (
        <nav className="sticky border-b top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <ApplicationLogo className="h-8 w-8" />
                        <span className="hidden font-bold sm:inline-block">
                            YourApp
                        </span>
                    </Link>
                    <div className="flex space-x-6 text-sm font-medium">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-2 transition-colors",
                                        pathname === item.href ? "text-primary hover:text-primary/80" : "text-foreground hover:text-foreground/80"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button
                            className="inline-flex items-center justify-center md:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ModeToggle />
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="relative h-9 w-9"
                                    >
                                        <User className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium">{user?.name}</p>
                                            <p className="text-xs text-muted-foreground">{user?.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={logout}>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href="/login">
                                <Button variant="outline">Log in</Button>
                            </Link>
                        )}

                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="container md:hidden">
                    <div className="flex flex-col space-y-3 pb-4">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-2 transition-colors hover:text-foreground/80",
                                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                                    )}
                                    onClick={() => setOpen(false)}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
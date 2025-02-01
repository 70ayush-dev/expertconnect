'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Navigation'
import Loading from '@/app/(app)/Loading'

import { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
    const { user }: { user: any } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="relative flex min-h-svh flex-col bg-background">
            <div className='border-grid flex flex-1 flex-col'>
                <header className="border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <Navigation user={user} />
                </header>
                
                <main>{children}</main>
            </div>
        </div>
    )
}

export default AppLayout

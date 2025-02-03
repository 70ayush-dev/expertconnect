// app/experts/components/PageHeader.tsx
import { Button } from '@/components/ui/button'

export default function PageHeader() {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Find an Expert
            </h1>
            <p className="mt-2 text-muted-foreground">
                Connect with professional experts in various fields
            </p>
        </div>
    )
}
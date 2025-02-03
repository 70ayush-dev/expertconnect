// app/experts/components/LoadingGrid.tsx
import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingGrid() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                    <Skeleton className="h-[200px] w-full rounded-lg" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ))}
        </div>
    )
}
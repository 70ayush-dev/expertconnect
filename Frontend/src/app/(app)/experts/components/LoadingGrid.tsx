// app/experts/components/LoadingGrid.tsx
import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingGrid() {
    return (
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="p-6 space-y-4 border rounded-xl">
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-12 rounded-full" /> {/* Avatar */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[100px]" /> {/* Name */}
                            <Skeleton className="h-3 w-[140px]" /> {/* Title */}
                        </div>
                    </div>
                    <Skeleton className="h-12 w-full" /> {/* Description */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4" /> {/* Clock icon */}
                            <Skeleton className="h-3 w-[60px]" /> {/* Years */}
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4" /> {/* Dollar icon */}
                            <Skeleton className="h-3 w-[80px]" /> {/* Rate */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
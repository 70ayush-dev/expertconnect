import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

function ExpertDetailLoading() {
    return (
        <div className="relative w-full bg-background p-6 md:p-8">
            <div className="mx-auto max-w-4xl">
                <Link 
                    href="/experts" 
                    className="mb-6 inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Experts
                </Link>

                <Card className="overflow-hidden">
                    <CardHeader className="space-y-6">
                        <div className="flex items-start gap-6">
                            <Skeleton className="h-24 w-24 rounded-full" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-8 w-48" />
                                <Skeleton className="h-6 w-32" />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <Skeleton className="h-6 w-36" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Skeleton className="h-7 w-24 mb-4" />
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-[90%]" />
                                <Skeleton className="h-4 w-[95%]" />
                                <Skeleton className="h-4 w-[85%]" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <Skeleton className="h-[200px] w-full rounded-lg" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 

export default ExpertDetailLoading;
"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios from "@/lib/axios"
import ExpertCard from "./ExpertCard"
import LoadingGrid from "./LoadingGrid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal, X } from "lucide-react"

interface Expert {
    id: number
    expertise: string
    profile_picture: string
    bio: string
    experience_years: number
    hourly_rate: string
    user: {
        name: string
        email: string
    }
}

export default function ExpertGrid({ initialExperts }: { initialExperts: Expert[] }) {
    const [experts, setExperts] = useState<Expert[]>(initialExperts)
    const [loading, setLoading] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    const searchParams = useSearchParams()

    useEffect(() => {
        async function fetchExperts() {
            setLoading(true)
            try {
                const params = Object.fromEntries(searchParams.entries())
                const { data } = await axios.get("/experts", { params })
                setExperts(data)
            } catch (error) {
                console.error("Error fetching experts:", error)
                setExperts([])
            } finally {
                setLoading(false)
            }
        }

        // Only fetch if there are search params
        if (searchParams.toString()) {
            fetchExperts()
        }
    }, [searchParams])

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="hero-section relative h-48 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -mx-6  px-6 pt-6">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="relative max-w-2xl animate-fade-in">
                    <h1 className="text-4xl font-bold mb-4">Find Your Expert</h1>
                    <p className="text-lg text-muted-foreground">
                        Connect with industry-leading professionals ready to help you succeed.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Search and Filters */}
                <div className="sticky top-[56px] bg-background/80 backdrop-blur-sm z-10 -mx-6 px-6 py-4 border-b">
                    <div className="flex gap-4 items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Search experts..." 
                                className="pl-10"
                            />
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2"
                        >
                            <SlidersHorizontal className="h-4 w-4" />
                            Filters
                            {showFilters && <X className="h-4 w-4" />}
                        </Button>
                    </div>

                    {/* Expandable Filters */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            showFilters ? 'h-auto opacity-100' : 'h-0 opacity-0'
                        }`}
                    >
                        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Expertise</label>
                                {/* Add filter components */}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Experience</label>
                                {/* Add filter components */}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Rate Range</label>
                                {/* Add filter components */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count & Sort */}
                <div className="flex justify-between items-center my-6">
                    <p className="text-muted-foreground">
                        Showing <span className="font-medium text-foreground">{experts.length}</span> experts
                    </p>
                    <select className="bg-transparent border rounded-md px-2 py-1">
                        <option>Most Relevant</option>
                        <option>Highest Rated</option>
                        <option>Lowest Rate</option>
                        <option>Most Experience</option>
                    </select>
                </div>

                {loading ? (
                    <LoadingGrid />
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {experts.map((expert, index) => (
                            <ExpertCard 
                                key={expert.id} 
                                expert={expert} 
                                index={index}
                            />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {experts.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <p className="text-lg text-muted-foreground">No experts found matching your criteria.</p>
                        <Button variant="link" onClick={() => setExperts(initialExperts)}>
                            Clear all filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
import { Suspense } from 'react'
import LoadingGrid from './components/LoadingGrid'
import ExpertGrid from './components/ExpertGrid'
import { unstable_cache } from 'next/cache';
import axios from "@/lib/axios"


async function fetchExperts() {
    try {
        const { data } = await axios.get("/experts")
        return data
    } catch (error) {
        console.error("Error fetching experts:", error)
        return []
    }
}

const getCachedExperts = unstable_cache(
    async () => fetchExperts(),
    ['experts'],
    {
        revalidate: 60, // Cache for 60 seconds
        tags: ['experts']
    }
);



export default async function ExpertsPage() {
    const experts = await getCachedExperts();

    return (
        <Suspense fallback={<LoadingGrid />}>
            <div className="">
                <ExpertGrid initialExperts={experts} />
            </div>
        </Suspense>
    )
}

export const revalidate = 60 // revalidate page every 60 seconds

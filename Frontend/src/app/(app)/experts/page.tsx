
import { Suspense } from 'react'
import LoadingGrid from './components/LoadingGrid'
import ExpertGrid from './components/ExpertGrid'
import PageHeader from './components/PageHeader'
import SearchFilters from './components/SearchFilters'

import axios from '@/lib/axios'

async function getExperts() {
    const { data } = await axios.get('/experts')
    return data
}

export default async function ExpertsPage() {
    const experts = await getExperts()

    return (
        <div className="relative min-h-screen w-full bg-background p-6 md:p-8">
            <PageHeader />
            <div className="mx-auto max-w-7xl">
                <Suspense fallback={<LoadingGrid />}>
                    <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
                        <SearchFilters />
                        <ExpertGrid experts={experts} />
                    </div>
                </Suspense>
            </div>
        </div>
    )
}
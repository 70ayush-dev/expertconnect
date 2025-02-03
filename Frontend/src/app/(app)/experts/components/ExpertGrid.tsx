
import ExpertCard from './ExpertCard'

interface Expert {
    id: number;
    expertise: string;
    profile_picture: string;
    bio: string;
    experience_years: number;
    hourly_rate: string;
    created_at: string;
    updated_at: string;
    user: {
        name: string;
        email: string;
        email_verified_at: string;
        role: string;
        created_at: string;
        updated_at: string;
    }
}

export default function ExpertGrid({ experts }: { experts: Expert[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
            ))}
        </div>
    )
}
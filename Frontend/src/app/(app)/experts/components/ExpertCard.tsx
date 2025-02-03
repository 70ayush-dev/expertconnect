import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

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


export default function ExpertCard({ expert }: { expert: Expert }) {
    const fallbackImage = '/favicon-dark.png'

    return (
        <Card className="transition-all hover:shadow-lg dark:bg-card">
            <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                    <Avatar className="h-16 w-16">
                        <AvatarImage
                            src={expert.profile_picture}
                            alt={expert.user.name}
                        />
                        <AvatarFallback>{expert.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-foreground">{expert.user.name}</h3>
                    <p className="text-sm text-muted-foreground">{expert.expertise}</p>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{expert.bio}</p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{expert.experience_years} years</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">${expert.hourly_rate}/hr</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, DollarSign, ArrowLeft, Star, MessageSquare, Calendar, Award } from "lucide-react"
import axios from "@/lib/axios"
import { unstable_cache } from 'next/cache'
import { ProgressBarLink } from "@/components/ProgressBar"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
    // Added fields (mock data for now)
    rating: number
    reviews_count: number
    availability: string[]
    skills: string[]
    certifications: string[]
}

async function fetchExpert(id: string): Promise<Expert> {
    try {
        const response = await axios.get(`/experts/${id}`)
        return response.data
    } catch (error) {
        notFound()
    }
}

const getExpert = unstable_cache(
    async (id: string) => fetchExpert(id),
    ['expert'],
    {
        revalidate: 60, // Cache for 60 seconds
        tags: ['expert']
    }
)

interface PageProps {
    params: {
        id: string
    }
}

export default async function ExpertDetailPage({ params }: PageProps) {
    return (
        <ExpertDetail params={params} />
    )
}

async function ExpertDetail({ params }: PageProps) {
    const { id } = await params
    const expert = await getExpert(id)

    return (
        <div className="relative min-h-screen w-full bg-background">
            {/* Hero Section */}
            <div className="relative h-64 bg-gradient-to-r from-primary/20 to-primary/5">
                <div className="absolute inset-0 bg-grid-white/10" />
            </div>

            <div className="mx-auto max-w-5xl px-6 -mt-24">
                <SlideIn>
                    <ProgressBarLink 
                        href="/experts" 
                        className="mb-6 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Experts
                    </ProgressBarLink>
                </SlideIn>

                {/* Profile Section */}
                <div className="bg-card relative rounded-xl p-8 shadow-lg border border-accent/10 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row gap-8">
                        <FadeIn className="flex-shrink-0">
                            <Avatar className="h-32 w-32 border-4 border-background">
                                <AvatarImage src={expert.profile_picture} alt={expert.user.name} />
                                <AvatarFallback>{expert.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </FadeIn>

                        <div className="flex-grow">
                            <FadeIn delay={0.1}>
                                <div className="flex items-center gap-4 mb-2">
                                    <h1 className="text-3xl font-bold">{expert.user.name}</h1>
                                    <Badge variant="secondary" className="h-6">
                                        <Star className="h-3 w-3 mr-1 text-primary" />
                                        4.9 (120 reviews)
                                    </Badge>
                                </div>
                                <p className="text-xl text-muted-foreground mb-6">{expert.expertise}</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <span>{expert.experience_years} years experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="h-5 w-5 text-primary" />
                                        <span>${expert.hourly_rate}/hr</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                        <span>Usually responds in 2 hours</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.2} className="flex-shrink-0">
                            <Button size="lg" className="w-full md:w-auto">
                                Book Consultation
                            </Button>
                        </FadeIn>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                    {/* Main Content */}
                    <div className="space-y-8">
                        <FadeIn delay={0.3}>
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">About</h2>
                                <p className="text-muted-foreground whitespace-pre-wrap">{expert.bio}</p>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "TypeScript", "UI/UX", "Node.js"].map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                                <div className="space-y-4">
                                    {["AWS Certified Solutions Architect", "Google Cloud Professional"].map((cert) => (
                                        <div key={cert} className="flex items-center gap-3">
                                            <Award className="h-5 w-5 text-primary" />
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <FadeIn delay={0.4}>
                            <div className="bg-card rounded-lg p-6 border border-accent/10">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    Availability
                                </h3>
                                <div className="space-y-2">
                                    {["Mon - Fri: 9 AM - 5 PM", "Sat: 10 AM - 2 PM"].map((time) => (
                                        <p key={time} className="text-muted-foreground">{time}</p>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="bg-card rounded-lg p-6 border border-accent/10">
                                <h3 className="text-lg font-semibold mb-4">Languages</h3>
                                <div className="space-y-2">
                                    {["English (Native)", "Spanish (Fluent)"].map((lang) => (
                                        <p key={lang} className="text-muted-foreground">{lang}</p>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const revalidate = 60 // revalidate page every 60 seconds

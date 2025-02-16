"use client"

import React, { useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, DollarSign, Star, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ProgressBarLink } from "@/components/ProgressBar";

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

interface ExpertCardProps {
    expert: Expert;
    index: number;
}

const ExpertCard = ({ expert, index }: ExpertCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | undefined>();

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            if (cardRef.current) {
                cardRef.current.style.setProperty('--mouse-x', `${x}px`);
                cardRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    }, []);

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleMouseMove]);

    return (
        <div 
            ref={cardRef}
            className="expert-card scroll-animate"
            style={{ 
                animationDelay: `${index * 100}ms`,
                viewTransitionName: `expert-card-${expert.id}`
            }}
        >
            <ProgressBarLink href={`/experts/${expert.id}`}>
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-none rounded-lg overflow-hidden shadow-none">
                    <CardHeader className="space-y-4 relative">
                        <div className="flex items-start justify-between">
                            <Avatar className="h-16 w-16 border-2 border-background">
                                <AvatarImage src={expert.profile_picture} alt={expert.user.name} />
                                <AvatarFallback>{expert.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <Badge variant="secondary" className="h-6">
                                <Star className="h-3 w-3 mr-1 text-primary" />
                                4.9
                            </Badge>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {expert.user.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{expert.expertise}</p>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                        <p className="text-sm text-muted-foreground line-clamp-3">{expert.bio}</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="text-sm">{expert.experience_years} years</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-primary" />
                                <span className="text-sm">${expert.hourly_rate}/hr</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageSquare className="h-4 w-4 text-primary" />
                                <span className="text-sm">Quick replies</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </ProgressBarLink>
        </div>
    );
};

export default React.memo(ExpertCard);
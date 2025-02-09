"use client"

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, DollarSign, Star, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ProgressBarLink } from "@/components/ProgressBar";
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

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
    expert: Expert
}

const ExpertCard = ({ expert, index }: ExpertCardProps & { index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const background = useMotionTemplate`
        radial-gradient(
            400px circle at ${mouseX}px ${mouseY}px,
            hsl(var(--primary) / 0.04),
            transparent 40%
        )
    `;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="h-full"
            onMouseMove={handleMouseMove}
        >
            <ProgressBarLink href={`/experts/${expert.id}`} className="block h-full">
                <Card className="relative h-full bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden group">
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
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
        </motion.div>
    );
};

export default ExpertCard;
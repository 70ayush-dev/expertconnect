"use client"

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SearchFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Function to update search params
    const updateSearchParams = useCallback((key: string, value: string | number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, String(value));
        } else {
            params.delete(key);
        }
        router.push(`?${params.toString()}`);
    }, [router, searchParams]);

    return (
        <Card className="p-4">
            <CardContent className="space-y-4">
                {/* Title */}
                <h3 className="text-lg font-semibold">Search Experts</h3>

                {/* Experience Level */}
                <div>
                    <Label>Experience Level</Label>
                    <Select
                        defaultValue={searchParams.get("experience") || ""}
                        onValueChange={(value) => updateSearchParams("experience", value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Experience Level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Hourly Rate Range */}
                <div>
                    <Label>Hourly Rate Range</Label>
                    <Slider
                        defaultValue={[Number(searchParams.get("hourly_min")) || 0, Number(searchParams.get("hourly_max")) || 200]}
                        min={0}
                        max={200}
                        step={5}
                        onValueChange={([min, max]) => {
                            updateSearchParams("hourly_min", min);
                            updateSearchParams("hourly_max", max);
                        }}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${searchParams.get("hourly_min") || 0}</span>
                        <span>${searchParams.get("hourly_max") || 200}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

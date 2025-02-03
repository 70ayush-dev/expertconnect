"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      "aria-disabled:opacity-50 aria-disabled:pointer-events-none",
      className
    )}
    {...props}
  >
    {/* Track */}
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>

    {/* First Thumb */}
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full border border-primary/50 bg-background shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:pointer-events-none"
    />

    {/* Second Thumb */}
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full border border-primary/50 bg-background shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:pointer-events-none"
    />
  </SliderPrimitive.Root>
));

Slider.displayName = "Slider";

export { Slider };

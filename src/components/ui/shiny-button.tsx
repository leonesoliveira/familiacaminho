"use client";

import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

export interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-bold text-primary-foreground",
          "bg-primary",
          "transition-all duration-300",
          "before:absolute before:inset-0 before:h-full before:w-full before:rounded-md before:bg-accent/50 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          "after:absolute after:inset-0 after:h-full after:w-full after:rounded-md after:opacity-0 after:shadow-[0_0_10px_2px_hsl(var(--accent)),0_0_20px_4px_hsl(var(--accent)),0_0_40px_8px_hsl(var(--accent))] after:transition-opacity after:duration-500 hover:after:opacity-50",
          "active:scale-95",
          className,
        )}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export { ShinyButton };

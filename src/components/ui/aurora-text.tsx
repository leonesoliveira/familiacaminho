import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  color?: string;
}

export const AuroraText = ({
  children,
  className,
  color,
  ...props
}: AuroraTextProps) => {
  return (
    <span
      className={cn(
        "relative inline-block bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

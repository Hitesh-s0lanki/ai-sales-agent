import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PurpleIcon = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black border-0 rounded-md",
        className
      )}>
      {children}
    </div>
  );
};

export default PurpleIcon;

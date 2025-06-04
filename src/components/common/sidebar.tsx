"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { sidebarData } from "@/lib/data";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-28 lg:w-20 h-screen sticky top-0 py-10 px-2 sm:px-4 border bg-[#111827] border-border flex flex-col items-center justify-start gap-10 ">
      <Sparkles className="size-8 text-white" strokeWidth={1.8} />
      <div className="w-full h-full justify-between items-center flex flex-col">
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
          {sidebarData.map((item) => (
            <TooltipProvider key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.link}
                    className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 hover:bg-white/10 ${
                      pathname.includes(item.link) ? "bg-white/10" : ""
                    }`}>
                    <item.icon
                      className={` size-6 text-white ${
                        pathname.includes(item.link) ? "" : "opacity-80"
                      }`}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white text-black border">
                  <span className="text-sm">{item.title}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;

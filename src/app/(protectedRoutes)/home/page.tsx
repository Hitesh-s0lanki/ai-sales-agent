"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Users, Webcam, Sparkles, ArrowRight, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Create AI Agent",
    description: "Set up an AI agent to automate your webinar interactions",
    icon: Sparkles,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/ai-agents",
  },
  {
    label: "Create a webinar",
    description: "Set up your webinar to start collecting leads",
    icon: Webcam,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/webinars",
  },
  {
    label: "Get Leads",
    description: "Get collected leads",
    icon: Users,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/lead",
  },

  {
    label: "Connect Stripe",
    description: "Connect your Stripe account to start accepting payments",
    icon: Settings,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/settings",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="py-10 w-full flex flex-col justify-center items-center">
      <div className="w-full mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Get maximum Conversion from <br /> your Webinars
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg text-center">
          Explore the power of AI
        </p>
      </div>
      <div className="w-full px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-start hover:shadow-md transition cursor-pointer">
            <div className="w-full flex justify-between items-center gap-x-4 px-2">
              <div className="flex gap-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div>
                  <div className=" text-lg font-semibold">{tool.label}</div>
                  <div className=" text-xs font-normal">{tool.description}</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

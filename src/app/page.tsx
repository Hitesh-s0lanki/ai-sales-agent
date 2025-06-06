"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      className={cn("absolute", className)}>
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className="relative">
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const Heading = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div className="min-h-screen flex justify-center items-center text-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-5xl font-bold">
          Welcome To <br />
          <span className="">Explore the power of AI</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Get maximum Conversion from
          <br /> your Webinars
        </h3>

        {!isLoaded && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}

        {isLoaded && isSignedIn && (
          <Button
            onClick={() => router.push("/home")}
            className="z-10 cursor-pointer relative ">
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}

        {isLoaded && !isSignedIn && (
          <SignInButton mode="redirect">
            <Button
              onClick={() => router.push("/home")}
              className="z-10 cursor-pointer relative ">
              Get free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Heading;

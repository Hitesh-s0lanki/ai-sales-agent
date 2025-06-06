"use client";

import { usePathname, useRouter } from "next/navigation";
import CreateWebinarButton from "../ReusableComponent/CreateWebinar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";
import { AiAgents, User } from "@prisma/client";
import Stripe from "stripe";
import PurpleIcon from "./purple-icon";

type Props = {
  assistants: AiAgents[] | [];
  user: User;
  stripeProducts: Stripe.Product[] | [];
};

const Header = ({ assistants, stripeProducts }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full p-4 sticky top-5 z-10 flex justify-between items-center flex-wrap gap-4 border shadow-sm border-border backdrop-blur-2xl rounded-full">
      {pathname?.includes("pipeline") ? (
        <Button
          className="bg-primary/10 border border-border rounded-xl"
          variant={"outline"}
          onClick={() => router.push("/webinars")}>
          <ArrowLeft /> Back to Webinars
        </Button>
      ) : (
        <div className="px-4 py-2 flex justify-center text-bold items-center rounded-xl bg-background border border-border text-primary capitalize">
          {pathname.split("/")[1]}
        </div>
      )}

      <div className="flex gap-4 items-center flex-wrap">
        <PurpleIcon>
          <Zap className="w-4 h-4 text-white" strokeWidth={2} />
        </PurpleIcon>
        <CreateWebinarButton
          assistants={assistants}
          stripeProducts={stripeProducts}
        />
      </div>
    </div>
  );
};

export default Header;

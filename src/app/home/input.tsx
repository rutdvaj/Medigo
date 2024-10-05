import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import ShinyButton from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSubscribeButtonDemo } from "./subbutton";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="email" placeholder="Email" className="font-sans" />
      <AnimatedSubscribeButtonDemo />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import pimg1 from "../../../assets/profileimg2.jpg";
import { AvatarDemo } from "./ava";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import AvatarCircles from "@/components/magicui/avatar-circles";
const AvatarUrl = ["../../../assets/profileimg.jpg"];

export async function BoxRevealDemo() {
  return (
    <div className="h-full  max-w-[400px] md:w-full items-center justify-center overflow-hidden mt-10 px-4 sm:px-6 lg:px-8">
      <BoxReveal boxColor={"#000080"} duration={0.95}>
        <div className="flex flex-col sm:flex-row sm:gap-5 items-start">
          {/* Example 1: Passing an image URL */}
          <AvatarDemo
            src="/assets/profileimg2.jpg"
            alt="John Doe"
            fallbackText="John"
          />

          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-main font-semibold text-[20px] sm:text-[24px] font-sans">
              Samantha Davids
            </h1>
          </div>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#000080"} duration={0.5}>
        <h2 className="mt-8 sm:mt-10 font-sans text-main text-[18px] sm:text-[20px] font-semibold text-center">
          Spinal Cord surgery
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#000080"} duration={0.5}>
        <div className="mt-4 sm:mt-[1.5rem]">
          <p className="mt-2 sm:mt-[.5rem] font-sans text-main text-[14px] sm:text-[16px] font-medium text-center">
            At 58, Medigo arranged my spinal cord surgery abroad. The care was
            outstanding, and the transparent payment process made everything
            easier. They even handled my insurance without hassle. I am grateful
            for the support and affordable pricing. I highly recommend them to
            anyone seeking quality care overseas.
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}

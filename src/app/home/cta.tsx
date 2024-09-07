import React from "react";
import Image from "next/image";
import svgimg from "../../../assets/timg2.svg";
import { ShimmerButtonDemo } from "./shimmy";
import { MarqueeDemo } from "./maq";
import BlurIn from "@/components/magicui/blur-in";

function Ctacomp() {
  return (
    <div>
      <section className="mq">
        <div className="flex w-full items-center justify-center py-16 mt-16 [mask-image:linear-gradient(to_top,transparent_10%,#000_30%)]">
          <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="z-10 size-24 rounded-[2rem] border bg-white/10 p-6 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={svgimg}
                  alt="Heart-shaped logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white ">
              <BlurIn
                word="Start your health journey Now."
                className="font-sans font-bold text-black text-[26px] "
              />
              <ShimmerButtonDemo />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black">
              <div className="marquee rotate-[35deg]">
                <MarqueeDemo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ctacomp;

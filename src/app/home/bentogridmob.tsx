import React from "react";
import { BentoDemo } from "./bgrid";
import BlurIn from "@/components/magicui/blur-in";
import { BorderBeam } from "@/components/magicui/border-beam";
import WordPullUp from "@/components/magicui/word-pull-up";

function Bgridcomp() {
  return (
    <div className=" bg-primary flex justify-center items-center h-screen mt-16">
      <div className="bg-secondary  w-[1400px] h-[1024px] flex flex-col items-center">
        <div className="flex flex-col items-center mt-10 gap-3">
          <WordPullUp
            words="Your Medical Journey, Perfectly Organised."
            className="text-[42px] text-main font-sans font-bold text-center"
          />
          <WordPullUp
            words="We handle every detail for you."
            className="text-[20px] text-main text-center font-semibold font-sans"
          />
        </div>
        <div className="bg-white w-[1340px] h-[792px] rounded-3xl flex justify-center items-center mt-16">
          <BentoDemo />
        </div>
      </div>
    </div>
  );
}

export default Bgridcomp;

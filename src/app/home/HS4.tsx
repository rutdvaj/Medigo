import React from "react";
import BlurIn from "@/components/magicui/blur-in";
import { MarqueeDemo } from "./maq";
import WordPullUp from "@/components/magicui/word-pull-up";
import { CompareDemo } from "./compare";
import BoxReveal from "@/components/magicui/box-reveal";
import { BoxRevealDemo } from "./mbox";
import { MarqueeDemoVertical } from "./maqmob";

function HS4comp() {
  return (
    <div>
      <section className="bg-primary flex justify-center items-center h-screen  md:mt-48 flex-col">
        <div className="bg-secondary rounded-3xl w-[1400px] h-[1800px] mb:h-[1324px] flex flex-col items-center">
          <div className="flex flex-col items-center mt-10 gap-3 max-w-[350px] md:max-w-full lg:max-w-full xl:max-w-full">
            <WordPullUp
              words="What our clients say about us ?"
              className="text-[36px] md:text-[42px] text-main text-center font-bold font-sans"
            />
            <WordPullUp
              words="Stories of restored health and renewed hope."
              className="text-[20px] text-main text-center font-semibold font-sans"
            />
          </div>
          <div className="bg-white max-w-[1000px] h-[400px] rounded-3xl flex justify-center items-center mt-16">
            <div className=" hidden md:flex">
              <MarqueeDemo />
            </div>
            <div className=" flex md:hidden mt-10">
              <MarqueeDemoVertical />
            </div>
          </div>
          <div className="mt-10 py-10 p-8 flex flex-col md:flex-row gap-32 justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-[370px] md:w-full lg:w-full xl:w-full">
                <WordPullUp
                  words="Our results based approach."
                  className="text-main text-[36px] md:text-[42px] font-sans text-center font-bold"
                />
                <WordPullUp
                  words="Real Patients, Real Results."
                  className="text-main text-[20px] font-sans text-center font-medium"
                />
              </div>
              <div>
                <BoxRevealDemo />
              </div>
            </div>
            <CompareDemo />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HS4comp;

"use client";
import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import imgsrc from "../../../public/assets/oldimg2.jpeg";
import { AvatarDemo } from "./ava";
import NumberTicker from "@/components/magicui/number-ticker";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BouncingBall from "./bball";
import FallingArrow from "./fallingarr";
import Marquee from "@/components/magicui/marquee";
import { MarqueeDemo } from "./maq";
import SocialProofComp from "./spcomp";
// import BouncingArrow from "./farr";
function HS5Comp() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-primary flex justify-center items-center h-screen ">
        <div className="bg-main w-[1400px] h-[1600px] justify-center items-center rounded-3xl">
          <div className="mt-20">
            <h1 className="text-white justify-items-center font-semibold text-center text-[52px] font-sans">
              Why We're Better
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-16">
            <div className="b-1 flex flex-row justify-between items-center gap-5">
              <div className="w-[1200px] h-[850px] px-5 py-5  bg-white rounded-3xl flex flex-col group cursor-pointer">
                <h1 className="text-center text-main font-sans text-[36px] font-semibold">
                  It's simple, we are affordable.
                </h1>
                <div className="flex flex-row overflow-hidden">
                  <div className="4-b  relative z-[1] transform translate-x-[125px] translate-y-[5px] scale-[0.8] rotate-[-3deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out group-hover:z-[5] group-hover:translate-x-[-20px] group-hover:scale-[1] group-hover:rotate-0 dark:border-neutral-800 dark:bg-neutral-900 shadow-xl">
                    <div className="flex justify-center items-center">
                      <AvatarDemo
                        src="/assets/pimg4.jpg"
                        alt="John Doe"
                        fallbackText="John"
                      />
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start ">
                      Sasha
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Diagnostics cost half of what Id pay at home.
                    </p>
                  </div>
                  {/* First div - Move left on hover */}
                  <div className="1-b relative z-[2] transform translate-x-[35px] translate-y-[5px] scale-[0.8] rotate-[-3deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out group-hover:z-[5] group-hover:translate-x-[-10px] group-hover:scale-[1] group-hover:rotate-0 dark:border-neutral-800 dark:bg-neutral-900 shadow-xl">
                    <div className="flex justify-center items-center">
                      <AvatarDemo
                        src="/assets/oldimg3.jpeg"
                        alt="John Doe"
                        fallbackText="John"
                      />
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start ">
                      Joseph
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      My surgery was affordable without sacrificing quality.
                    </p>
                  </div>

                  {/* Second div - Stay in the middle */}
                  <div className="2-b z-[3] flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-900 group-hover:z-[5] shadow-xl">
                    <div className="flex">
                      <AvatarDemo
                        src="/assets/oldimg2.jpeg"
                        alt="John Doe"
                        fallbackText="John"
                      />
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start ">
                      Becky
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Travel and accommodations were all within my budget.
                    </p>
                  </div>

                  {/* Third div - Move right on hover */}
                  <div className="3-b relative z-[2] transform translate-x-[-35px] translate-y-[5px] scale-[0.8] rotate-[3deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out group-hover:z-[5] group-hover:translate-x-[10px] group-hover:scale-[1] group-hover:rotate-0   shadow-xl">
                    <div className="flex">
                      <AvatarDemo
                        src="/assets/profileimg3.png"
                        alt="John Doe"
                        fallbackText="John"
                      />
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start">
                      John
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Follow-up care was included, with no hidden costs.
                    </p>
                  </div>
                  <div className="5-b relative z-[1] transform translate-x-[-135px] translate-y-[5px] scale-[0.8] rotate-[3deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out group-hover:z-[5] group-hover:translate-x-[20px] group-hover:scale-[1] group-hover:rotate-0   shadow-xl">
                    <div className="flex">
                      <AvatarDemo
                        src="/assets/pimg5.jpg"
                        alt="John Doe"
                        fallbackText="John"
                      />
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start">
                      Jordan
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Post-surgery medications were incredibly affordable,
                      including generics.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row overflow-hidden mt-16 b-arr-2">
                  <div className="4-b  relative z-[5] transform translate-x-[-20px] translate-y-[5px]   shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out   scale-[1] group-hover:rotate-0 dark:border-neutral-800 dark:bg-neutral-900 shadow-xl">
                    <div className="flex justify-center items-center z-[1] relative">
                      <svg
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="40" fill="#C7D7FE" />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <BouncingBall />
                      </div>
                    </div>

                    <h1 className="font-sans text-[26px] text-main text-start ">
                      Sasha
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Diagnostics cost 50% lesser. Saving me 500$ for travel.
                    </p>
                  </div>
                  {/* First div - Move left on hover */}
                  <div className="1-b relative z-[5] transform translate-x-[-10px] translate-y-[5px] scale-[1] rotate-[0deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5  dark:border-neutral-800 dark:bg-neutral-900 shadow-xl">
                    <div className="flex justify-center items-center z-[1] relative">
                      <svg
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="40" fill="#C7D7FE" />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <BouncingBall />
                      </div>
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start ">
                      Joseph
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Surgery cost 40% less while maintaining high-quality
                      standards.
                    </p>
                  </div>

                  {/* Second div - Stay in the middle */}
                  <div className="2-b z-[3] flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5 transition-all duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-900 group-hover:z-[5] shadow-xl">
                    <div className="flex justify-center items-center z-[1] relative">
                      <svg
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="40" fill="#C7D7FE" />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <BouncingBall />
                      </div>
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start ">
                      Becky
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Attractive and pre planned travel packages saved me 350$.
                    </p>
                  </div>

                  {/* Third div - Move right on hover */}
                  <div className="3-b relative z-[5] transform translate-x-[10px] translate-y-[5px] scale-[1] rotate-[0deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5    shadow-xl">
                    <div className="flex justify-center items-center z-[1] relative">
                      <svg
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="40" fill="#C7D7FE" />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <BouncingBall />
                      </div>
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start">
                      John
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Follow-up care included, saving 20% of typical additional
                      costs.
                    </p>
                  </div>
                  <div className="5-b relative z-[5] transform translate-x-[20px] translate-y-[5px] scale-[1] rotate-[0deg] shadow-custom flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-neutral-400/20 bg-white p-5 px-2.5   shadow-xl">
                    <div className="flex justify-center items-center z-[1] relative">
                      <svg
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="40" fill="#C7D7FE" />
                      </svg>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <BouncingBall />
                      </div>
                    </div>
                    <h1 className="font-sans text-[26px] text-main text-start">
                      Jordan
                    </h1>
                    <p className="font-sans text-[20px] text-center text-main">
                      Post-surgery drugs were 60% cheaper and affordable after
                      care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  bg-white rounded-3xl mt-10 w-[1200px] h-[400px] mb-10">
              <div className="flex flex-col justify-items-center">
                <h1 className="font-sans font-semibold text-[36px] text-black text-center mt">
                  Our numbers speak for ourselves.
                </h1>
              </div>
              <div className="nums flex flex-row justify-around items-center mt-16">
                <div className="n-1 flex flex-col">
                  <span>
                    <NumberTicker
                      value={3400}
                      className="font-sans text-[22px] text-black font-bold"
                    />
                    +
                  </span>
                  <p className="font-sans text-[16px] text-black ">
                    Successful Treatments
                  </p>
                </div>
                <div className="n-2 flex flex-col">
                  <span>
                    <NumberTicker
                      value={1500}
                      className="font-sans text-[22px] text-black font-bold"
                    />
                    +
                  </span>
                  <p className="font-sans text-[16px] text-black ">
                    Certificates
                  </p>
                </div>
                <div className="n-3 flex flex-col">
                  <span>
                    <NumberTicker
                      value={84}
                      className="font-sans text-[22px] text-black font-bold"
                    />
                  </span>
                  <p className="font-sans text-[16px] text-black ">Hospitals</p>
                </div>
                <div className="n-4 flex flex-col">
                  <span>
                    <NumberTicker
                      value={7}
                      className="font-sans text-[22px] text-black font-bold"
                    />
                  </span>
                  <p className="font-sans text-[16px] text-black ">Nations</p>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-center font-sans text-black text-[24px] font-bold">
                  Trusted by leading players
                </h1>
                <div>
                  <SocialProofComp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HS5Comp;

import React from "react";
import { BentoDemo } from "./bgrid";
import BlurIn from "@/components/magicui/blur-in";

function Bgridcomp() {
  return (
    <div className="bg-primary flex justify-center items-center h-screen mt-28">
      <div className="bg-main rounded-3xl w-[1400px] h-[1024px] flex flex-col items-center">
        <div className="flex flex-col items-center mt-10 gap-3">
          <BlurIn
            word="Your Medical Journey, Perfectly Organised."
            className="text-[42px] text-white font-sans font-bold text-center"
          />
          <BlurIn
            word="We handle every detail for you."
            className="text-[20px] text-white text-center font-semibold font-sans"
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

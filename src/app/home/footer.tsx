import React from "react";
import Image from "next/image";
import logoimg from "../../../assets/Vectormlogo.png";
import ShinyButton from "@/components/magicui/shiny-button";
import { AnimatedModalDemo } from "./modalbutton";
function FooterComp() {
  return (
    <div>
      <div className="bg-secondary w-full h-full flex flex-col md:flex-row justify-between items-center rounded-xl mt-10 p-4 md:p-8">
        <div className="limg flex gap-3 items-center">
          <div className="items-center mt-1">
            <Image src={logoimg} alt="" />
          </div>
          <h1 className="text-main font-sans font-bold text-[24px] md:text-[26px]">
            MediGo
          </h1>
        </div>
        <div className="tags flex flex-col md:flex-row justify-around gap-4 md:gap-16 font-sans text-[16px] md:text-[20px] mt-4 md:mt-0">
          <p>Services</p>
          <p>Features</p>
          <p>FAQ</p>
        </div>
        <div className="cta text-center p-2 font-sans mt-4 md:mt-0">
          <AnimatedModalDemo />
        </div>
      </div>
    </div>
  );
}

export default FooterComp;

import React from "react";
import Image from "next/image";
import logo from "../../../assets/Vectormlogo.png";
import HamburgerMenu from "./hamburger";
import ShinyButton from "@/components/magicui/shiny-button";
import { ShinyButtonDemo } from "./shinybutton";
import BlurInDemo from "./blurtext";
import { AnimatedModalDemo } from "./modalbutton";
import { ThreeDCardDemo } from "./HSimg";
import Btextcomp from "./blurtext-2";
import { Tdcomp } from "./main3d";
import HS2comp from "./HS2";
import Beamcomp from "./mobbeam";
import Beamcomp2 from "./beam";
import Bgridcomp from "./bentogridmob";
import { MarqueeDemo } from "./maq";
import svgimg from "../../../assets/timg2.svg";
import BlurIn from "@/components/magicui/blur-in";
import { ShimmerButtonDemo } from "./shimmy";
import Ctacomp from "./cta";
import FooterComp from "./footer";
function HS1comp() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <section className="nav">
          <div className="navbar bg-secondary rounded-3xl w-[320px] h-[50px] md:w-[720px] lg:w-[1024px] xl:w-[1313px] md:h-[55px] lg:h-[60px] flex justify-between items-center relative mt-3">
            <div className="logo ml-3 mb-1 lg:ml-3 lg:mt-1 flex items-center cursor-pointer">
              <Image src={logo} alt="" />
            </div>

            {/* Links for Tablet (md) and Laptop (lg) */}
            <div className="links absolute left-1/2 transform -translate-x-1/2 hidden md:flex md:gap-8 lg:gap-10 xl:gap-12 md:items-center cursor-pointer">
              <h1 className="font-sans font-medium text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-main">
                Features
              </h1>
              <h1 className="font-sans font-medium text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-main">
                Steps
              </h1>
              <h1 className="font-sans font-medium text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-main">
                FAQ
              </h1>
            </div>

            {/* Button for Laptop and Desktop */}
            <div className="hidden xl:flex mr-4">
              <ShinyButtonDemo />
            </div>

            {/* Hamburger for Mobile and Tablet */}
            <div className="hamburger mr-4 mt-4 items-center md:hidden xl:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </section>
      </div>
      <section className="herosection flex flex-col  lg:flex-row lg:justify-between lg:mt-16">
        <div className="mt-56 lg:mt-60 lg:mr-20 ml:10  lg:w-[850px] flex flex-col  lg:justify-center lg:items-center ">
          <div className="hs-text  text-left  mr-5 justify-items-center ">
            <BlurInDemo />
          </div>
          <div className="mr-6 ml-6 mt-8 justify-items-center">
            <Btextcomp />
          </div>
          <div className="cta-2 py-20 ">
            <div className="">
              <AnimatedModalDemo />
            </div>
          </div>
        </div>
        <div className="main-img lg:hidden">
          <ThreeDCardDemo />
        </div>
        <div className="d-main-img  hidden lg:flex mt-12">
          <Tdcomp />
        </div>
      </section>
      <section className="flex bg-primary justify-center items-center">
        <div className="mt-24">
          <HS2comp />
        </div>
      </section>
      <section className="flex flex-col justify-items-center bg-secondary w-[420px] rounded-t-3xl mt-24">
        <div className="lg:hidden">
          <Beamcomp />
        </div>
      </section>
      <div className="beams hidden lg:flex lg:flex-col lg:items-center lg:justify-center mx-auto">
        <Beamcomp2 />
      </div>
      <div className="mt-26 hidden lg:block">
        <Bgridcomp />
      </div>
      <div>
        <Ctacomp />
      </div>
      <section className="footer">
        <FooterComp />
      </section>
    </div>
  );
}

export default HS1comp;

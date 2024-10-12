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
import { BorderBeam } from "@/components/magicui/border-beam";
import ShimmerButton from "@/components/magicui/shimmer-button";
import HS4comp from "./HS4";
import HS5Comp from "./HS5";
import BouncingBall from "./bball";
import FallingArrow from "./fallingarr";
import Newcmp from "./newcomp";
function HS1comp() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <section className="sticky top-0 z-50">
          <div className="navbar bg-secondary rounded-3xl w-[320px] h-[50px] md:w-[720px] lg:w-[1024px] xl:w-[1313px] md:h-[55px] lg:h-[60px] flex justify-between items-center mt-3">
            <div className="logo ml-3 mb-1 lg:ml-3 lg:mt-1 flex items-center cursor-pointer">
              <Image src={logo} alt="" />
            </div>

            {/* Links for Tablet (md) and Laptop (lg) */}
            <div className="links absolute left-1/2 transform -translate-x-1/2 hidden md:flex md:gap-8 lg:gap-10 xl:gap-12 md:items-center cursor-pointer">
              <h1 className="font-sans font-medium text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-main">
                Steps
              </h1>
              <h1 className="font-sans font-medium text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-main">
                Features
              </h1>
              <h1 className="font-sans font-medium text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-main">
                Testimonials
              </h1>
            </div>

            {/* Button for Laptop and Desktop */}
            <div className="hidden xl:flex mr-4 ">
              <div>
                <ShinyButton
                  text="Get Free Quote"
                  className="bg-main text-white font-medium text-[20px] font-sans"
                />
              </div>
            </div>

            {/* Hamburger for Mobile and Tablet */}
            <div className="hamburger mr-4 mt-4 items-center md:hidden xl:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </section>
      </div>
      <section className="herosection flex flex-col lg:flex-row lg:justify-between lg:mt-16 xl:mt-20 px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Text Section */}
        <div className="mt-36 md:mt-48 lg:mt-60 xl:mt-64 w-full h-full flex flex-col lg:justify-center lg:items-start xl:items-center">
          {/* Title */}
          <div className="hs-text text-center lg:text-left xl:text-center mr-3 lg:mr-0 xl:mr-0">
            <BlurIn
              word="Affordable healthcare,"
              className="text-[32px] md:text-[38px] lg:text-[42px] xl:text-[50px] font-bold font-serif text-main leading-tight"
            />
          </div>

          {/* Subtitle */}
          <div className="mt-8 ml-4 mr-4 lg:ml-0 xl:mr-0 flex justify-center lg:justify-start xl:justify-center">
            <BlurIn
              word="Affordable, expert care tailored to your needs, with easy travel and significant savings."
              className="
          text-center lg:text-center xl:text-center 
          font-sans text-main font-normal 
          text-[22px] md:text-[20px] lg:text-[26px] xl:text-[38px] 
          max-w-[350px] md:max-w-full lg:max-w-full xl:max-w-full
        "
            />
          </div>

          {/* CTA Section */}
          <div className="cta-2 mt-16 mb-10 lg:mt-24 xl:mt-28 flex justify-center lg:justify-start xl:justify-center gap-5">
            <AnimatedModalDemo />
            <ShinyButton
              text="Get a Demo"
              className="bg-main text-white font-medium text-[18px] md:text-[20px] font-sans py-2 px-6 rounded"
            />
          </div>
        </div>

        {/* Image Section for Large Tablets */}
        <div className="main-img lg:flex xl:hidden lg:mt-12 lg:justify-center items-center justify-center">
          <ThreeDCardDemo />
        </div>

        {/* Image Section for Desktops */}
        <div className="d-main-img hidden xl:flex xl:mt-0 xl:justify-center">
          <Tdcomp />
        </div>
      </section>

      <section className="flex bg-primary justify-center items-center">
        <div className="mt-24">
          <HS2comp />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-secondary w-full rounded-3xl mt-24">
        <div className="lg:hidden">
          <Beamcomp />
        </div>
      </section>
      <section className="lg:hidden flex">
        <HS4comp />
      </section>
      <div className="beams hidden lg:flex lg:flex-col lg:items-center lg:justify-items-center ">
        <Newcmp />
      </div>
      <section className="mt-96 ">
        <div className="hidden md:block">
          <HS5Comp />
        </div>
      </section>
      <div className="mt-80">
        <Ctacomp />
      </div>
      <section className="footer">
        <FooterComp />
      </section>
    </div>
  );
}

export default HS1comp;

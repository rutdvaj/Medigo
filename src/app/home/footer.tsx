import React from "react";
import Image from "next/image";
import logoimg from "../../../assets/Vectormlogo.png";
import ShinyButton from "@/components/magicui/shiny-button";
import { AnimatedModalDemo } from "./modalbutton";
import { InputWithButton } from "./input";
function FooterComp() {
  return (
    <div>
      <div className="mainfooter flex flex-col gap-8 items-center justify-around bg-secondary w-full h-full md:flex-row rounded-xl mt-10 p-4 md:p-8">
        <div className="f-1 flex flex-col justify-center items-center gap-1">
          <div className="logo-name flex flex-row gap-3">
            <div>
              <Image src={logoimg} alt="" />
            </div>
            <h1 className="text-main font-sans font-bold text-[24px] md:text-[26px] cursor-pointer">
              MediGo
            </h1>
          </div>
          <div className="punch-line">
            <h1 className="text-main font-sans font-semibold text-[16px] ">
              Care Beyond Borders.
            </h1>
          </div>
        </div>
        <div className="f-2 flex flex-row gap-16 ">
          <div className="links-1 flex flex-col justify-aroud items-center">
            <ul>
              <li className="ul1 text-main font-sans font-semibold text-[16px] cursor-pointer">
                About Us
              </li>
              <li className="ul2 text-main font-sans font-semibold text-[16px] mt-4 cursor-pointer">
                Services
              </li>
              <li className="ul3 text-main font-sans font-semibold text-[16px] mt-4 cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
          <div className="links-2 flex flex-col justify-items-center">
            <ul>
              <li className="ul4 text-main font-sans font-semibold text-[16px] cursor-pointer">
                Privacy Policy
              </li>
              <li className="ul5 text-main font-sans font-semibold text-[16px] mt-4 cursor-pointer">
                Contact
              </li>
              <li className="ul6 text-main font-sans font-semibold text-[16px] mt-4 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
        </div>
        <div className="f-3 flex flex-col justify-center items-center space-x-4 space-y-4">
          <div className="info-text">
            <h1 className="text-main text-[20px] font-semibold font-sans ">
              Contact Us
            </h1>
            <p className="text-main text-[16px] font-normal font-sans ">
              We have a great support team to help you
            </p>
          </div>
          <div className="info-input">
            <InputWithButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;

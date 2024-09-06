import React from "react";
import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";
import img1 from "../../../assets/Group 12icimg1.png";
import img2 from "../../../assets/Group 15icimg2.png";
import img3 from "../../../assets/Group 19icimg3.png";
import img4 from "../../../assets/Group 40bimg1.png";
import img5 from "../../../assets/Group 14bimg2.png";
import img6 from "../../../assets/Group 18bimg3.png";
function HS2comp() {
  return (
    <div>
      <section>
        <div className="m-texxt justify-center items-center">
          <h1 className="font-serif text-main text-[38px] font-bold text-center lg:text-[50px]">
            Why choose Us?
          </h1>
        </div>
        <div className="FAQ flex flex-col items-center gap-8 lg:flex lg:flex-row lg:gap-60 lg:mt-28">
          <div className="faq1  flex flex-col items-center text-center">
            <Image src={img1} alt="" className="lg:hidden" />
            <Image src={img4} alt="" className="lg:block hidden" />
            <div className="max-w-[291px]">
              <div className="subtext font-sans text-main text-[26px] font-semibold lg:text-[32px]">
                <BlurIn word="Global Reach" />
              </div>
              <div className="ptext font-sans text-main text-[20px] font-normal mt-3">
                <BlurIn word="Worldwide medical expertise at your fingertips." />
              </div>
            </div>
          </div>
          <div className="faq2 flex flex-col items-center text-center ">
            <Image src={img2} alt="" className="lg:hidden" />
            <Image src={img5} alt="" className="hidden lg:block" />
            <div className="max-w-[291px]">
              <div className="subtext font-sans text-main text-[26px] font-semibold lg:text-[32px]">
                <BlurIn word="Quality Care" />
              </div>
              <div className="ptext font-sans text-main text-[20px] font-normal mt-3">
                <BlurIn word="Quality care that meets international standards." />
              </div>
            </div>
          </div>
          <div className="faq3 flex flex-col items-center text-center">
            <Image src={img3} alt="" className="lg:hidden" />
            <Image src={img6} alt="" className="hidden lg:block" />
            <div className="max-w-[291px]">
              <div className="subtext font-sans text-main text-[26px] font-semibold lg:text-[32px]">
                <BlurIn word="Easy Payments" />
              </div>
              <div className="ptext font-sans text-main text-[20px] font-normal mt-3">
                <BlurIn word="Flexible payment plans and smooth insurance clearance." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HS2comp;

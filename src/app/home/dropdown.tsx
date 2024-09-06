import React from "react";
import { ShinyButtonDemo } from "./shinybutton";

export default function Dropdown() {
  return (
    <div>
      <div className="dropdown w-[220px] md:w-[90%] max-w-[350px] h-[230px] md:h-[280px] bg-secondary flex flex-col justify-between items-center rounded-2xl mx-auto">
        <div className="div1">
          <h1 className="font-sans text-[20px] md:text-[24px] font-medium text-main text-center">
            About us
          </h1>
        </div>
        <hr className="w-full border-main border-t-2" />
        <div className="div2">
          <h1 className="font-sans text-[20px] md:text-[24px] font-medium text-main text-center">
            Features
          </h1>
        </div>
        <hr className="w-full border-main border-t-2" />
        <div className="div3">
          <h1 className="font-sans text-[20px] md:text-[24px] font-medium text-main text-center">
            FAQ
          </h1>
        </div>
        <hr className="w-full border-main border-t-2" />
        <hr className="bg-main stroke-main" />
        <div className="div4 mb-4 items-center justify-center">
          <ShinyButtonDemo />
        </div>
      </div>
    </div>
  );
}

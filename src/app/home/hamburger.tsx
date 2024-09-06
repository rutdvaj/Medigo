"use client";
import { useState } from "react";
import { ShinyButtonDemo } from "./shinybutton";
import Dropdown from "./dropdown";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="relative w-[25px] h-[18px] cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`absolute w-full h-[3px] bg-main transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[3px]" : "top-0"
          }`}
        />
        <div
          className={`absolute w-full h-[3px] bg-main transition-transform duration-300 ${
            isOpen ? "-rotate-45 translate-y-[3px]" : "top-[7.5px]"
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute right-0 ">
          <Dropdown />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

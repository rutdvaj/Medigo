"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import mainimg from "../../../assets/Group 39hsimg.png";
export function Tdcomp() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-secondary relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-[750px] h-[829px] rounded-xl  border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image src={mainimg} alt="" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

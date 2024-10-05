"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import mainimg from "../../../assets/Group 7mainimg.png";
// import mainimg2 from "../../../assets/Group 7mainimg2.png";
import HDimg from "../../../assets/HDimg.png";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-secondary relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl  border  ">
        <CardItem translateZ="100" className="w-[370px] mt-4">
          <Image src={HDimg} alt="" className="object-contain" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

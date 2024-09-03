"use client";
import React from "react";
import { useRef } from "react";
import { AnimatedBeamMultipleOutputDemo } from "./abeammob";

function Beamcomp() {
  return (
    <div className="">
      <AnimatedBeamMultipleOutputDemo
        pathColor="gray"
        gradientStartColor="#000080"
        gradientStopColor="#000080"
        className="bg-secondary rounded-t-3xl"
      />
    </div>
  );
}

export default Beamcomp;

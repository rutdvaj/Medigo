import React from "react";
import { AnimatedBeamDemo } from "./abeam";
import Bgridcomp from "./bentogridmob";

function Beamcomp2() {
  return (
    <div>
      <AnimatedBeamDemo
        pathColor="gray"
        gradientStartColor="#000080"
        gradientStopColor="#000080"
        className="bg-secondary rounded-3xl"
      />
    </div>
  );
}

export default Beamcomp2;

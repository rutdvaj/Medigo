import React from "react";
import Bgridcomp from "./bentogridmob";
import Beamcomp from "./mobbeam";
import Beamcomp2 from "./beam";
import HS4comp from "./HS4";

function Newcmp() {
  return (
    <section className="bg-primary flex justify-items-center p-4">
      <div className="w-[1400px] h-[2924px] rounded-3xl  border-white border-2 bg-secondary">
        <div>
          <Beamcomp2 />
        </div>
        <div className="">
          <Bgridcomp />
        </div>
        <div>
          <HS4comp />
        </div>
      </div>
    </section>
  );
}

export default Newcmp;

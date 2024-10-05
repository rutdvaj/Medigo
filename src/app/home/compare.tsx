import React from "react";
import img3 from "../../../assets/compareimg1.png";
import img4 from "../../../assets/compareimg2.png";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="border-neutral-100  p-4 border-4 rounded-3xl dark:bg-neutral-900    px-4">
      <Compare
        firstImage={img3.src}
        secondImage={img4.src}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}

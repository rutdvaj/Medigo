import React from "react";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import img1 from "../../../../mapp/public/assets/airbnblogo.png";
import img2 from "../../../public/assets/aplogo.png";
import img3 from "../../../public/assets/qalogo.png";
import img4 from "../../../public/assets/fortislogo.png";
import img5 from "../../../public/assets/hyattlogo.png";
import img6 from "../../../public/assets/mayo-clinic-logo.png";
import img7 from "../../../public/assets/medantalogo.png";

function SocialProofComp() {
  const img = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
  ];

  return (
    <div className="relative w-full flex justify-center">
      <Marquee pauseOnHover className="max-w-[1000px] mx-auto font-sans">
        {img.map((imageObj, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 h-40 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl mx-4", // Centering content within the figure
              "bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <Image
              src={imageObj.img}
              alt={`Image ${idx + 1}`}
              className="max-w-full max-h-full object-contain rounded-xl" // Ensures images fit without overflow
            />
          </figure>
        ))}
      </Marquee>
    </div>
  );
}

export default SocialProofComp;

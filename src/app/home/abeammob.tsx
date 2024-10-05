"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import logopic from "../../../assets/Vectormlogo.png";
import img1 from "../../../assets/i1.png";
import img2 from "../../../assets/i2.png";
import img3 from "../../../assets/i3.png";
import img4 from "../../../assets/i4.png";
import img5 from "../../../assets/i7.png";
import img6 from "../../../assets/i5.png";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border  p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] bg-secondary",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
  pathColor,
  gradientStartColor,
  gradientStopColor,
}: {
  className?: string;
  pathColor?: string;
  gradientStartColor?: string;
  gradientStopColor?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-10 md:shadow-xl  flex-col mb-80 md:mb-64",
        className,
        pathColor,
        gradientStartColor,
        gradientStopColor
      )}
      ref={containerRef}
    >
      <div className="text justify-items-center text-[26px] font-sans text-main font-bold text-center">
        <h1 className="m-0 p-0"> Global care Network</h1>
      </div>
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            {/* <Icons.googleDrive /> */}
            <Image src={img1} alt="" />
          </Circle>
          <Circle ref={div2Ref}>
            {/* <Icons.googleDocs /> */}
            <Image src={img2} alt="" />
          </Circle>
          <Circle ref={div3Ref}>
            {/* <Icons.whatsapp /> */}
            <Image src={img3} alt="" />
          </Circle>
          <Circle ref={div4Ref}>
            {/* <Icons.messenger /> */}
            <Image src={img5} alt="" />
          </Circle>
          <Circle ref={div5Ref}>
            {/* <Icons.notion /> */}
            <Image src={img6} alt="" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            {/* <Icons.openai /> */}
            <Image src={logopic} alt="" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

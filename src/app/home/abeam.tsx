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
import logoimg from "../../../assets/Vectormlogo.png";
import BlurIn from "@/components/magicui/blur-in";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo({
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
        "relative flex flex-col h-[500px] w-[1400px] items-center justify-center overflow-hidden rounded-3xl border bg-background  md:shadow-xl",
        className,
        pathColor,
        gradientStartColor,
        gradientStopColor
      )}
      ref={containerRef}
    >
      <div className="absolute top-0 w-full text-center">
        <BlurIn
          word="Global Care Network"
          className="text text-[36px] font-sans text-main font-bold"
        />
      </div>
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="lg:mt-10">
            <Image src={img1} alt="" />
          </Circle>
          <Circle ref={div5Ref} className="lg:mt-10">
            <Image src={img2} alt="" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image src={img3} alt="" />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Image src={logoimg} alt="" />
          </Circle>
          <Circle ref={div6Ref}>
            <Image src={img4} alt="" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image src={img6} alt="" />
          </Circle>
          <Circle ref={div7Ref}>
            <Image src={img5} alt="" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
        pathColor={pathColor}
        gradientStartColor={gradientStartColor}
        gradientStopColor={gradientStopColor}
      />
    </div>
  );
}

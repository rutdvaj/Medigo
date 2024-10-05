import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import img from "../../../assets/profileimg2.jpg";
import img2 from "../../../assets/profileimg3.svg";
import React from "react";

// Define the types for the props

interface AvatarDemoProps {
  src: string;
  alt: string;
  fallbackText: string;
}

export function AvatarDemo({ src, alt, fallbackText }: AvatarDemoProps) {
  return (
    <Avatar className="w-20 h-20 rounded-full overflow-hidden">
      {/* Avatar container should be fixed size */}
      <AvatarImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover" // Ensures the image covers the container
      />
      <AvatarFallback className="bg-gray-200 text-gray-600 flex items-center justify-center w-full h-full">
        {fallbackText}
      </AvatarFallback>
    </Avatar>
  );
}

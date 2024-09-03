import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { AnimatedListDemo } from "./alist";
import { AnimatedBeamMultipleOutputDemo } from "./abeammob";
import { Calendar } from "@/components/ui/calendar";

const files = [
  {
    name: "Permits",
    body: "We handle all necessary permits digitally, ensuring you’re fully authorized and compliant for your medical journey.",
  },
  {
    name: "Insurance",
    body: "We manage your travel and medical insurance digitally, making sure you're covered and ready for any situation.",
  },
  {
    name: "Visa",
    body: "We manage your visa application from start to finish, ensuring it's processed smoothly and delivered digitally for your convenience.",
  },
  {
    name: "Passport",
    body: "No more worries about passport logistics. We handle everything digitally, ensuring it's updated and ready for your medical journey.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "No Paperwork",
    description: "Every legal detail managed at your fingertips",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 font-sans w-[300px] h-[350px]  ml-28",
    background: (
      <Marquee
        pauseOnHover
        className="absolute  [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] font-sans"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu  transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Updates",
    description: "Real time updates regarding everything.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 font-sans w-[549px] h-[291px] ml-60",
    background: (
      <AnimatedListDemo className="absolute   border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 font-sans w-[549px] h-[291px]" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Global Care",
    description:
      "Access quality affordable healthcare from our global networks. ",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 w-[650px] h-[321px] font-sans ml-20",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Schedule ",
    description: "Schedule your trip with ease.",
    className: "col-span-3 lg:col-span-1 font-sans w-[290px] h-[350px] mb-28",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0  origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_30%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

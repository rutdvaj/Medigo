import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import aimg1 from "../../../assets/aimg1.jpg";
import aimg2 from "../../../assets/aimg2.jpg";
import aimg3 from "../../../assets/aimg3.jpg";
import aimg4 from "../../../assets/aimg4.jpg";
import aimg5 from "../../../assets/aimg5.jpg";
import aimg6 from "../../../assets/aimg6.jpg";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Thanks to this service, I received world-class care and a vacation rolled into one!",
    img: aimg1,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "From consultation to recovery, the entire process was handled with professionalism and care.",
    img: aimg2,
  },
  {
    name: "John",
    username: "@john",
    body: "Simple, affordable, and effective.",
    img: aimg3,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Highly recommend for medical travel.",
    img: aimg4,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Saved money and got top treatment.",
    img: aimg5,
  },
  {
    name: "James",
    username: "@james",
    body: "Quick recovery in paradise.",
    img: aimg6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: any;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={name}
          src={img} // Now passing StaticImageData object directly
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-lg  bg-white mt-28 md:shadow-xl font-sans">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute  inset-y-0 left-0  bg-gradient-to-r "></div>
      <div className="pointer-events-none absolute    inset-y-0 right-0  bg-gradient-to-l "></div>
    </div>
  );
}

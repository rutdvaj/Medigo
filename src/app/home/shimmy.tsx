import ShimmerButton from "@/components/magicui/shimmer-button";

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex mt-2 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight bg-white text-black lg:text-lg font-sans ">
          Join Us
        </span>
      </ShimmerButton>
    </div>
  );
}

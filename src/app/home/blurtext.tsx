import BlurIn from "@/components/magicui/blur-in";

const BlurInDemo = () => {
  return (
    <div className="text-center">
      <BlurIn
        word="Affordable healthcare,"
        className="text-[32px] lg:text-[50px] font-bold font-serif text-main leading-tight"
      />
      <BlurIn
        word="Your way."
        className="text-[32px] lg:text-[56px] font-bold font-serif text-main leading-tight"
      />
    </div>
  );
};
export default BlurInDemo;

import HeroSection from "@/components/static/HeroSection";

export default function page() {
  return (
    <div className="min-h-full flex flex-col justify-center pt-36 md:pt-52 pb-10 lg:items-center gap-10 md:gap-20 overflow-y-auto">
      <div className="w-full flex items-center justify-center">
        <HeroSection />
      </div>
    </div>
  );
}

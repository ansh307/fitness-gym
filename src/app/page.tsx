import Hero from "@/components/Hero";
import FeaturedParallex from "@/components/FeaturedParallex";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-950 text-white -z-10">
      <Hero />

      <FeaturedParallex />

      <WhyUs />
    </section>
  );
}

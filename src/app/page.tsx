import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import WhyUs from "@/components/WhyUs";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Something went wrong");
  return (
    <section className="relative w-full min-h-screen bg-neutral-950 text-white">
      <Hero />

      <FeaturedSection />

      <WhyUs />
    </section>
  );
}

"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WhyUs() {
  return (
    <section className="py-24 px-6 md:px-16 bg-neutral-950 relative">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">
        <span className=" bg-gradient-to-r from-orange-400 to-orange-600  bg-clip-text text-transparent">
          Why Choose Us?
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl group">
          <Image
            src="/images/whyus.jpg"
            alt="Why Us"
            width={800}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors"></div>
          {/* Orange glow border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/40 transition" />
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border border-orange-500/20 rounded-xl bg-neutral-900/80 backdrop-blur-md hover:bg-neutral-800/80 transition-all shadow-lg"
              >
                <AccordionTrigger className="text-lg font-semibold px-4 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:bg-clip-text transition-all">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-4 pb-4 leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    value: "item-1",
    title: "⭐ Quality Training",
    content:
      "Our trainers are highly experienced and dedicated to helping you achieve your fitness goals with personalized guidance.",
  },
  {
    value: "item-2",
    title: "🏋️ Modern Equipment",
    content:
      "State-of-the-art facilities and equipment designed to maximize your training efficiency and comfort.",
  },
  {
    value: "item-3",
    title: "🔥 Variety of Programs",
    content:
      "From strength training to yoga, we provide diverse activities to keep your fitness journey exciting.",
  },
  {
    value: "item-4",
    title: "🤝 Community Support",
    content:
      "Be a part of a supportive community that motivates and inspires you every step of the way.",
  },
];

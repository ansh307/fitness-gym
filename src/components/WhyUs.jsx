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
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Why Choose Us?
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/images/whyus.jpg"
            alt="Why Us"
            width={800}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-white px-4">
                ⭐ Quality Training
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-4 pb-4">
                Our trainers are highly experienced and dedicated to helping you
                achieve your fitness goals with personalized guidance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-white px-4">
                🏋️ Modern Equipment
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-4 pb-4">
                State-of-the-art facilities and equipment designed to maximize
                your training efficiency and comfort.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-white px-4">
                🔥 Variety of Programs
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-4 pb-4">
                From strength training to yoga, we provide diverse activities to
                keep your fitness journey exciting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-white px-4">
                🤝 Community Support
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-4 pb-4">
                Be a part of a supportive community that motivates and inspires
                you every step of the way.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

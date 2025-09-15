"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

import { faqs } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="py-24 px-6 md:px-16 bg-neutral-950 relative">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">
        <span className=" bg-gradient-to-r from-orange-400 to-orange-600  bg-clip-text text-transparent">
          Why Choose Us?
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[550px] rounded-2xl overflow-hidden shadow-xl  group col-span-2">
          <Image
            src="/images/why-us.jpg"
            alt="Why Us"
            width={600}
            height={550}
            className="w-full h-full object-cover "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-colors"></div>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4 col-span-3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item) => {
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-none rounded-xl bg-neutral-900/80 backdrop-blur-md  transition-all "
                >
                  <AccordionTrigger className="flex items-center gap-3 text-lg font-semibold px-4 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:bg-clip-text transition-all">
                    <span className="flex items-center gap-4">
                      <Icon className="text-orange-400 text-xl" />
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pb-4 leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

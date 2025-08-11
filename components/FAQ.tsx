"use client";

import { faq } from "@/util/data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-12 lg:space-y-16 py-16 sm:py-20 lg:py-28">
      <div className="flex items-center w-full max-w-4xl">
        {/* Left gradient line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary" />

        <div className="rounded-full px-4 sm:px-6 lg:px-8 py-2 border border-secondary">
          <h1 className="text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-tight">
            <span className="hidden md:inline">
              FREQUENTLY ASKED QUESTIONS{" "}
            </span>
            (FAQS)
          </h1>
        </div>

        {/* Right gradient line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary" />
      </div>
      <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          {faq.map((item, index) => {
            if (index % 2 !== 0) return null; // Only show even indices (0, 2, 4...)
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className="border border-secondary rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => toggleItem(index)}
                >
                  <h2 className="text-primary font-bold pr-2 sm:pr-4 text-sm sm:text-base leading-tight">
                    {item.question}
                  </h2>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-3 sm:p-4 pt-0 border-t border-gray-100">
                    <p className="text-secondary leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          {faq.map((item, index) => {
            if (index % 2 === 0) return null; // Only show odd indices (1, 3, 5...)
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className="border border-secondary rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => toggleItem(index)}
                >
                  <h2 className="text-primary font-bold pr-2 sm:pr-4 text-sm sm:text-base leading-tight">
                    {item.question}
                  </h2>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-3 sm:p-4 pt-0 border-t border-gray-100">
                    <p className="text-secondary leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

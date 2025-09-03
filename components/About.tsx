"use client";

import { about } from "@/util/data";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="amenities" className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            {about.title}
          </h1>
          <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
            <p className="text-sm sm:text-base md:text-lg">{about.description}</p>
            <p className="text-sm sm:text-base md:text-lg">{about.mission}</p>
          </div>
          
          {/* Expandable content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">What We Offer:</h3>
              <div className="grid gap-4 sm:gap-6">
                {about.amenities.map((amenity, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-primary mb-2">{amenity.category}</h4>
                    <ul className="space-y-1">
                      {amenity.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-primary hover:bg-green-800 text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium cursor-pointer text-sm sm:text-base w-fit group"
          >
            {isExpanded ? 'Show Less' : 'Explore More'}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`} />
          </button>
        </div>
        
        {/* Right side - Image */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
            <Image
              src="/images/about-image.png"
              alt="About Ekaant"
              width={600}
              height={700}
              className="w-full h-full object-cover object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

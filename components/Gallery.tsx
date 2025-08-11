import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div id="gallery" className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-12 lg:space-y-16 py-16 sm:py-20 lg:py-28">
      <div className="flex items-center w-full max-w-xl">
        {/* Left gradient line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary" />

        <div className="rounded-full px-4 sm:px-6 lg:px-8 py-2 border border-secondary">
          <h1 className="text-primary font-bold text-lg sm:text-2xl lg:text-3xl">WHAT WE OFFER</h1>
        </div>

        {/* Right gradient line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary" />
      </div>

      {/* Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
          >
            <Image
              src={`/images/group-${index + 1}.png`}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="h-48 sm:h-52 lg:h-56 w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button className="bg-primary hover:bg-green-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 flex items-center gap-2 font-medium cursor-pointer text-sm sm:text-base">
        Explore More
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}

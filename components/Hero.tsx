import { hero } from "@/util/data";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen" id="home">
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="relative z-10 flex flex-col justify-end min-h-screen text-gray-100 pb-8 sm:pb-12 lg:pb-16">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {hero.heading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            {hero.subheading}
          </p>
        </div>
      </div>
    </div>
  );
}

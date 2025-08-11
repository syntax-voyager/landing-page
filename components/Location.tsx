import { HomeSVG } from "@/util/assets/home";
import { LocationSVG } from "@/util/assets/location";
import { reach } from "@/util/data";

export default function Location() {
  return (
    <div className="bg-[#D9D9D9] flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left side - Title and Visual */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A5D23] mb-6 sm:mb-8 lg:mb-10 text-center leading-tight px-4">
            {reach.title}
          </h1>
          <div className="flex items-center justify-center relative w-full max-w-md lg:max-w-none">
            <HomeSVG className="w-16 h-16 sm:w-20 sm:h-20 lg:size-3/12 transform -translate-y-1/2" />
            <LocationSVG className="w-24 h-24 sm:w-32 sm:h-32 lg:size-5/12" />
            <HomeSVG className="w-12 h-12 sm:w-16 sm:h-16 lg:size-20 transform -translate-x-1/2" />
          </div>
        </div>

        {/* Right side - Transportation Details */}
        <div className="flex-1 space-y-4 sm:space-y-6 w-full">
          {/* By Road */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#4A5D23] mb-3 sm:mb-4">By Road</h3>
            <ul className="space-y-2">
              {reach.byRoad.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[#7BA05B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-400 border-dashed" />

          {/* By Train */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#4A5D23] mb-3 sm:mb-4">By Train</h3>
            <ul className="space-y-2">
              {reach.byTrain.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[#7BA05B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-400 border-dashed" />

          {/* By Air */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#4A5D23] mb-3 sm:mb-4">By Air</h3>
            <ul className="space-y-2">
              {reach.byAir.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[#7BA05B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

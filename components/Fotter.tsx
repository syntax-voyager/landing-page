import { footerText } from "@/util/data";

export default function Footer() {
  return (
    <div id="contact" className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-8 lg:px-16 py-6 lg:py-10 bg-primary text-white gap-6 lg:gap-0">
      <div className="flex flex-col items-start w-full lg:max-w-md">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal leading-tight">
          {footerText.toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col gap-2 items-start lg:items-end">
        <div className="text-left lg:text-right">
          <span className="font-bold text-sm sm:text-base lg:text-lg">
            CALL/WHATSAPP: +91 9988776655
          </span>
        </div>
        <div className="text-left lg:text-right">
          <span className="font-bold text-sm sm:text-base lg:text-lg">EMAIL: EKANT@NEAVE.TECH</span>
        </div>
        <div className="text-left lg:text-right">
          <span className="font-bold text-sm sm:text-base lg:text-lg">INSTAGRAM: EKANT</span>
        </div>
        <div className="text-left lg:text-right">
          <span className="font-bold text-sm sm:text-base lg:text-lg">
            LOCATION: NEAR BOR TIGER RESERVE,
          </span>
        </div>
        <div className="text-left lg:text-right">
          <span className="font-bold text-sm sm:text-base lg:text-lg">WARDHA, MAHARASHTRA</span>
        </div>
      </div>
    </div>
  );
}

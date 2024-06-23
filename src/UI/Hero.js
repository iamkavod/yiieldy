import React from "react";
import { Google, Hubspot, LetsTalkAgriculture, Zoom } from "../Assets";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 px-2 lg:px-8 mx-auto max-w-2xl py-10 lg:py-20">
      <h2 className="text-blackShade lg:text-[25px] text-[15px] font-bold text-center">
        Trusted by world Best Companies and Agencies
      </h2>
      <div className="grid lg:grid-cols-4 gap-x-10 grid-cols-4 px-4">
        <img
          src={LetsTalkAgriculture}
          alt="Trusted"
          className="lg:h-20 w-auto h-8"
        />
        <img src={Zoom} alt="Trusted" className="lg:h-20 w-auto h-8" />
        <img src={Hubspot} alt="Trusted" className="lg:h-20 w-auto h-8" />
        <img src={Google} alt="Trusted" className="lg:h-20 w-auto h-8" />
      </div>
      <h2 className="text-blackShade lg:text-[40px] text-[20px] font-bold text-center">
        Reduce your poultry feed costs by 40% with the Yiieldy Fiidz App
      </h2>
      <p>
        Yiieldy Fiidz helps you reduce feed costs, improve feed efficiency, and
        enhance poultry performance.
      </p>
      <div className="flex items-center justify-center gap-x-6 overflow-hidden">
        <a
          href="#"
          className="bg-primaryColor w-40 py-4 my-auto lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-full text-center"
        >
          Learn More
        </a>
        <a
          href="#"
          className="rounded-full bg-primaryColorLight w-40 py-4 lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold border border-primaryColor text-primaryColor shadow-sm hover:bg-primaryColorLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorLight text-center"
        >
          Try for free
        </a>
      </div>
    </div>
  );
}

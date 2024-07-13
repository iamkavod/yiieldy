import React from "react";
import ProductHeader from "./FiidzApp/ProductHeader";
import { FAQS, Pricing } from "../Components";
import "../App.css";
import { Footer } from "../UI";
import { GetAppImg, YiieldyAiStaff } from "../Assets";
import "../fonts.css";

export default function PricingPage() {
  return (
    <main className="font-sp-pro">
      {/* HEADER */}
      <ProductHeader />

      {/* Pricing */}
      <div className="lg:py-28 py-32 relative" id="price-product">
        <div className="circleDivLeft">
          <div className="circleLeft"></div>
        </div>
        <div className="mb-10 flex flex-col gap-3">
          <h1 className="lg:text-6xl text-4xl font-bold text-center">
            Fiidz App options
          </h1>
          <div className="lg:px-48 sm:px-0 md:px-10 flex justify-center">
            <p className="text-center text-xl lg:w-[60%]">
              Pricing plans for businesses at every stage of growth. Try our
              risk-free for 14 days. No credit card required.
            </p>
          </div>
        </div>
        <Pricing />
        <div className="circleDivRight">
          <div className="circleRight"></div>
        </div>
      </div>

      {/* FAQS */}
      <FAQS />

      {/* Question */}
      <div className="px-4 mx-auto max-w-[1443px] md:px-5 lg:px-8 mb-20">
        <div className="mx-auto max-w-[1443px]">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-[1443px] mb-10 md:mx-auto sm:text-center md:mb-12">
              <h2 className="max-w-[1443px] mb-6 font-bold leading-none tracking-tight text-black lg:text-6xl text-4xl font-bold text-center md:mx-auto text-center">
                Still have a question?
              </h2>
              <p className="text-black md:text-lg text-center">
                Reach out to us for an enquiry not captured.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-16 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-primaryColor focus:shadow-outline focus:outline-none lg:w-96 w-80"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Get App */}
      <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-5 lg:px-8  lg:py-20">
        <div className="grid gap-10 lg:gap-32 lg:grid-cols-2">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-center w-full h-56 rounded shadow-lg md:h-80 lg:h-96"
              src={GetAppImg}
              alt="Yiieldy AI Staff"
            />
            <a
              href="/"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-black bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center gap-5 items-start">
            <h5 className="mb-4 lg:text-6xl text-4xl font-bold leading-none lg:text-start text-center w-full">
              Get Started With Fiidz App
            </h5>
            <p className="mb-6 text-black text-[15px] lg:text-2xl lg:text-start text-center">
              This video shows its capabilities and how essential <br /> it is to
              poultry farmers..
            </p>
            <div className="flex lg:justify-start lg:m-0 m-auto items-center gap-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
                className="text-sm font-bold leading-6 text-white bg-primaryColor px-10 py-4 rounded-full lg:w-40 hover:opacity-[.9]"
              >
                Try for Free
              </a>
              <a
                href="#"
                className="text-sm font-bold leading-6 bg-primaryColorLight border border-primaryColor text-primaryColor px-10 py-4 rounded-full lg:w-40 hover:opacity-[.9]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

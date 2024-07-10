import React, { useState } from "react";
import { Checkbtn } from "../Assets";
// import "../UI/Style.css";
import '../fonts.css';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <div className="font-sp-pro">
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[20rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 border border-primaryColor rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-primaryColor rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? "translate-x-0" : "translate-x-full"
                  }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-12 w-90 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual
                  ? "text-white bg-primaryColor"
                  : "text-primaryColorDark "
                }`}
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
            >
              Monthly
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-12 w-90 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual
                  ? "text-primaryColorDark"
                  : "text-white bg-primaryColor"
                }`}
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
            >
              Yearly{" "}
              <span
                className={isAnnual ? "text-primaryColorDark" : "text-white"}
              >
                -12%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid gap-6 max-w-[1443px] lg:grid-cols-3 w-full lg:px-30 px-2 max-w-[1443px] grid-cols-1">
          {/* Basic */}
          <div className="h-auto">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-primaryColorLightB border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-2">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="bg-primaryColor hover:bg-primaryColorDark w-40 px-2 py-3 rounded-[20px] mb-2">
                    <h1 className="text-xl text-center text-white">
                      Poultry Basic
                    </h1>
                  </div>
                  <p className="text-sm font-normal">
                    Specifically for poultry farmers with fewer <br /> than 200 birds
                  </p>
                </div>
                <div className="flex justify-between items-center py-2 lg:gap-0 gap-2">
                  <div className="inline-flex items-baseline">
                    <span className="text-primaryColor dark:black font-bold text-3xl">
                      N
                    </span>
                    <span className="text-primaryColor dark:black font-bold text-3xl">
                      {isAnnual ? "5,511" : "58,210.91"}
                    </span>
                    <span className="text-primaryColor font-medium">
                      {isAnnual ? "/Mo" : "/Yr"}
                    </span>
                  </div>
                  <div className="inline-flex items-baseline bg-primaryColorDark p-2 rounded-[20px]">
                    <span className="text-white dark:black font-bold text-xl">
                      $
                    </span>
                    <span className="text-white dark:black font-bold text-xl">
                      {isAnnual ? "3.59" : "37.92"}
                    </span>
                    <span className="text-white font-medium">
                      {isAnnual ? "/Mo" : "/Yr"}
                    </span>
                  </div>
                </div>

                {/* <div className="text-sm text-black mb-5">
                Either Livestock farmer or Crop Growers
                </div> */}
              </div>
              <div className="text-black dark:black font-medium mb-5">
                Per member, per Month
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>
                    One comprehensive platform to plan, track, and manage your
                    poultry business efficiently.
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Built-in animal growth and productivity intelligence for feed/bird performance</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Feed Calculator</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Limited support</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>99.9% platform availability</span>
                </li>
                {/* <li className="flex items-center">
                  <img src={Checkbtn} alt="check" className="lg:w-6 lg:h-6 w-3 h-3 mr-3" />
                  <span>Sensors and animal tags are not included.</span>
                </li> */}
                {/* <li className="flex items-center">
                  <img src={Checkbtn} alt="check" className="lg:w-6 lg:h-6 w-3 h-3 mr-3" />
                  <span>
                    Online and offline farm record keeping that is secure
                  </span>
                </li>
                <li className="flex items-center">
                  <img src={Checkbtn} alt="check" className="lg:w-6 lg:h-6 w-3 h-3 mr-3" />
                  <span>99.9% platform availability</span>
                </li> */}
              </ul>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring  bg-primaryColor focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
              >
                Try For Free
              </a>
            </div>
          </div>

          {/* Standard */}
          <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-primaryColor shadow-lg shadow-slate-950/5">
              <div className="mb-1">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="bg-primaryColor hover:bg-primaryColorDark w-40 px-2 py-3 rounded-[20px] mb-2">
                    <h1 className="text-xl text-center text-white">Standard</h1>
                  </div>
                  <p className="text-sm font-normal">
                    A complete productivity platform for <br /> management of birds
                  </p>
                </div>
                <div className="flex justify-between items-center py-2 lg:gap-0 gap-2">
                  <div className="inline-flex items-baseline ">
                    <span className="text-primaryColor dark:black font-bold text-3xl">
                      N
                    </span>
                    <span className="text-primaryColor dark:black font-bold text-3xl">
                      {isAnnual ? "8,427.68" : "89,004.98"}
                    </span>
                    <span className="text-primaryColor font-medium">
                      {isAnnual ? "/Mo" : "/Yr"}
                    </span>
                  </div>
                  <div className="inline-flex items-baseline bg-primaryColorDark p-2 rounded-[20px]">
                    <span className="text-white dark:black font-bold text-xl">
                      $
                    </span>
                    <span className="text-white dark:black font-bold text-xl">
                      {isAnnual ? "5.49" : "37.92"}
                    </span>
                    <span className="text-white font-medium">
                      {isAnnual ? "/Mo" : "/Yr"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-black dark:black font-medium mb-5">
                Per member, per Month
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Inventory tracking and management.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>
                    Built-in animal growth and productivity intelligence for
                    feed/bird performance
                  </span>
                </li>
                {/* <li className="flex items-center">
                  <img src={Checkbtn} alt="check" className="lg:w-6 lg:h-6 w-3 h-3 mr-3" />
                  <span>Payroll and contact information.</span>
                </li> */}
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>AI assistant (knowledgeable Staff).</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Veterinary and contact information.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Farm accounting and financial management.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Feed Calculator</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Dedicated support.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>99.9% platform availability.</span>
                </li>
              </ul>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring bg-primaryColor focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
              >
                Try For Free
              </a>
            </div>
          </div>

          {/* Premium */}
          <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-primaryColorLightB border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-1">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="bg-primaryColor hover:bg-primaryColorDark w-40 px-2 py-3 rounded-[20px] mb-2">
                    <h1 className="text-xl text-center text-white">Premium</h1>
                  </div>
                  <p className="text-sm font-normal">
                    A complete productivity platform for <br /> management of birds
                  </p>
                </div>
                <div className="flex justify-between items-center py-2 lg:gap-0 gap-2">
                  <div className="inline-flex items-baseline ">
                    <span className="text-primaryColor dark:black font-bold text-3xl">
                      N
                    </span>
                    <span className="text-primaryColor dark:black font-bold text-3xl">
                      {isAnnual ? "12,214.17" : "129,531.57"}
                    </span>
                    <span className="text-primaryColor font-medium">
                      {isAnnual ? "/Mo" : "/Yr"}
                    </span>
                  </div>
                  <div className="inline-flex items-baseline bg-primaryColorDark p-2 rounded-[20px]">
                    <span className="text-white dark:black font-bold text-xl">
                      $
                    </span>
                    <span className="text-white dark:black font-bold text-xl">
                      {isAnnual ? "7.99" : "84.38"}
                    </span>
                    <span className="text-white font-medium">
                      {isAnnual ? "/Mo" : "/Yr"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-black dark:black font-medium mb-5">
                Per member, per Month
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow mb-2">
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>
                    One comprehensive platform to plan, track, and manage your
                    poultry business efficiently.
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Production cost analysis.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Inventory tracking and management.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>
                    Built-in animal growth and productivity intelligence for
                    feed/bird performance
                  </span>
                </li>
                {/* <li className="flex items-center">
                  <img src={Checkbtn} alt="check" className="lg:w-6 lg:h-6 w-3 h-3 mr-3" />
                  <span>Payroll and contact information.</span>
                </li> */}
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>AI assistant (knowledgeable Staff).</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Veterinary and contact information.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Farm accounting and financial management.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Feed Calculator</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Dedicated support.</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>99.9% platform availability.</span>
                </li>
              </ul>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring bg-primaryColor focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
              >
                Try For Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

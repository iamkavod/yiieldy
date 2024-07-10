import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  AbtHero,
  AbtUnlock,
  AchievementInNumbers,
  AIStaff,
  AppA,
  AppB,
  Logo,
  Mission,
  MobileB,
  Nomination,
  SDG13,
  SDGConsumption,
  SDGHunger,
  SDGIndustry,
  StepA,
  StepB,
  StepC,
  Vision,
} from "../Assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../App.css";
import AboutNav from "./FiidzApp/AboutNav";
import Stats from "../Components/Stats";
import Footer from "../UI/Footer";
import '../fonts.css';
import { Teams } from "../Components";

export default function AboutUs() {
  return (
    <main className="font-sp-pro">
      {/* About Header */}
      <AboutNav />

      {/* About Us Section */}
      <div className="h-auto" id="aboutus">
        {/* About Hero */}
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-[100px]">
          <div className="max-w-xl mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-[1443px] lg:mb-10 md:mx-auto sm:text-center md:mb-12">
                <h2 className="max-w-[1443px] mb-6  text-4xl font-bold leading-none tracking-tight text-black lg:text-6xl md:mx-auto">
                  Uncover the Distinctive Yiieldy Advantage
                </h2>
                <p className="text-black lg:text-[25px]">
                  At Yiieldy, we use AI to provide tailored digital agricultural solutions that drive farmers' businesses forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Hero-B */}
        <div className="px-4 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:pb-0">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className=" text-3xl font-bold tracking-tight text-primaryColor lg:text-4xl sm:leading-none max-w-lg mb-6 text-start">
                  Yiieldy is a leading AgTech platform revolutionizing the
                  agricultural industry with AI products to ensure a sustainable
                  future
                </h2>
                <p className="text-black text-base md:text-lg">
                  We specialize in harnessing the power of Artificial
                  Intelligence (AI) to craft solutions that drive businesses
                  towards a brighter, more efficient future.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <img className="object-cover w-auto" src={AbtHero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About US Body */}
      <main className="-z-50">
        <div className="px-4 py-16 mx-auto max-w-xl md:max-w-7xl lg:max-w-[1443px] md:px-0 lg:px-8 lg:py-0 md:py-20">
          <div className="lg:flex-row md:flex lg:gap-20 flex flex-col-reverse justify-between items-center">
            <div className="">
              <img
                className="inset-0 w-full md:h-auto lg:h-auto lg:w-[90%] w-[100%]"
                src={AbtUnlock}
                alt="YiieldyApp"
              />
            </div>
            <div className="lg:py-6 max-w-xl">
              <div className="flex flex-col gap-2 mb-5">
                <h3 className="text-blackShadeB font-bold">Easy and Fast</h3>
                <h1 className="lg:text-4xl text-3xl font-bold text-black mb-5">
                  Unlock the power of AI with Yiieldy
                </h1>
              </div>
              <div className="flex justify-start items-center lg:max-w-[1000px] md:pr-[1rem] text-justify mb-10">
                <div className="flex justify-center items-center mr-4">
                  <div className="h-auto">
                    <div className="w-10 h-10 border rounded-full">
                      <img src={Vision} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-auto">
                  <p className="text-black font-bold lg:text-2xl">
                    Our Vision: Redefining Possibilities
                  </p>
                  <p className="text-black lg:text-xl">
                    To help our farmers achieve more by applying AI and
                    innovative technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:max-w-[1000px] md:pr-[1rem] text-justify">
                <div className="flex justify-center items-center mr-4">
                  <div className="h-auto">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={Mission} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-auto">
                  <p className="text-black font-bold lg:text-2xl">
                    Our Mission: Bridging AI and Reality
                  </p>
                  <p className="text-black lg:text-xl">
                    We aim to provide complete AI-powered solutions for
                    sustainable agriculture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Achievment in Numbers */}
      <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row px-2 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:pb-0">
        <div className="flex items-center justify-center">
          <div>
            <img
              className="object-cover w-auto h-auto lg:mb-0 mb-5 lg:mt-0 mt-10"
              src={AchievementInNumbers}
              alt="AI STaff"
            />
          </div>
        </div>

        <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5 flex flex-col justify-between">
          <div className="max-w-xl mb-6">
            <h2 className="lg:text-4xl font-bold lg:block hidden tracking-tight text-black text-3xl sm:leading-none max-w-lg mb-6">
              Achievement in  Numbers
            </h2>
            <h2 className="text-3xl font-bold lg:hidden lg:text-start text-center tracking-tight text-primaryColor sm:text-4xl sm:leading-none max-w-lg mb-6">
              Achievement in Numbers
            </h2>
            <p className="text-black lg:text-xl">
              Save time to create more time on other busy schedule. Save time to
              create more time on other busy schedule. Save time to create more
              time on other busy schedule. Save time to create more time on
              other busy schedule
            </p>
          </div>
          <div>
            <Stats />
          </div>
        </div>
      </div>

      {/* Nomination */}
      {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8  lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-primaryColor sm:text-4xl md:mx-auto">
            We Got A Nomination
          </h2>
        </div>
        <div className="mx-auto lg:max-w-full">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-center w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-[800px]"
              src={Nomination}
              alt="Yiieldy"
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
        </div>
      </div> */}

      {/* SDGS */}
      <div className="px-4 py-16 mx-auto md:max-w-full lg:max-w-screen-[1443px] md:px-24 lg:px-8 lg:pt-24">
        <div className="max-w-[1443px] mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2 className="max-w-[1443px] mb-6 lg:text-6xl text-4xl font-bold leading-none tracking-tight text-black md:mx-auto">
            Yiieldy Alignment with Sustainable Development Goals (SDGs)
          </h2>
        </div>
        <div className="grid lg:gap-3 gap-2 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="lg:p-8 p-0 lg:mb-0 mb-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDGHunger}
                alt="interractive workshop"
                className="w-auto h-auto"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-4xl text-2xl">
              SDG 2: Zero Hunger:
            </h6>
            <p className="lg:text-[15px] text-black text-justify">
              Yiieldy unwavering focus on agriculture and AI technology is not
              just a strategic approach. It's a direct path to significantly
              enhance livestock feed efficiency and reduce costs for local
              farmers. This, in turn, ensures food security, improves nutrition,
              and promotes sustainable agriculture.
            </p>
          </div>
          <div className="lg:p-8 p-0 lg:mb-0 mb-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDGIndustry}
                alt="interractive workshop"
                className="w-auto h-auto"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-4xl text-2xl">
              SDG 9: Industry, Innovation, and Infrastructure:
            </h6>
            <p className="lg:text-[15px] text-black text-justify">
              Yiieldy unwavering focus on agriculture and AI technology is not
              just a strategic approach. It's a direct path to significantly
              enhance livestock feed efficiency and reduce costs for local
              farmers. This, in turn, ensures food security, improves nutrition,
              and promotes sustainable agriculture.
            </p>
          </div>
          <div className="lg:p-8 p-0 lg:mb-0 mb-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDGConsumption}
                alt="interractive workshop"
                className="w-auto h-auto"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-4xl text-2xl">
              SDG 12: Responsible Consumption and Production:
            </h6>
            <p className="lg:text-[15px] text-black text-justify">
              Our role in the agricultural industry is not just about helping
              farmers reduce production costs and improve feed efficiency. It's
              about championing more sustainable production practices and
              resource use, paving the way for a brighter future in agriculture.
            </p>
          </div>
          <div className="lg:p-8 p-0 lg:mb-0 mb-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDG13}
                alt="interractive workshop"
                className="w-auto h-auto"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-4xl text-2xl capitalize">
              SDG 13:
            </h6>
            <p className="lg:text-[15px] text-black text-justify">
              Yiieldy is dedicated to enhancing livestock farming efficiency and
              reducing production costs, directly contributing to SDG13 by
              promoting sustainable agricultural practices that mitigate climate
              change impacts. Its optimization of livestock feed efficiency and
              reduction of costs actively work to decrease the carbon footprint
              associated with poultry production.
            </p>
          </div>
        </div>
      </div>

      {/* Teams */}
      <Teams />

      {/* Footer */}
      <Footer />
    </main>
  );
}

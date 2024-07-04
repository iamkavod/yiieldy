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

export default function AboutUs() {
  return (
    <main className="font-sp-pro">
      {/* About Header */}
      <AboutNav />

      {/* About Us Section */}
      <div className="h-auto" id="aboutus">
        {/* About Hero */}
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-[100px]">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  Welcome to our story!
                </h2>
                <p className="text-gray-700 lg:text-[25px]">
                  Discover the heart behind our journey and values in the 'About
                  Us' section below.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Hero-B */}
        <div className="px-2 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:pb-0">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-primaryColor lg:text-[40px] sm:leading-none max-w-lg mb-6 lg:text-start text-center">
                  Yiieldy is a leading AgTech platform revolutionizing the
                  agricultural industry with AI products to ensure a sustainable
                  future
                </h2>
                <p className="text-gray-700 text-base md:text-lg">
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
          <div className="lg:flex md:flex lg:gap-20 grid grid-cols-1 justify-items-between items-center">
            <div className="">
              <img
                className="inset-0 w-full md:h-auto lg:h-auto lg:w-[100%] md:w-[100%]"
                src={AbtUnlock}
                alt="YiieldyApp"
              />
            </div>
            <div className="lg:py-6">
              <div className="flex flex-col gap-2 mb-5">
                <h3 className="text-blackShadeB font-bold">Easy and Fast</h3>
                <h1 className="lg:text-[50px] md:text-4xl text-3xl font-bold text-primaryColor mb-5">
                  Unlock the power <br /> of AI with Yiieldy
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
                  <p className="text-primaryColor font-bold lg:text-[22px]">
                    Our Vision: Redefining Possibilities
                  </p>
                  <p className="text-gray-700 lg:text-[22px]">
                    To help our farmers achieve more by <br /> applying AI and
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
                  <p className="text-primaryColor font-bold lg:text-[22px]">
                    Our Mission: Bridging AI and Reality
                  </p>
                  <p className="text-gray-700 lg:text-[22px]">
                    We aim to provide complete AI-powered <br /> solutions for
                    sustainable agriculture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Achievment in Numbers */}
      <div className="flex flex-col items-center justify-between w-full lg:flex-row px-2 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:pb-0">
        <div className="flex items-center justify-center">
          <div>
            <img
              className="object-cover w-auto h-auto"
              src={AchievementInNumbers}
              alt="AI STaff"
            />
          </div>
        </div>

        <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5 flex flex-col justify-between">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-primaryColor sm:text-4xl sm:leading-none max-w-lg mb-6">
              Achievement in <br /> Numbers
            </h2>
            <p className="text-gray-700 lg:text-[15px]">
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8  lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor sm:text-4xl md:mx-auto">
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
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* SDGS */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black lg:text-[40px] md:mx-auto">
            Yiieldy Alignment with Sustainable Development Goals (SDGs)
          </h2>
        </div>
        <div className="grid lg:gap-3 gap-2 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-20">
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDGHunger}
                alt="interractive workshop"
                className="w-20 h-20"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-[30px] twxt-[20px]">
              SDG 2: Zero Hunger:
            </h6>
            <p className="lg:text-[15px] text-gray-900">
              Yiieldy unwavering focus on agriculture and AI technology is not
              just a strategic approach. It's a direct path to significantly
              enhance livestock feed efficiency and reduce costs for local
              farmers. This, in turn, ensures food security, improves nutrition,
              and promotes sustainable agriculture.
            </p>
          </div>
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDGIndustry}
                alt="interractive workshop"
                className="w-20 h-20"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-[30px] twxt-[20px]">
              SDG 9: Industry, Innovation, and Infrastructure:
            </h6>
            <p className="lg:text-[15px] text-gray-900">
              Yiieldy unwavering focus on agriculture and AI technology is not
              just a strategic approach. It's a direct path to significantly
              enhance livestock feed efficiency and reduce costs for local
              farmers. This, in turn, ensures food security, improves nutrition,
              and promotes sustainable agriculture.  
            </p>
          </div>
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDGConsumption}
                alt="interractive workshop"
                className="w-20 h-20"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-[30px] twxt-[20px]">
              SDG 12: Responsible Consumption and Production:
            </h6>
            <p className="lg:text-[15px] text-gray-900">
              Our role in the agricultural industry is not just about helping
              farmers reduce production costs and improve feed efficiency. It's
              about championing more sustainable production practices and
              resource use, paving the way for a brighter future in agriculture.
            </p>
          </div>
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src={SDG13}
                alt="interractive workshop"
                className="w-20 h-20"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-black lg:text-[30px] twxt-[20px] capitalize">
              SDG 13:
            </h6>
            <p className="lg:text-[15px] text-gray-900">
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

      {/* Footer */}
      <Footer />
    </main>
  );
}

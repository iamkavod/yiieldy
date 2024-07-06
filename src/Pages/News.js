import React from "react";
import { Footer, Nav } from "../UI";
import { NewsA, NewsB, YiieldyUsersSec } from "../Assets";
import "../fonts.css";

export default function News() {
  return (
    <main className="bg-primaryColorLightB font-sp-pro">
      {/* Header */}
      <Nav />

      {/* Our News */}
      <div className="px-4 py-16 lg:pt-32 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:py-32 bg-primaryColorLight">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-4xl font-bold leading-none tracking-tight text-black lg:text-6xl md:mx-auto">
            Our News
          </h2>
          <p className="text-base text-gray-800 md:text-lg lg:text-[20px]">
            Get the latest updates and deeper coffee experience from Yiieldy
          </p>
        </div>
        <div className="mx-auto lg:max-w-full">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-[800px]"
              src={YiieldyUsersSec}
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
        <div className="flex flex-col justify-start mt-4">
          <p className="font-bold text-2xl">
            Collaboration to Develop Coffee and Beverage Industry Expertise in
            Indonesia
          </p>
          <p className="text-[15px] text-gray-500 flex items-center gap-2">
            <span>4 Min</span>
            <span className="bg-gray-500 w-2 h-2 rounded-full"></span>
            <span>August 19, 2022</span>
          </p>
        </div>
      </div>

      {/* News Section */}
      <div className="h-auto py-0 mb-0">
        <div className="px-2 py-16 mx-auto max-w-[1443px] md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 lg:flex max-w-screen-[1443px] gap-8 mx-auto">
            <div className="flex flex-col justify-center">
              <hr className="w-full my-6 border-gray-300" />
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-auto h-auto mb-3">
                    <img src={NewsA} alt="news" className="w-60 h-48" />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-bold lg:text-4xl text-xl">
                    From Software to Agric: Mfon Uwa's Journey to <br />{" "}
                    Revolutionise Poultry Farming in Nigeria with Yiieldy
                  </h6>
                  <p className="text-[15px] text-gray-500 flex items-center gap-2">
                    <span>4 Min</span>
                    <span className="bg-gray-500 w-2 h-2 rounded-full"></span>
                    <span>August 19, 2022</span>
                  </p>
                </div>
              </div>
              <hr className="w-full my-6 border-gray-300" />
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-auto h-auto mb-3">
                    <img src={NewsB} alt="news" className="w-60 h-48" />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-bold lg:text-4xl text-xl">
                    Nigerian Poultry Farmers Get a Boost: New App <br /> Fights
                    Challenges, Improves Profits
                  </h6>
                  <p className="text-[15px] text-gray-500 flex items-center gap-2">
                    <span>4 Min</span>
                    <span className="bg-gray-500 w-2 h-2 rounded-full"></span>
                    <span>August 19, 2022</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="bg-primaryColor w-full py-4 my-auto lg:w-96 lg:py-4 text-xs lg:text-sm font-bold text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-lg text-center"
            >
              Load More
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

import React from "react";
import { Footer, Nav } from "../UI";
import { NewImage, NewImage2, NewsA, NewsB, YiieldyUsersSec } from "../Assets";
import "../fonts.css";

export default function News() {
  return (
    <main className="bg-primaryColorLightB font-sp-pro">
      {/* Header */}
      <Nav />

      {/* Our News */}
      <div className="px-4 py-16 lg:pt-32 pt-32 mx-auto max-w-[1443px] md:px-5 lg:px-8 lg:py-10 ">
        <div className="max-w-[1443px] lg:px-8 mb-10 md:mx-auto text-center md:mb-12">
          <h2 className="max-w-lg mb-6 text-4xl font-bold leading-none tracking-tight text-black lg:text-6xl md:mx-auto">
            Our News
          </h2>
          <p className="text-base text-gray-800 md:text-lg lg:text-[20px]">
            Get the latest updates and deeper coffee experience from Yiieldy
          </p>
        </div>
        <a href="https://www.legit.ng/business-economy/technology/1596484-from-software-soil-mfon-uwas-journey-revolutionize-poultry-farming-nigeria-yiieldy/" >
          <div className="mx-auto lg:max-w-full">
            <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
              <img
                className="object-cover rounded shadow-lg h-auto w-full"
                src={NewImage}
                alt="Yiieldy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mt-4">
            <p className="font-bold text-2xl">
              From Software to Agric: Mfon Uwa's Journey to
              Revolutionise Poultry Farming in Nigeria with Yiieldy
            </p>
            <p className="text-[15px] text-gray-500 flex items-center gap-2">
              <span>4 Min</span>
              <span className="bg-gray-500 w-2 h-2 rounded-full"></span>
              <span>August 19, 2022</span>
            </p>
          </div>
        </a>
      </div>

      {/* News Section */}
      <div className="h-auto py-0 mb-0 pb-32">
        <div className="mx-auto max-w-[1443px] lg:px-8 md:px-5 px-2">
          <div className="grid grid-cols-1 lg:flex max-w-[1443px] gap-8 mx-auto">
            <div className="flex flex-col justify-center">
              <hr className="w-full my-6 border-gray-300" />
              <div className="flex gap-10 lg:flex md:hidden hidden">
                <div className="w-auto h-auto mb-3">
                  <img src={NewImage} alt="news" className="w-auto h-auto" />
                </div>
                <div>
                  <a href="https://www.legit.ng/business-economy/technology/1596484-from-software-soil-mfon-uwas-journey-revolutionize-poultry-farming-nigeria-yiieldy/" className="mb-2 font-bold lg:text-4xl text-xl" target="_blank">
                    From Software to Agric: Mfon Uwa's Journey to
                    Revolutionise Poultry Farming in Nigeria with Yiieldy
                  </a>
                  <p className="text-[15px] text-gray-500 flex items-center gap-2">
                    <span>4 Min</span>
                    <span className="bg-gray-500 w-2 h-2 rounded-full"></span>
                    <span>August 19, 2022</span>
                  </p>
                </div>
              </div>
              <hr className="my-6 border-gray-300 lg:block md:hidden hidden" />
              <div className="flex flex-col lg:flex-row md:flex gap-10">
                <div className="lg:w-[68%] md:w-full w-full">
                  <img src={NewImage2} className="w-auto h-auto" />
                </div>
                <div>
                  <a href="https://poultrynews.africa/index.php/2024/06/10/nigerian-poultry-farmers-get-a-boost-new-app-fights-challenges-improves-profits/" className="mb-2 font-bold lg:text-4xl text-xl" target="_blank">
                    Nigerian Poultry Farmers Get a Boost: New App Fights
                    Challenges, Improves Profits
                  </a>
                  <div>
                    <p className="text-[15px] text-gray-500 flex items-center gap-2">
                      <span>4 Min</span>
                      <span className="bg-gray-500 w-2 h-2 rounded-full"></span>
                      <span>August 19, 2022</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

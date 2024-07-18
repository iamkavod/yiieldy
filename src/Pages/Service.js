import React from "react";
import { ConsultancyServices, DynamicWebminars, InteractiveWorkshop, OnsiteTrainingSessions, ServiceImgA, ServiceImgB, ServiceImgC, ServiceImgD } from "../Assets";
import '../fonts.css';
import { Footer, Nav } from "../UI";
import ServiceNav from "./FiidzApp/ServicesNav";

export default function Service() {
  return (
    <main className="font-sp-pro bg-primaryColorLightB">
      {/* Header */}
      <ServiceNav />

      {/* Our Services */}
      <div className="px-4 py-20 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className="max-w-[1443px] mb-6 sm:mx-auto sm:text-center md:mb-10">
          <p className="text-base text-gray-700 md:text-lg text-center">
            We have the expertise and knowledge to offer impartial advice and services
          </p>
          <p className="mb-1 lg:text-6xl text-4xl text-center font-bold tracking-wide capitalize mt-5 md:mb-2">
            We are the right team for your business, we provide the best service.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div className="bg-whiteShadeB p-5 rounded-xl h-auto flex flex-col gap-y-4">
            <img
              className="object-cover w-full h-auto mb-6 rounded-xl shadow-lg"
              src={ServiceImgA}
              alt="Services"
            />
            <div className="flex flex-col gap-y-1">
              <h5 className="mb-2 text-xl font-bold leading-none lg:text-2xl text-primaryColor">
                Interactive Workshops
              </h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </p>
            </div>
            <a href="#" className="bg-primaryColor w-40 text-center p-4 rounded-full text-white">Book Now</a>
          </div>
          <div className="bg-whiteShadeB p-5 rounded-xl h-auto flex flex-col gap-y-4">
            <img
              className="object-cover w-full h-auto mb-6 rounded-xl shadow-lg"
              src={ServiceImgB}
              alt="Services"
            />
            <div className="flex flex-col gap-y-1">
              <h5 className="mb-2 text-xl font-bold leading-none lg:text-2xl text-primaryColor">
              Dynamic Webinars   
              </h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </p>
            </div>
            <a href="#" className="bg-primaryColor w-40 text-center p-4 rounded-full text-white">Book Now</a>
          </div>
          <div className="bg-whiteShadeB p-5 rounded-xl h-auto flex flex-col gap-y-4">
            <img
              className="object-cover w-full h-auto mb-6 rounded-xl shadow-lg"
              src={ServiceImgC}
              alt="Services"
            />
            <div className="flex flex-col gap-y-1">
              <h5 className="mb-2 text-xl font-bold leading-none lg:text-2xl text-primaryColor">
              On-site training sessions  
              </h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </p>
            </div>
            <a href="#" className="bg-primaryColor w-40 text-center p-4 rounded-full text-white">Book Now</a>
          </div>
          <div className="bg-whiteShadeB p-5 rounded-xl h-auto flex flex-col gap-y-4">
            <img
              className="object-cover w-full h-auto mb-6 rounded-xl shadow-lg"
              src={ServiceImgD}
              alt="Services"
            />
            <div className="flex flex-col gap-y-1">
              <h5 className="mb-2 text-xl font-bold leading-none lg:text-2xl text-primaryColor">
              Consultancy services.   
              </h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </p>
            </div>
            <a href="#" className="bg-primaryColor w-40 text-center p-4 rounded-full text-white">Book Now</a>
          </div>
          <div className="bg-whiteShadeB p-5 rounded-xl h-auto flex flex-col gap-y-4">
            <img
              className="object-cover w-full h-auto mb-6 rounded-xl shadow-lg"
              src={ServiceImgB}
              alt="Services"
            />
            <div className="flex flex-col gap-y-1">
              <h5 className="mb-2 text-xl font-bold leading-none lg:text-2xl text-primaryColor">
              Dynamic Webinars   
              </h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </p>
            </div>
            <a href="#" className="bg-primaryColor w-40 text-center p-4 rounded-full text-white">Book Now</a>
          </div>
          <div className="bg-whiteShadeB p-5 rounded-xl h-auto flex flex-col gap-y-4">
            <img
              className="object-cover w-full h-auto mb-6 rounded-xl shadow-lg"
              src={ServiceImgC}
              alt="Services"
            />
            <div className="flex flex-col gap-y-1">
              <h5 className="mb-2 text-xl font-bold leading-none lg:text-2xl text-primaryColor">
                Interactive Workshops
              </h5>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </p>
            </div>
            <a href="#" className="bg-primaryColor w-40 text-center p-4 rounded-full text-white">Book Now</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

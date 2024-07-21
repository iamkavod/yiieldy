import React from "react";
import { Checkbtn, ConsultancyServices, DynamicWebminars, InteractiveWorkshop, OnsiteTrainingSessions, ServiceImgA, ServiceImgB, ServiceImgC, ServiceImgD } from "../Assets";
import '../fonts.css';
import { Footer, Nav } from "../UI";
import ServiceNav from "./FiidzApp/ServicesNav";
import '../App.css';

export default function Service() {
  return (
    <main className="font-sp-pro bg-primaryColorLightB">
      {/* Header */}
      <ServiceNav />

      {/* Our Services */}
      <div className="px-4 py-20 mx-auto max-w-[1443px] md:px-24 lg:px-8 lg:py-40">
        <div className="max-w-[1443px] mb-6 sm:mx-auto sm:text-center md:mb-10">
          <p className="text-base text-gray-700 lg:text-4xl md:text-2xl text-xl text-center">
            Access our impartial advice and exceptional services
          </p>
          <p className="mb-1 lg:text-6xl md:text-4xl text-xl text-center font-bold tracking-wide capitalize mt-5 md:mb-2">
            We are confident that our team is the perfect fit for your agribusiness and are dedicated to delivering the highest-quality service available.
          </p>
        </div>

        {/* Services Hero Section */}
        <div className="px-2 py-16 mx-auto max-w-[1443px]" id="servicesHero">
          <div className="grid max-w-[1443px] gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
            <div className="transition duration-300 transform rounded md:text-center">
              <div className="relative lg:p-5 md:p-3 p-0">
                <img
                  className="object-cover w-full h-64 rounded-xl lg:h-80 xl:h-96"
                  src={ServiceImgA}
                  alt=""
                />
                <div className="px-2 py-8 rounded-b lg:px-8 text-start flex flex-col gap-y-3">
                  <h1 className="text-primaryColor lg:text-4xl md:text-2xl text-xl font-bold">Training</h1>
                  <p className="text-primaryColor lg:text-2xl md:text-xl text-sm">We offer online and on-site training sessions to equip livestock farmers across Africa.</p>
                  <p className="text-black lg:text-2xl md:text-xl text-sm">Our trainings are designed to educate and empower poultry farmers across Africa to enhance their practices and improve farm productivity</p>
                  <ul>
                    <h3 className="text-xl font-bold">Who we partner with:
                    </h3>
                    <li className="text-xl">✅  Farmer Associations</li>
                    <li className="text-xl">✅  International trade and development</li>
                    <li className="text-xl">✅  Non-profit organizations</li>
                    <li className="text-xl">✅  Governments</li>
                  </ul>
                  <ul>
                    <h3 className="text-xl font-bold">Who benefits from our training

                    </h3>
                    <li className="text-xl">✅  Youths</li>
                    <li className="text-xl">✅  Women</li>
                  </ul>
                  <a href="/contact" className="bg-primaryColor w-full text-center p-4 rounded-full text-white font-bold">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="transition duration-300 transform rounded md:text-center">
              <div className="relative lg:p-5 md:p-3 p-0">
                <img
                  className="object-cover w-full h-64 rounded-xl lg:h-80 xl:h-96"
                  src={ServiceImgB}
                  alt=""
                />
                <div className="px-2 py-8 rounded-b lg:px-8 text-start flex justify-between flex-col gap-y-3">
                  <h1 className="text-primaryColor lg:text-4xl md:text-2xl text-xl font-bold">Data analysis and insights:</h1>
                  <p className="text-black lg:text-2xl md:text-xl text-sm">We can leverage the data and insights collected from Yiieldy fiidz app and other sources to provide farmers with valuable insights on their farm performance, feed consumption patterns, health trends, and productivity metrics</p>
                  <ul>
                    <h3 className="text-xl font-bold">Who we partner with:
                    </h3>
                    <li className="text-xl">✅  Farmer Associations</li>
                    <li className="text-xl">✅  International trade and development</li>
                    <li className="text-xl">✅  Non-profit organizations</li>
                    <li className="text-xl">✅  Governments</li>
                  </ul>
                  <a href="/contact" className="bg-primaryColor w-full text-center p-4 rounded-full text-white font-bold">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultancy Services */}
      <div className="mx-auto max-w-[1443px] md:px-5 lg:px-0" id="servicesCon">
        <div>
          <div className="max-w-[1443px] mb-6 lg:mx-auto sm:text-center md:mb-10">
            <p className="text-gray-700 lg:text-6xl md:text-2xl text-xl text-center text-primaryColor font-bold">
              Consultancy service:
            </p>
            <p className="mb-1 lg:text-3xl md:text-2xl text-xl text-center tracking-wide capitalize mt-5 md:mb-2">
              Our consultancy service is designed to provide assistance to poultry farmers across Africa in the areas of Nutrition & Disease Prevention.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2 bg-white rounded-xl">
              <div>
                <h5 className="max-w-md mb-6 text-xl font-bold leading-none lg:text-3xl text-primaryColor">
                  Nutritional consultancy:
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Nutritional consultancy: We offer nutritional consultancy services to poultry farmers, helping you optimize your feed formulation based on the specific needs of your birds. E.g. Formulating custom feed recipes, analyzing feed quality & providing recommendations for improving feed efficiency.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2 bg-white rounded-xl">
              <div>
                <h5 className="max-w-md mb-6 text-xl font-bold leading-none lg:text-3xl text-primaryColor">
                  Disease prevention consultancy:
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Our expert consultants are equipped to provide consultancy in the areas of disease prevention, vaccination protocols, early detection of health issues, and a lot more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nutritional */}
      <div className="px-4 py-16 mx-auto lg:max-w-[1443px] max-w-xl md:px-5 lg:px-8 lg:py-20">
        <div className="lg:max-w-[1443px] max-w-xl mb-10 md:mx-auto sm:text-center md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 lg:text-2xl font-bold tracking-wider text-teal-900 capitalize rounded-full bg-teal-accent-400">
              Price Packages
            </p>
          </div>
          <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-6xl md:mx-auto">
            Nutritional Consultancy Subscription Packages
          </h2>
        </div>
        <div className="grid gap-10 row-gap-5 lg:max-w-[1443px] max-w-xl sm:row-gap-10 lg:grid-cols-3 lg:mx-auto">
          {/* Basic */}
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm items-start hover:shadow">
            <div className="text-start">
              <div className="text-lg font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">Basic</div>
              <div className="flex lg;items-center justify-between mt-2 gap-x-5 lg:flex-row flex-col ">
                <div className="text-3xl font-bold text-primaryColor">N8,036.40/mo</div>
                <div className="text-2xl font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">$5.0/mo</div>
              </div>
              <div className="mt-2 space-y-3 text-start">
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Monthly custom feed recipe formulation.</span></div>
                <div className="text-gray-700 flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Feed quality analysis report</span></div>
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Feed efficiency improvement recommendations</span></div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/"
                className="inline-flex items-center justify-center w-[100%] h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-primaryColor rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Standard */}
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border-2 border-primaryColor rounded shadow-sm items-start hover:shadow">
            <div className="text-start">
              <div className="text-lg font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">Standard</div>
              <div className="flex items-center justify-between mt-2 gap-x-5">
                <div className="text-3xl font-bold text-primaryColor">N16,072.60/mo</div>
                <div className="text-2xl font-bold bg-primaryColorDark text-white p-3 rounded-xl">$10.0/mo</div>
              </div>
              <div className="mt-2 space-y-3 text-start">
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Bi-weekly custom feed recipe formulation</span></div>
                <div className="text-gray-700 flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Detailed feed quality analysis report</span></div>
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Feed efficiency improvement strategies and ongoing support.</span></div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/"
                className="inline-flex items-center justify-center w-[100%] h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-primaryColor rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Premium */}
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm items-start hover:shadow">
            <div className="text-start">
              <div className="text-lg font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">Premium</div>
              <div className="flex items-center justify-between mt-2 gap-x-5">
                <div className="text-3xl font-bold text-primaryColor">N40,181.50/mo</div>
                <div className="text-2xl font-bold bg-primaryColorDark text-white p-3 rounded-xl">$25.0/mo</div>
              </div>
              <div className="mt-2 space-y-3 text-start">
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Weekly custom feed recipe formulation.</span></div>
                <div className="text-gray-700 flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Monthly disease resistance monitoring and adjustment</span></div>
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Feed efficiency improvement recommendations</span></div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/"
                className="inline-flex items-center justify-center w-[100%] h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-primaryColor rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Consultancy */}
      <div className="px-4 py-16 mx-auto lg:max-w-[1443px] max-w-xl md:px-5 lg:px-8 lg:py-20">
        <div className="lg:max-w-[1443px] max-w-xl mb-10 md:mx-auto sm:text-center md:mb-12">
          <h2 className="max-w-5xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-6xl md:mx-auto">
            Disease Prevention Consultancy
            Subscription Packages
          </h2>
        </div>
        <div className="grid gap-10 row-gap-5 lg:max-w-[1443px] max-w-xl sm:row-gap-10 lg:grid-cols-3 lg:mx-auto">
          {/* Basic */}
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm items-start hover:shadow">
            <div className="text-start">
              <div className="text-lg font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">Basic</div>
              <div className="flex items-center justify-between mt-2 gap-x-5">
                <div className="text-3xl font-bold text-primaryColor">N8,036.30/mo</div>
                <div className="text-2xl font-bold bg-primaryColorDark text-white p-3 rounded-xl">$5.0/mo</div>
              </div>
              <div className="mt-2 space-y-3 text-start">
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Disease prevention strategies tailored to your farm.</span></div>
                <div className="text-gray-700 flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Vaccination protocol development.</span></div>
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Monthly disease risk assessment.</span></div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/"
                className="inline-flex items-center justify-center w-[100%] h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-primaryColor rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Standard */}
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border-2 border-primaryColor rounded shadow-sm items-start hover:shadow">
            <div className="text-start">
              <div className="text-lg font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">Standard</div>
              <div className="flex items-center justify-between mt-2 gap-x-5">
                <div className="text-3xl font-bold text-primaryColor">N24,129.24/mo</div>
                <div className="text-2xl font-bold bg-primaryColorDark text-white p-3 rounded-xl">$15.0/mo</div>
              </div>
              <div className="mt-2 space-y-3 text-start">
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Bi-weekly disease prevention strategies review.</span></div>
                <div className="text-gray-700 flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Advanced vaccination protocols</span></div>
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Quarterly disease outbreak simulations</span></div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/"
                className="inline-flex items-center justify-center w-[100%] h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-primaryColor rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Premium */}
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm items-start hover:shadow">
            <div className="text-start">
              <div className="text-lg font-bold bg-primaryColorDark text-white p-3 rounded-xl w-40 text-center">Premium</div>
              <div className="flex items-center justify-between mt-2 gap-x-5">
                <div className="text-3xl font-bold text-primaryColor">N80,430.80/mo</div>
                <div className="text-2xl font-bold bg-primaryColorDark text-white p-3 rounded-xl">$50.0/mo</div>
              </div>
              <div className="mt-2 space-y-3 text-start">
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Weekly personalized disease prevention strategies.</span></div>
                <div className="text-gray-700 flex items-center">
                  <img
                    src={Checkbtn}
                    alt="check"
                    className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                  />
                  <span>Cutting-edge vaccination protocols and updates.</span></div>
                <div className="text-gray-700 flex items-center"><img
                  src={Checkbtn}
                  alt="check"
                  className="lg:w-6 lg:h-6 w-3 h-3 mr-3"
                />
                  <span>Monthly disease resistance monitoring and adjustment</span></div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="/"
                className="inline-flex items-center justify-center w-[100%] h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-primaryColor rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mx-auto max-w-[1443px] mb-60 mt-20 lg:px-8 md:px-5 px-2">
      <div className="rounded">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <p className="mb-4 lg:text-6xl md:text-4xl text-xl text-gray-700">
              Speak to a consultant.
            </p>
            <a
              href="/contact"
              aria-label=""
              className="inline-flex items-center font-bold transition-colors duration-200 text-white bg-primaryColor p-5 rounde-xl"
            >
              Contact Us
            </a>
          </div>
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <img src={ServiceImgC} />
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

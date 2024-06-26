import React from "react";
import Nav from "../UI/Nav";
import "../App.css";
import {
  ChickenA,
  ChickenB,
  ChickenC,
  FarmerImage,
  YiieldyAiStaff,
  YiieldyLogoIcon,
} from "../Assets";
import Footer from "../UI/Footer";

export default function HelpSupport() {
  return (
    <main>
      {/* Header */}
      <Nav />

      <section>
        {/* Help and Support Hero */}
        <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-28 mx-auto lg:max-w-[1443px] md:max-w-2xl lg:pt-32 md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 lg:text-[50px] md:mx-auto">
              Hi, how can we help you?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              You are welcome to a quick introduction to the Yiieldy-Fiidz
              mobile app. This Page will take you through a quick tour of the
              Yiieldy-Fiidz mobile app. We will go over a few aspects and
              interfaces of the Yiieldy-Fiidz app  
            </p>
          </div>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row lg:px-20">
            <input
              placeholder="How do i set up my Yiieldy App"
              required=""
              type="text"
              className="flex-grow w-full  h-16 px-4 mb-3 transition duration-200  border border-primaryColor rounded-[20px] shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline placeholder:text-primaryColorLightB"
              id="helpinput"
            />
          </form>
          <p className="max-w-auto mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
            Popular help topics: Camera & microphone test Getting Started Video
            Tutorials
          </p>
        </div>

        {/* App info */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/* Grid - 1 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <a href="/" aria-label="Article">
                <img src={ChickenA} alt="chicken" />
              </a>
              <div className="flex justify-between items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Fiidz App AI Staff
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    This video shows its capabilities and how essential it is to
                    poultry farmers
                  </p>
                  <div className="flex space-x-4 items-center">
                    <p>
                      306K <span>views</span>
                    </p>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <p>Streamed 22 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid - 2 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <a href="/" aria-label="Article">
                <img src={ChickenB} alt="chicken" />
              </a>
              <div className="flex justify-between items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-5">
                      GET STARTED WITH YIIELDY FIIDZ
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    This video shows its capabilities and how essential it is to
                    poultry farmers
                  </p>
                  <div className="flex space-x-4 items-center">
                    <p>
                      306K <span>views</span>
                    </p>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <p>Streamed 22 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid - 3 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <a href="/" aria-label="Article">
                <img src={ChickenC} alt="chicken" />
              </a>
              <div className="flex justify-between items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Fiidz App AI Staff
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    This video shows its capabilities and how essential it is to
                    poultry farmers
                  </p>
                  <div className="flex space-x-4 items-center">
                    <p>
                      306K <span>views</span>
                    </p>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <p>Streamed 22 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid - 4 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <a href="/" aria-label="Article">
                <img src={FarmerImage} alt="chicken" />
              </a>
              <div className="flex justify-between items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Fiidz App AI Staff
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    This video shows its capabilities and how essential it is to
                    poultry farmers
                  </p>
                  <div className="flex space-x-4 items-center">
                    <p>
                      306K <span>views</span>
                    </p>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <p>Streamed 22 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="helpbg"></div> */}
        <div className="relative h-full w-full py-10 mb-10" >
          {/* Div behind the content */}
          <div className="absolute inset-0 -z-[100]" id="bgHelpSub"></div>

        {/* More Help */}
          <div className="relative z-10">
            <div className="h-auto w-full transition-shadow duration-300">
              <div className="flex items-center justify-center w-full h-full transition-colors duration-300"></div>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 mt-[50px] z-20">
                <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primaryColor lg:text-[60px] sm:leading-none text-center">
                    Need more help?
                  </h2>
                  <p className="mb-5 text-base text-primaryColor lg:text-[20px] text-center">
                    Connect with our team. We’re here to help!
                  </p>
                  <div className="flex items-center justify-center gap-x-6 overflow-hidden mt-10">
                    <a
                      href="#"
                      className="bg-primaryColorLight w-40 py-4 my-auto lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold text-primaryColor shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-full text-center hover:text-white"
                    >
                      Contact Support
                    </a>
                    <a
                      href="#"
                      className="rounded-full  w-40 py-4 lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold border border-primaryColor text-primaryColor shadow-sm hover:bg-primaryColorLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorLight text-center "
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Div above the content */}
          <div className="absolute inset-0" id="bgHelpSubB"></div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-40">
        <Footer />
      </div>
    </main>
  );
}

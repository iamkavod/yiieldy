import React from "react";
import {
  Check,
  Left,
  Quote,
  Right,
  Star,
  StepA,
  StepB,
  StepC,
  YiieldyAiStaff,
  YiieldyApp,
  YiieldyUsersSec,
} from "../Assets";

export default function Body() {
  return (
    <main className="p-6">
      {/* Yiieldy Ai Staff Section */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8  lg:py-20">
        <div className="grid gap-10 lg:gap-32 lg:grid-cols-2">
          <h5 className="mb-1 lg:text-6xl text-4xl lg:hidden block font-bold leading-none text-black">
            Fiidz App AI Staff provides AI assitance to poultry farmers.
          </h5>
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            {/* <img
              className="object-cover w-full h-56 rounded shadow-lg md:h-80 lg:h-96"
              src={YiieldyAiStaff}
              alt="Yiieldy AI Staff"
            /> */}
            <iframe
              src="https://www.youtube.com/embed/uvyLjnt2lHs"
              className="object-cover w-full h-56 rounded shadow-lg md:h-80 lg:h-96"
              frameborder="0"
              allowFullScreen
            ></iframe>
            {/* <a
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
            </a> */}
          </div>
          <div className="flex flex-col gap-10 items-start">
            <h5 className="mb-1 lg:text-6xl text-4xl lg:block hidden font-bold leading-none">
              Fiidz App AI Staff provides AI assitance to poultry farmers.
            </h5>
            <p className="mb-6 text-gray-900 text-[15px] lg:text-2xl font-regular">
              This video shows its capabilities and how essential it is to
              poultry farmers.
            </p>
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-white bg-primaryColor px-10 py-4 rounded-full"
            >
              Watch Now
            </a> */}
          </div>
        </div>
      </div>

      {/* Yiieldy Fiidz Users */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8  lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-12">
          <h2 className="max-w-7xl mb-6 font-sans text-4xl font-bold text-black lg:text-6xl md:mx-auto">
            Hear From Yiieldy Fiidz Users
          </h2>
          <p className="text-base text-black md:text-lg font-regular">
            <span className="font-regular">
              See how we helped our users to grow,
            </span>{" "}
            improve feed efficiency, and enhance poultry performance.
          </p>
        </div>
        <div className="mx-auto lg:max-w-full">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/C4TC1MVKnqo?si=VXqdrynorvCssIsQ"
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-[600px]"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="lg:px-8  lg:max-w-[1443px] lg:py-32 md:py-32 flex flex-col mx-auto gap-20">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Left} alt="Left" />
          </a>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl text-primaryColor text-center">
              Testimonials
            </h3>
            <h1 className="lg:text-6xl text-4xl font-bold text-center">
              Our customers think we’re the best
            </h1>
          </div>
          <a href="/">
            <img src={Right} alt="Right" />
          </a>
        </div>
        <main className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10">
          <div className="grid grid-cols-1 h-[400px]">
            <div className="flex justify-between items-center">
              <img src={Quote} alt="quote" />
              <img src={Star} alt="star" />
            </div>
            <div>
              <p>
                I recently used the Yiieldy Fiidz app's feed calculator to
                estimate my poultry production.
              </p>
              <p>
                This app makes feed management easier by removing the guesswork,
                which has helped me save significant money. Its simple and
                accurate design makes it a must-have for every poultry farmer.
              </p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h1>Jacob Odiakosa</h1>
                <p>Winners Farm Ltd</p>
              </div>
              <img src={Check} alt="Check" />
            </div>
          </div>
          <div className="grid grid-cols-1 h-[400px]">
            <div className="flex justify-between items-center">
              <img src={Quote} alt="quote" />
              <img src={Star} alt="star" />
            </div>
            <div>
              <p>
                Previously, I relied on my intuition to discuss my poultry
                production. However, since using Yiieldy Fiidz, I have gained
                invaluable insights into how efficiently my flocks convert feed
                into weight gain.
              </p>
              <p>
                This has enabled me to make informed decisions about their
                feeding strategies and boosted my confidence in my poultry
                management. I am impressed with integrating such a data-driven
                tool into the app. Fantastic job!
              </p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h1>Abu Warlord</h1>
                <p>Azuri-Green Acres</p>
              </div>
              <img src={Check} alt="Check" />
            </div>
          </div>
          <div className="grid grid-cols-1 h-[400px]">
            <div className="flex justify-between items-center">
              <img src={Quote} alt="quote" />
              <img src={Star} alt="star" />
            </div>
            <div>
              <p>
                I recently used the Yiieldy Fiidz app's feed calculator to
                estimate my poultry production.
              </p>
              <p>
                This app makes feed management easier by removing the guesswork,
                which has helped me save significant money. Its simple and
                accurate design makes it a must-have for every poultry farmer.
              </p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h1>Ekaidem Jeremiah</h1>
                <p>Ecoregions Nigeria</p>
              </div>
              <img src={Check} alt="Check" />
            </div>
          </div>
        </main>
      </div>

      {/* Yiieldy App */}
      <main>
        <div className="px-4 py-16 mx-auto max-w-xl md:max-w-7xl lg:max-w-[1443px] md:px-0 lg:px-0 lg:py-20 md:py-32">
          <div className="lg:flex md:flex grid grid-cols-1 justify-items-between items-center">
            <div className="lg:py-6 lg:pr-16 lg:w-[70%] w-full">
              <div className="flex flex-col gap-2 mb-5">
                <h3 className="text-blackShadeB font-bold">Easy and Fast</h3>
                <h1 className="lg:text-6xl text-4xl font-bold text-black mb-8">Quick Overview</h1>
              </div>
              <div className="flex items-center justify-start lg:max-w-[1443px] lg:pr-[10rem] md:pr-[10rem] text-justify mb-5">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={StepA} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-700">
                    Adjust your bird's feeding strategy based on insights from
                    any feed intake deviations.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start lg:max-w-[1443px] lg:pr-[10rem] md:pr-[10rem] text-justify mb-5">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={StepB} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-700">
                    Monitoring your poultry's feed consumption and gain
                    real-time insight into the feed conversion ratio and the
                    cost per kilogram of meat or eggs.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start lg:max-w-[1443px] lg:pr-[10rem] md:pr-[10rem] text-justify mb-5">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={StepC} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-700">
                    Easily estimate the quantity of feed required and associated
                    costs to sustain your birds from the day they hatch until
                    the end of their production cycle.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="inset-0 w-full md:h-auto lg:h-auto lg:w-[100%] md:w-[100%] lg:mt-0 mt-5"
                src={YiieldyApp}
                alt="YiieldyApp"
              />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

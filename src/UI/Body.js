import React, { useRef, useState, useEffect } from "react";
import {
  Check,
  Left,
  PlayVideo,
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
import { Testimonial } from "../Components";

export default function Body() {
  const iframeRef = useRef(null);
  const [buttonVisible, setButtonVisible] = useState(true);

  const playVideo = () => {
    setButtonVisible(false);
    iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  };

  const onPlayerStateChange = (event) => {
    if (event.data === 2) { // 2 indicates the video is paused
      setButtonVisible(true);
    }
  };

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== 'https://www.youtube.com') {
        return;
      }
      const data = JSON.parse(event.data);
      if (data.event === 'onStateChange') {
        onPlayerStateChange(data);
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <main className="lg:p-6 p-3">
      {/* Yiieldy Ai Staff Section */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-5 lg:px-8  lg:py-20">
        <div className="grid gap-10 lg:gap-32 lg:grid-cols-2">
          <h5 className="mb-1 lg:text-6xl text-4xl lg:hidden block font-bold leading-none text-black">
            Fiidz App AI Staff provides AI assitance to poultry farmers.
          </h5>
          <div className="flex justify-center">
            <div className="relative lg:w-[600px] w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/uvyLjnt2lHs?enablejsapi=1&rel=0"
                className="object-center lg:w-[600px] w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-96"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {buttonVisible && (
                <button
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center lg:w-[600px] w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                  onClick={playVideo}
                >
                </button>
              )}
            </div>
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
      {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8  lg:py-20">
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
        <div className="flex justify-center">
          <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/C4TC1MVKnqo?si=kEHw0Bx4yFFNL2Tx&rel=0"
              className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[600px]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {buttonVisible && (
              <button
                aria-label="Play Video"
                className="absolute inset-0 flex items-center justify-center w-full lg:h-[600px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                onClick={playVideo}
              >
              </button>
            )}
          </div>
        </div>
      </div> */}

      {/* Testimonials */}
      <div>
        <Testimonial />
      </div>

      {/* Yiieldy App */}
      <main>
        <div className="px-4 py-16 mx-auto max-w-xl md:max-w-7xl lg:max-w-[1443px] md:px-5 lg:px-0 lg:py-20 md:py-32">
          <div className="lg:flex md:flex grid grid-cols-1 justify-items-between items-center">
            <div className="lg:py-6 lg:pr-16 lg:w-[70%] w-full">
              <div className="flex flex-col gap-2 mb-5">
                <h3 className="text-blackShadeB font-bold">Easy and Fast</h3>
                <h1 className="lg:text-6xl text-4xl font-bold text-black mb-8">Quick Overview</h1>
              </div>
              <div className="flex items-center justify-start lg:max-w-[1443px] lg:pr-[10rem] md:pr-[5rem] text-justify mb-5">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={StepA} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-black">
                    Adjust your bird's feeding strategy based on insights from
                    any feed intake deviations.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start lg:max-w-[1443px] lg:pr-[10rem] md:pr-[5rem] text-justify mb-5">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={StepB} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-black">
                    Monitoring your poultry's feed consumption and gain
                    real-time insight into the feed conversion ratio and the
                    cost per kilogram of meat or eggs.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start lg:max-w-[1443px] lg:pr-[10rem] md:pr-[5rem] text-justify mb-5">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <img src={StepC} alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-black">
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

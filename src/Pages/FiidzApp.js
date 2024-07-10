import React, { useRef, useState, useEffect } from "react";
import { Footer } from "../UI";
import ProductHeader from "./FiidzApp/ProductHeader";
import {
  AIStaff,
  FeedForm,
  FeedOptimizeImg,
  HerdManagement,
  MobileB,
  MobileC,
  MobileD,
  StepA,
  StepB,
  StepC,
  YiieldyApp,
  YiieldyFiidzA,
  YiieldyIntroVid,
} from "../Assets";
import { Pricing } from "../Components";
import "../App.css";
import '../fonts.css';

export default function FiidzApp() {
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
    <div className="font-sp-pro overflow-hidden">
      {/* HEADER */}
      <ProductHeader />

      {/* PRODUCT BODY SECTION */}

      {/* Hero - Product  */}
      <div className="px-2 py-16 lg:mt-0 mt-5 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 pt-20 lg:pt-10 lg:pb-0">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-2 lg:mb-0 max-w-[1443px] lg:pr-5">
            <div className="max-w-[1443px] mb-6">
              <h2 className="font-bold lg:mt-0 mt-5 text-black text-4xl lg:text-6xl leading-none max-w-[1443px] lg:pr-24 mb-6">
                Feed Smarter, Grow Stronger: Unlock Efficiency and Savings in
                Poultry Farming
              </h2>
              <p className="text-black font-regular text-base md:text-lg">
                Data-Driven Insights for Poultry Success: Optimize Feed
                Efficiency and Boost Profits
              </p>
            </div>
            <div className="lg:flex hidden items-start space-x-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
                className="transition duration-300 hover:shadow-lg bg-primaryColor p-3 lg:w-60 text-center text-white font-bold lg:h-auto w-auto rounded-[20px]"
              >
                Try for Free
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <img className="object-center lg:w-[60vw] w-auto" src={YiieldyFiidzA} alt="" />
            </div>
          </div>
          <div className="flex lg:hidden justify-center items-center space-x-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
              className="transition duration-300 hover:shadow-lg bg-primaryColor p-3 lg:w-96 w-80 text-center text-white font-bold lg:h-auto rounded-[20px]"
            >
              Try for Free
            </a>
          </div>
        </div>
      </div>

      {/* Body - Product  */}
      {/* Fiidz App Introduction */}
      <div className="px-2 py-16 lg:mt-0 mt-5 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:py-0 relative">
        <div className="circleDivLeft mt-5">
          <div className="circleLeft"></div>
        </div>
        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-[1443px] md:mb-12">
          <h2 className="lg:max-w-[1443px] font-sans text-3xl font-bold text-black lg:text-5xl md:mx-auto mb-5 text-center">
            Start Optimising Your Poultry Farm Today
          </h2>
        </div>
        <div className="mx-auto lg:max-w-[1443px] rounded-[20px]">
          <div className="flex justify-center">
            <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/QcMSfO2MVmc?si=h41IT0qchoh669la&rel=0"
                className="object-center w-full h-56 rounded-[20px] shadow-lg lg:h-[600px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {buttonVisible && (
                <button
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-56 lg:h-[600px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                  onClick={playVideo}
                >
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-start items-center px-10 mt-3">
            <p className="text-black font-bold">
              Yiieldy Fiidz App Introductory video
            </p>
          </div>
          <div className="circleDivRight -mt-[400px] -z-10">
            <div className="circleRight"></div>
          </div>
        </div>
      </div>

      {/* Features*/}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-8 lg:px-8">
        <div className="max-w-xl md:mx-auto text-center lg:max-w-[1443px]">
          <h2 className="max-w-[1443px] mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black lg:text-5xl md:mx-auto">
            Our Unique Features
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Explain anything clearly and effortlessly – and skip the meeting.
          </p>
        </div>

        {/* Fiidz Optimization */}
        <div className="flex flex-col items-center justify-between w-full lg:flex-row lg:mt-0 mt-5">
          <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6 lg:mt-0 mt-10">
              <div className="flex items-center justify-start lg:mb-8">
                <div>
                  <img
                    className="object-center lg:w-auto w-14 lg:mb-0 mb-4"
                    src={FeedOptimizeImg}
                    alt=""
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-black lg:text-4xl sm:leading-none max-w-lg mb-6">
                Feed quality and usage optimization.
              </h2>
              <p className="text-black text-base text-justify md:text-lg">
                Optimize your feed usage and maximize your yields, all while
                reducing costs and minimizing waste. Know how efficiently your
                birds convert feed into gains like meat or eggs. You can compare
                performance over time or across groups with its built-in animal
                growth and productivity intelligence for feed/bird performance.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <img className="object-cover w-auto" src={YiieldyFiidzA} alt="" />
            </div>
          </div>
        </div>

        {/* AI STaff */}
        <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
          <div className="flex items-center justify-center">
            <div>
              <img
                className="object-cover w-auto"
                src={MobileB}
                alt="AI STaff"
              />
            </div>
          </div>

          <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="flex items-center justify-start lg:mb-8">
                <div>
                  <img className="object-center lg:w-auto w-14 lg:mb-0 mb-4" src={AIStaff} alt="ai" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-black lg:text-4xl sm:leading-none max-w-lg mb-6">
                AI Staff.
              </h2>
              <p className="text-black text-base text-justify md:text-lg">
                Fiidz app brings AI assistant to poultry farmers, a crucial tool
                that has the potential to revolutionize the way we work in our
                poultry farms. It harnesses the power of artificial intelligence
                (AI) to provide real-time assistance, automate tasks, and
                facilitate knowledge sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Herds Management */}
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="flex items-center justify-start lg:mb-8">
                <div>
                  <img
                    className="object-center lg:w-auto w-14 lg:mb-0 mb-4"
                    src={HerdManagement}
                    alt="Herd"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-black lg:text-4xl sm:leading-none max-w-lg mb-6">
                Herds Management.
              </h2>
              <p className="text-black text-base text-justify md:text-lg">
                Fiidz app brings AI assistant to poultry farmers, a crucial tool
                that has the potential to revolutionize the way we work in our
                poultry farms. It harnesses the power of artificial intelligence
                (AI) to provide real-time assistance, automate tasks, and
                facilitate knowledge sharing.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <img className="object-cover w-auto" src={MobileC} alt="" />
            </div>
          </div>
        </div>

        {/* Feed Formulation*/}
        <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
          <div className="flex items-center justify-center">
            <div>
              <img
                className="object-cover w-auto"
                src={MobileD}
                alt="Feed Formulation"
              />
            </div>
          </div>

          <div className="mb-2 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="flex items-center justify-start lg:mb-8">
                <div>
                  <img className="object-center lg:w-auto w-14 lg:mb-0 mb-4" src={FeedForm} alt="" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-black lg:text-4xl sm:leading-none max-w-lg mb-6">
                Feed formulation/nutrient control.
              </h2>
              <p className="text-black text-base text-justify md:text-lg">
                Formulation feed using locally sourced ingredients to suit
                different types of birds and stages of production. Maximize feed
                production efficiency with our tracking system. Reduce costs
                while maintaining bird nutrition. Reduce dependence on imported
                feed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing-section">
        <div className="mb-10 flex flex-col gap-3">
          <h1 className="lg:text-5xl text-3xl font-bold text-center">
            Fiidz App options
          </h1>
          <div className="lg:px-48 sm:px-0 md:px-10 flex justify-center">
            <p className="text-center text-xl lg:w-[60%]">
              Pricing plans for businesses at every stage of growth. Try our
              risk-free for 14 days. No credit card required.
            </p>
          </div>
        </div>
        <Pricing />
      </div>

      {/* Yiieldy App */}
      <main className="px-8">
        <div className="px-4 py-16 mx-auto max-w-xl md:max-w-7xl lg:max-w-[1443px] md:px-0 lg:px-0 lg:py-20 md:py-32">
          <div className="lg:flex md:flex grid grid-cols-1 justify-items-between items-center">
            <div className="lg:py-6 lg:pr-16 lg:w-[70%] w-full">
              <div className="flex flex-col gap-2 mb-5">
                <h3 className="text-blackShadeB font-bold">Easy and Fast</h3>
                <h1 className="lg:text-5xl text-3xl font-bold text-black mb-8">Quick Overview</h1>
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
                  <p className="text-black">
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
                  <p className="text-black">
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

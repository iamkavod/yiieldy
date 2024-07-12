import React, { useRef, useState, useEffect } from "react";
import { Footer, Nav } from "../UI";
import { NewsA, NewsB, YiieldyUsersSec } from "../Assets";
import "../fonts.css";

export default function News() {
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
    <main className="bg-primaryColorLightB font-sp-pro">
      {/* Header */}
      <Nav />

      {/* Our News */}
      <div className="px-4 py-16 lg:pt-32 pt-32 mx-auto max-w-[1443px] md:px-5 lg:px-8 lg:py-32 bg-primaryColorLight">
        <div className="max-w-[1443px] lg:px-8 mb-10 md:mx-auto text-center md:mb-12">
          <h2 className="max-w-lg mb-6 text-4xl font-bold leading-none tracking-tight text-black lg:text-6xl md:mx-auto">
            Our News
          </h2>
          <p className="text-base text-gray-800 md:text-lg lg:text-[20px]">
            Get the latest updates and deeper coffee experience from Yiieldy
          </p>
        </div>
        <div className="mx-auto lg:max-w-full">
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
        </div>
        <div className="flex flex-col justify-start mt-4">
          <p className="font-bold text-2xl">
          improved feed efficiency, and enhance poultry performance.
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
        <div className="px-2 py-16 mx-auto max-w-[1443px] md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-8 lg:py-20">
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
                  <a href="https://www.legit.ng/business-economy/technology/1596484-from-software-soil-mfon-uwas-journey-revolutionize-poultry-farming-nigeria-yiieldy/" className="mb-2 font-bold lg:text-4xl text-xl">
                    From Software to Agric: Mfon Uwa's Journey to <br />{" "}
                    Revolutionise Poultry Farming in Nigeria with Yiieldy
                  </a>
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
                  <a href="https://poultrynews.africa/index.php/2024/06/10/nigerian-poultry-farmers-get-a-boost-new-app-fights-challenges-improves-profits/" className="mb-2 font-bold lg:text-4xl text-xl">
                    Nigerian Poultry Farmers Get a Boost: New App <br /> Fights
                    Challenges, Improves Profits
                  </a>
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

import React, { useRef, useState, useEffect } from "react";
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
import '../fonts.css';

export default function HelpSupport() {
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
    <main className="font-sp-pro">
      {/* Header */}
      <Nav />

      <section>
        {/* Help and Support Hero */}
        <div className="flex flex-col items-center justify-center max-w-7xl px-2 pt-28 mx-auto lg:max-w-[1443px] lg:pt-32 md:px-5">
          <div className="max-w-[1443px] mb-10 md:mx-auto text-center md:mb-12">
            <h2 className="max-w-[1443px] mb-6 text-4xl font-bold leading-none tracking-tight text-gray-900 lg:text-6xl md:mx-auto">
              Hi, how can we help you?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              You are welcome to a quick introduction to the Yiieldy-Fiidz
              mobile app. This Page will take you through a quick tour of the
              Yiieldy-Fiidz mobile app. We will go over a few aspects and
              interfaces of the Yiieldy-Fiidz app
            </p>
          </div>
          {/* <form className="flex flex-col items-center w-full mb-4 md:flex-row lg:px-20">
            <input
              placeholder="How do i set up my Yiieldy App"
              required=""
              type="text"
              className="flex-grow w-full  h-16 px-4 mb-3 transition duration-200  border border-primaryColor rounded-[20px] shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-350 focus:outline-none focus:shadow-outline placeholder:text-primaryColorLightB"
              id="helpinput"
            />
          </form> */}
          {/* <p className="max-w-auto mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
            Popular help topics: Camera & microphone test Getting Started Video
            Tutorials
          </p> */}
        </div>

        {/* App info */}
        <div className="px-4 py-16 mx-auto md:max-w-[1443px] md:px-5 lg:px-8 lg:py-10">
          <div className="grid md:gap-5 lg:gap-4 gap-3 lg:grid lg:grid-cols-3 justify-between md:grid-cols-2 grid-cols-1 mx-auto max-w-[1443px]">
            {/* Grid - 1 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <div className="flex justify-center">
                <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/uzGg3FKD4U4?si=BDypmeueee9Rsf5X&rel=0"
                    className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[350px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {buttonVisible && (
                    <button
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center w-full lg:h-[350px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                      onClick={playVideo}
                    >
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold leading-5 capitalize">
                      Production Batch
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    Keeping track of your birds and the feed you have in stock at your farm is crucial. This video provides a step-by-step guide for adding a Production Batch using the Fiidz app.
                  </p>
                  <div className="flex lg:lg:space-x-4 md:space-x-2 space-x-1 md:space-x-2 space-x-1 items-center">
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
              <div className="flex justify-center">
                <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/kDaxPzeeAac?si=fpT816MrFX0b15lc&rel=0"
                    className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[350px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {buttonVisible && (
                    <button
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center w-full lg:h-[350px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                      onClick={playVideo}
                    >
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Feed Inventory
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    This instructional video provides a step-by-step guide for adding a feed to your inventory using the Fiidz app.
                  </p>
                  <div className="flex lg:space-x-4 md:space-x-2 space-x-1 items-center">
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
              <div className="flex justify-center">
                <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/nHDdanFaSQk?si=jJY9OIRbPNIeRpQm&rel=0"
                    className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[350px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {buttonVisible && (
                    <button
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center w-full lg:h-[350px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                      onClick={playVideo}
                    >
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Finance
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    This video illustrates how to manage your farm finances using the Fiidz app.
                  </p>
                  <div className="flex lg:space-x-4 md:space-x-2 space-x-1 items-center">
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
              <div className="flex justify-center">
                <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/ERjBMZNZH9c?si=xVdU56jWyd96j-jJ&rel=0"
                    className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[350px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {buttonVisible && (
                    <button
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center w-full lg:h-[350px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                      onClick={playVideo}
                    >
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Contacts
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    You'll have access to a Contacts Directory within the Yiieldy Fiidz app to keep track of all the people you meet through your farm, including customers, employees, vendors, suppliers, and veterinarians.
                    This video provides a step-by-step guide for adding contacts using the Fiidz app.
                  </p>
                  <div className="flex lg:space-x-4 md:space-x-2 space-x-1 items-center">
                    <p>
                      306K <span>views</span>
                    </p>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <p>Streamed 22 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid - 5 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <div className="flex justify-center">
                <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/trkCexY8Po0?si=9caHOlz5LQMQawWv&rel=0"
                    className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[350px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {buttonVisible && (
                    <button
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center w-full lg:h-[350px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                      onClick={playVideo}
                    >
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Brooders / Pen House
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    Brooders, or pen houses, are very important in poultry farming. A brooder is a space designed to raise baby chicks from one day old to about eight weeks of age. This video provides a step-by-step guide for adding brooders or pen houses using the Fiidz app
                  </p>
                  <div className="flex lg:space-x-4 md:space-x-2 space-x-1 items-center">
                    <p>
                      306K <span>views</span>
                    </p>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <p>Streamed 22 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid - 6 */}
            <div className="overflow-hidden transition-shadow duration-300  rounded">
              <div className="flex justify-center">
                <div className="relative w-full rounded-[20px] transition-shadow duration-300 hover:shadow-xl">
                  <iframe
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/C4TC1MVKnqo?si=S1XOCPHGd-U6e2sh&rel=0"
                    className="object-center w-full h-56 rounded-[20px] shadow-lg md:h-80 lg:h-[350px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {buttonVisible && (
                    <button
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center w-full lg:h-[350px] transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-[20px]"
                      onClick={playVideo}
                    >
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="py-5">
                  <img src={YiieldyLogoIcon} alt="yiieldy" />
                </div>
                <div className="py-5">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200"
                  >
                    <p className="text-2xl font-bold leading-5">
                      Users
                    </p>
                  </a>
                  <p className="mb-4 text-gray-700 w-[80%]">
                    With your Yiieldy Fiidz farm account, you can add your employees or co-workers as app users, giving them access to the app. This video takes you through the process step-by-step.
                  </p>
                  <div className="flex lg:space-x-4 md:space-x-2 space-x-1 items-center">
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
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 mt-6xl z-20">
                <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                  <h2 className="mb-5 text-4xl font-bold text-primaryColor lg:text-6xl leading-none text-center">
                    Need more help?
                  </h2>
                  <p className="mb-5 text-base text-primaryColor lg:text-[20px] text-center">
                    Connect with our team. We’re here to help!
                  </p>
                  <div className="flex items-center justify-center gap-x-6 overflow-hidden mt-10">
                    <a
                      href="/contact"
                      className="bg-primaryColorLight w-40 py-4 my-auto lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold text-primaryColor shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-full text-center hover:text-white"
                    >
                      Contact Support
                    </a>
                    <a
                      href="#"
                      className="rounded-full  w-40 py-4 lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold border border-primaryColor text-primaryColor shadow-sm hover:bg-primaryColor hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorLight text-center "
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

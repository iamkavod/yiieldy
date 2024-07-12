import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AppA, AppB, Logo, WeatherAppCarousel, YiieldyAppCarousel } from "../Assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../App.css";
import Nav from './Nav';
import '../fonts.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setHasScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white overflow-hidden font-sp-pro">
      <Nav />

      <div className="relative px-0 pt-14 md:px-5 lg:px-8">
        <div className="circleDivLeft">
          <div className="circleLeft"></div>
        </div>
        <div className="mx-auto max-w-[1443px] py-10 py-20 lg:py-20 lg:px-8 px-1">
          <div className="text-center font-sp-pro">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl text-center">
                Yiieldy - Agriculture, AI, and Sustainability
              </h1>
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "customActive",
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex flex-col gap-10 justify-center items-center lg:max-w-[1443px] max-w-full">
                    <p className="text-lg leading-8 text-gray-600 font-regular">
                      Yiieldy offers a complete agricultural services platform.
                    </p>
                    <div className="flex items-center justify-center gap-x-6">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.yiieldy.fiidz.twa&pli=1"
                        className="bg-primaryColor w-32 py-4 my-auto lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold text-white shadow-sm hover:opacity-[.9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-full"
                      >
                        Fiidz App
                      </a>
                      <a
                        href="/fiidzapp"
                        className="rounded-full bg-primaryColorLight w-32 py-4 lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold border border-primaryColor text-primaryColor shadow-sm hover:opacity-[.9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorLight"
                      >
                        Learn More
                      </a>
                    </div>
                    <img
                      src={YiieldyAppCarousel}
                      alt="yiieldy"
                      className="h-36 w-auto lg:h-96 lg:w-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-10 justify-center items-center">
                    <p className="text-lg leading-8 text-gray-600 font-regular">
                      Yiieldy offers a complete agricultural services platform.
                    </p>
                    <div className="flex items-center justify-center gap-x-6">
                      <a
                        href="#"
                        className="bg-primaryColor w-32 py-4 my-auto lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold text-white shadow-sm hover:opacity-[.9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-full"
                      >
                        Weather App
                      </a>
                      <a
                        href="#"
                        className="rounded-full bg-primaryColorLight w-32 py-4 lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold border border-primaryColor text-primaryColor shadow-sm hover:opacity-[.9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorLight"
                      >
                        Learn More
                      </a>
                    </div>
                    <img
                      src={WeatherAppCarousel}
                      alt="yiieldy"
                      className="h-36 w-auto lg:h-96 lg:w-auto"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="circleDivRight">
          <div className="circleRight"></div>
        </div>
      </div>
    </div>
  );
}

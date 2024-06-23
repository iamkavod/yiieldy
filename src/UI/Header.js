import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AppA, AppB, Logo } from "../Assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../App.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

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
    <div className="bg-white overflow-hidden">
      <header
        className={`bg-${
          hasScrolled ? "white" : "transparent"
        } fixed top-0 w-full z-50`}
      >
        <div class="px-1 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Yiieldy"
              title="Yiieldy"
              class="inline-flex items-center"
            >
              <img src={Logo} alt="Logo" className="lg:w-auto lg:h-auto w-20" />
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li
                className={location.pathname === "/fiidzapp" ? "active" : ""}
                onMouseEnter={toggleDropdown}
                onMouseLeave={() => toggleDropdown(false)}
              >
                <a
                  aria-label="Products"
                  className="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor cursor-pointer"
                >
                  Products
                </a>
                {isDropdownVisible && (
                  <ul className="dropdown-menu absolute space-y-2 bg-white shadow-lg rounded-lg">
                    <li>
                      <NavLink
                        to={"/fiidzapp"}
                        aria-label="FiidzApp"
                        className="block px-4 py-2 text-blackShadeD hover:bg-gray-200"
                      >
                        FiidzApp
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={location.pathname === "/resources" ? "active" : ""}
              >
                <NavLink
                  to={"/resources"}
                  aria-label="Resources"
                  class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                >
                  Resources
                </NavLink>
              </li>
              <li className={location.pathname === "/pricing" ? "active" : ""}>
                <NavLink
                  to={"/pricing"}
                  aria-label="Pricing"
                  class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                >
                  Pricing
                </NavLink>
              </li>
              <li className={location.pathname === "/service" ? "active" : ""}>
                <NavLink
                  to={"/service"}
                  aria-label="Service"
                  class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                >
                  Service
                </NavLink>
              </li>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <NavLink
                  to={"/about"}
                  aria-label="About us"
                  class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-whiteShade transition duration-200 shadow-md bg-primaryColor hover:bg-primaryColor focus:shadow-outline focus:outline-none rounded-full"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="bg-white h-[100vh]">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Yiieldy"
                          title="Yiieldy"
                          class="inline-flex items-center"
                        >
                          <img
                            src={Logo}
                            alt="Logo"
                            className="lg:w-auto lg:h-auto w-20"
                          />
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4 px-2">
                        <li>
                          <a
                            href="/"
                            aria-label="Products"
                            class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                          >
                            Products
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Resources"
                            class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                          >
                            Resources
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Pricing"
                            class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Service"
                            class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                          >
                            Service
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Contact Us"
                            class="font-medium tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="relative px-6 pt-14 lg:px-8">
        <div className="circleDivLeft">
          <div className="circleLeft"></div>
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Yiieldy - Agriculture, AI, and Sustainability
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Yiieldy offers a complete agricultural services platform. Maximize
              the features and flexibility of accelerate and boost productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <img
                src={AppA}
                alt="yiieldy"
                className="h-36 w-auto lg:h-96 lg:w-auto"
              />
              <img
                src={AppB}
                alt="yiieldy"
                className="h-36 w-auto lg:h-96 lg:w-auto"
              />
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-primaryColor w-96 py-4 my-auto lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor rounded-full"
              >
                Learn More
              </a>
              <a
                href="#"
                className="rounded-full bg-primaryColorLight w-96 py-4 lg:w-60 lg:py-4 text-xs lg:text-sm font-semibold border border-primaryColor text-primaryColor shadow-sm hover:bg-primaryColorLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorLight"
              >
                Contact Us
              </a>
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

import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Logo } from "../../Assets";
import '../../fonts.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductHeader() {
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
    <header
      className={`bg-${
        hasScrolled ? "white" : "white"
      } fixed top-0 w-full z-50 font-sp-pro`}
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
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:text-primaryColor">
                    Products
                    <ChevronDownIcon
                      className="-mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[hover]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to={"/fiidzapp"}
                          className={classNames(
                            focus
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          FiidzApp
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:text-primaryColor">
                    Resources
                    <ChevronDownIcon
                      className="-mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[hover]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to={"/news"}
                          className={classNames(
                            focus
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          News
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to={"/helpandsupport"}
                          className={classNames(
                            focus
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Help and Support
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
            <li className={location.pathname === "/pricing" ? "active" : ""}>
              <NavLink
                to={"/pricing"}
                aria-label="Pricing"
                class="tracking-wide text-blackShadeD transition-colors duration-200 text-sm font-bold text-gray-900 hover:text-primaryColor"
              >
                Pricing
              </NavLink>
            </li>
            <li className={location.pathname === "/service" ? "active" : ""}>
              <NavLink
                to={"/service"}
                aria-label="Service"
                class="tracking-wide text-blackShadeD transition-colors duration-200 text-sm font-bold text-gray-900 hover:text-primaryColor"
              >
                Service
              </NavLink>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <NavLink
                to={"/about"}
                aria-label="About us"
                class="tracking-wide text-blackShadeD transition-colors duration-200 text-sm font-bold text-gray-900 hover:text-primaryColor"
              >
                About us
              </NavLink>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <NavLink
                to={"https://fiidz.yiieldy.com/"}
                aria-label="signin"
                class="tracking-wide text-blackShadeD transition-colors duration-200 text-sm font-bold text-gray-900 hover:text-primaryColor"
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <Link
                to={"https://fiidz.yiieldy.com/Home/Account01"}
                class="inline-flex items-center justify-center h-12 px-6 tracking-wide text-whiteShade transition duration-200 shadow-md bg-primaryColor hover:bg-primaryColor focus:shadow-outline focus:outline-none rounded-full text-sm font-bold"
                aria-label="Contact Us"
              >
                Sign Up
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
                        <Link
                          to={"/products"}
                          aria-label="Products"
                          class="tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/resources"}
                          aria-label="Resources"
                          class="tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/pricing"}
                          aria-label="Pricing"
                          class="tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          // to={"/service"}
                          aria-label="Service"
                          class="tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                        >
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/about"}
                          aria-label="About us"
                          class="tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/contact"}
                          aria-label="Contact Us"
                          class="tracking-wide text-blackShadeD transition-colors duration-200 hover:text-primaryColor"
                        >
                          Contact Us
                        </Link>
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
  );
}

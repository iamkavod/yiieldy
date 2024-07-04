import React, { useState } from "react";
import { FooterBg, Instagram, Linkedin, LogoWhite } from "../Assets";
import { Link } from "react-router-dom";
import { Cookies } from "../Components";
import '../fonts.css';

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <footer className="font-sp-pro">
      <div className="relative mt-16 bg-primaryColorDark">
        <img
          src={FooterBg}
          alt="footer"
          className="absolute top-0 w-full h-20 -mt-5 lg:-mt-10 lg:h-40 -z-40"
        />
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <img src={LogoWhite} alt="Logo" className="w-40" />
              </a>
              <div className="mt-4 lg:max-w-sm flex gap-2 items-center">
                <p className="text-2xl text-primaryColorLight">Follow us on:</p>
                <img src={Instagram} alt="Instagram" className="w-10" />
                <img src={Linkedin} alt="Linkedin" className="w-10" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
              <div>
                <p className="font-bold text-3xl tracking-wide text-primaryColorLight">
                  Support
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to={"/faqs"}
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      FAQ'S
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/terms-of-service"}
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Terms and condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/privacy-policy"}
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-3xl tracking-wide text-primaryColorLight">
                  Company
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to={"/about"}
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/service"}
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact"}
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      href="/"
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Career
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <p className="font-bold lg:text-3xl md:text-2xl text-xl tracking-wide text-primaryColorLight">
                  Contact Info
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="telephone: +(234)9139218797"
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Chat Us: +(234)9139218797
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto: contactus@yiieldy.com"
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Email Us: contactus@yiieldy.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                    >
                      Office: #10 olasuru street, lekki Lagos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-lg text-primaryColorLight">
              Copyright © Yiieldy 2024. All Rights Reserved
            </p>
            <div className="flex items-center mt-4 space-x-20 sm:mt-0">
              <Link
                to={"/terms-of-service"}
                className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
              >
                Terms of Service
              </Link>
              <Link
                to={"/privacy-policy"}
                className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
              >
                Privacy Policy
              </Link>
              <a
                href="/"
                className="transition-colors text-lg duration-300 text-primaryColorLight hover:text-teal-accent-400"
                onClick={handlePopup}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      <Cookies show={showPopup} />
    </footer>
  );
}

import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import Nav from "../UI/Nav";
import "../fonts.css";
import { Footer } from "../UI";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  return (
    <main className="font-sp-pro bg-primaryColorLightB">
      {/* Header */}
      <Nav />

      {/* Contact Us */}
      <div className="isolate px-6 py-24 py-32 md:5 lg:px-8">
        <div className="mx-auto max-w-[1443px] text-center">
          <h2 className="lg:text-6xl font-bold text-black text-4xl">
          Drop us a message for any query
          </h2>
          <p className="mt-2 text-lg leading-8 text-black">
          Feel free to reach out with any questions or concerns by sending us a message. We're here to assist you!
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-[1443px] lg:mt-20 mt-5 bg-white p-10 rounded-[20px]"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-black"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="phone-number"
                className="block text-sm font-bold leading-6 text-black"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full h-10 rounded-md border-0 px-2 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                  placeholder="Enter Phone Number With Country Code"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 h-40 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                  placeholder="Enter your messasage here"
                  defaultValue={""}
                />
              </div>
            </div>
            
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-primaryColor px-3.5 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor"
            >
              Send Us A Message
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

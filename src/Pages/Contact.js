import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import Nav from "../UI/Nav";
import "../fonts.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  return (
    <main className="font-sp-pro">
      {/* Header */}
      <Nav />

      {/* Contact Us */}
      <div className="isolate bg-primaryColorLightB px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-6xl font-bold tracking-tight text-primaryColor sm:text-4xl">
          Drop us a message for any query
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Feel free to reach out with any questions or concerns by sending us a message. We're here to assist you!
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white p-10 rounded-[20px]"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <input
                    value={"+234"}
                    readOnly
                    className="h-full w-10 rounded-md border-0 bg-transparent bg-none py-0 pl-2 text-gray-400 sm:text-sm outline-none"
                  />
                  {/* <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 sm:text-sm"
                  >
                    
                    <option>+234</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select> */}
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full h-10 rounded-md border-0 pl-[42px] px-2 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                  // placeholder="+234"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 h-40 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
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
    </main>
  );
}

import React, { useState } from "react";
import { CloseMinusBtn, OpenPlusBtn } from "../Assets";
import { Footer, Nav } from '../UI'

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-bold text-primaryColor text-start">{title}</p>
        <img
          src={isOpen ? CloseMinusBtn : OpenPlusBtn}
          alt={isOpen ? "Collapse" : "Expand"}
          className="w-5"
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 bg-primaryColorLightB p-5">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function Faqs() {
  return (
    <main>
      <Nav />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-[1443px] bg-primaryColorLightB lg:py-20 lg:pt-40 mt-auto">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-6xl md:mx-auto">
                FAQ'S
              </h2>
              <p className="text-base text-primaryColor md:text-lg">
                Resolving Common Problems: Troubleshooting common issues our users might encounter while using our products or services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-[1443px] lg:px-40">
          <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-[50px] md:mx-auto text-center">
              Answers to Frequently Asked Questions
            </h2>
            <p class="text-[20px] text-gray-700">
              We’re here to teach, guide, and support.
            </p>
          </div>
          <div class="space-y-4">
            <Item title="What is Yiieldy, and how does it work?">
              Yiieldy is a comprehensive AgTech platform with various products and apps that help farmers grow and manage their farm businesses
            </Item>
            <Item title="Could you please provide me with the pricing information for the Yiieldy app?"></Item>
            <Item title="Experiencing problems paying?"></Item>
            <Item title="How do I reset my password?"></Item>
            <Item title="Can you please suggest other ways to demonstrate our data's safety?"></Item>
            <Item title="Is it possible for my employees to enter data into the Yiieldy application?"></Item>
            <Item title="How can I receive assistance with my account or obtain responses to my inquiries?"></Item>
            <Item title="Do I have to create an account to use Yiieldy app features?"></Item>
            <Item title="What payment methods do you accept?"></Item>
            <Item title="What currencies can I use?"></Item>
            <Item title="I'm having trouble logging into my account; what should I do?"></Item>
            <Item title="Can you confirm if my data is secure?"></Item>
            <Item title="How can I remove my personal information from your database?"></Item>
            <Item title="Could you please clarify the size or type of farmers that Yiieldy supports?"></Item>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-[1443px] lg:py-5">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-2xl md:mx-auto">
                Still have a question?
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Reach out to us for an enquiry not listed
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-16 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-primaryColor hover:opacity-[.9] focus:shadow-outline focus:outline-none w-[60%]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

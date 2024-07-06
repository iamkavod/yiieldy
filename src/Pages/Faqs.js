import React, { useState, useEffect, useRef } from "react";
import { CloseMinusBtn, OpenPlusBtn } from "../Assets";
import { Footer, Nav } from '../UI';

const Item = React.forwardRef(({ title, children, isOpen, onClick }, ref) => (
  <div className="border-b" ref={ref}>
    <button
      type="button"
      aria-label="Open item"
      title="Open item"
      className="flex items-center justify-between w-full p-4 focus:outline-none"
      onClick={onClick}
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
));

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (itemRefs.current.every((ref) => ref && !ref.contains(event.target))) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-[1443px] lg:px-40">
          <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-[50px] md:mx-auto text-center">
              Answers to Frequently Asked Questions
            </h2>
            <p className="text-[20px] text-gray-700">
              We’re here to teach, guide, and support.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "What is Yiieldy, and how does it work?",
              "Could you please provide me with the pricing information for the Yiieldy app?",
              "Experiencing problems paying?",
              "How do I reset my password?",
              "Can you please suggest other ways to demonstrate our data's safety?",
              "Is it possible for my employees to enter data into the Yiieldy application?",
              "How can I receive assistance with my account or obtain responses to my inquiries?",
              "Do I have to create an account to use Yiieldy app features?",
              "What payment methods do you accept?",
              "What currencies can I use?",
              "I'm having trouble logging into my account; what should I do?",
              "Can you confirm if my data is secure?",
              "How can I remove my personal information from your database?",
              "Could you please clarify the size or type of farmers that Yiieldy supports?",
            ].map((title, index) => (
              <Item
                key={index}
                title={title}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                {index === 0 && "Yiieldy is a comprehensive AgTech platform with various products and apps that help farmers grow and manage their farm businesses"}
              </Item>
            ))}
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

import React, { useState, useEffect, useRef } from "react";
import { CloseMinusBtn, OpenPlusBtn } from "../Assets";
import '../fonts.css';

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
        <p className="text-black bg-primaryColorLightB p-5">{children}</p>
      </div>
    )}
  </div>
));

const FAQS = () => {
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
    <div className="px-4 py-16 mx-auto md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:py-20 font-sp-pro">
      <div className="max-w-[1443px] mx-auto lg:max-w-[1443px] lg:px-40">
        <div className="max-w-[1443px] mb-10 md:mx-auto text-center md:mb-12">
          <h2 className="max-w-[1443px] mb-6 lg:text-6xl text-4xl font-bold leading-none tracking-tight md:mx-auto text-center">
            Answers to Frequently Asked Questions
          </h2>
          <p className="text-[20px] text-black">
            We’re here to teach, guide, and support.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Is there a free trial and what is the duration?",
            "Is there a free trial available?",
          ].map((title, index) => (
            <Item
              key={index}
              title={title}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              {index === 0 && (
                "No, there are no free plans however, there are free service picks, promotions and frequent coupon codes for our users which can earn you discounts and free services depending on your service order."
              )}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;

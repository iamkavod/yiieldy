import React, { useState } from "react";
import { CloseMinusBtn, OpenPlusBtn } from "../Assets";

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
          <p className="text-gray-700 bg-primaryColorLightC p-5">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQS() {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8 lg:py-20 ">
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
          <Item title="Is there a free trial and what is the duration?">
            No, there are no free plans however, there are free service picks,
            promotions and frequent coupon codes for our users which can earn
            you discounts and free services depending on your service order.
          </Item>
          <Item title="Is there a free trial available?"></Item>
        </div>
      </div>
    </div>
  );
}

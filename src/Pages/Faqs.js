import React, { useState, useEffect, useRef } from "react";
import { CloseMinusBtn, OpenPlusBtn } from "../Assets";
import { Footer, Nav } from '../UI';
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
    <main className="font-sp-pro">
      <Nav />
      <div className="py-16 mx-auto max-w-[1443px] bg-primaryColorLightB lg:py-20 md:pt-40 lg:pt-40 mt-auto lg:px-8 md:px-5 px-2">
        <div className="max-w-[1443px] mx-auto">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="mb-10 md:mx-auto sm:text-center max-w-[1443px] md:mb-12">
              <h2 className="max-w-[1443px] mb-6 text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-6xl md:mx-auto">
                FAQ'S
              </h2>
              <p className="text-base text-primaryColor md:text-lg">
                Resolving Common Problems: Troubleshooting common issues our users might encounter while using our products or services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 mx-auto max-w-[1443px] lg:px-8 md:px-5 lg:py-20 ">
        <div className="mx-auto max-w-[1443px] md:px-5 px-2">
          <div className="max-w-[1443px] mb-10 md:mx-auto text-center md:mb-12">
            <h2 className="max-w-[1443px] mb-6 text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-[50px] md:mx-auto text-center">
              Answers to Frequently Asked Questions
            </h2>
            <p className="text-[20px] text-gray-700">
              We’re here to teach, guide, and support.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "What is Yiieldy, and how does it work?",
              "Do I have to create an account to use Yiieldy app features?",
              "Could you please provide me with the pricing information for the Yiieldy app?",
              "What payment methods do you accept?",
              "Experiencing problems paying?",
              "What currencies can I use?",
              "Can I cancel anytime?",
              "I'm having trouble logging into my account; what should I do?",
              "How do I reset my password?",
              "Can you confirm if my data is secure?",
              "Can you please suggest other ways to demonstrate our data's safety?",
              "How can I remove my personal information from your database?",
              " Is it possible for my employees to enter data into the Yiieldy application?",
              "Could you please clarify the size or type of farmers that Yiieldy supports?",
              "How can I receive assistance with my account or obtain responses to my inquiries?",
            ].map((title, index) => (
              <Item
                key={index}
                title={title}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                {index === 0 && "Yiieldy is a comprehensive AgTech platform with various products and apps that help farmers grow and manage their farm businesses"}
                {index === 1 && "Yes. You only need to create one login account to access all Yiieldy apps."}
                {index === 2 && "The cost of subscribing to a Yiieldy app varies depending on the specific app you are interested in. You can sign up for free and enjoy a five-day trial period without needing payment during the sign-up process. Once your trial expires, you can opt for a pricing plan that suits your needs."}
                {index === 3 && "We accept debit or credit card payments."}
                {index === 4 && "Please consider trying an alternative payment method or contacting our support team for assistance."}
                {index === 5 && "Now, we are currently receiving only Nigerian Naira. If there are any currencies you are looking for that aren't presently available, please get in touch with our support team."}
                {index === 6 && "Yes, You can cancel your subscription at any time, either by accessing the app's billing page or by contacting us."}
                {index === 7 && "Please try resetting your password initially. If this still doesn't work, please contact our support team with your account details, and we'll try to help!"}
                {index === 8 && "We'll need to reset your password if you can't remember it."}
                {index === 9 && "Yes. We prioritize your data security and privacy. Your data is always safe; we never sell or share it with anyone. We use encrypted data transmission (SSL) and perform regular backups to ensure its safety. You can rest assured that your data remains exclusively yours."}

                {index === 10 &&
                  <ol className="list-decimal px-5 text-justify flex flex-col gap-2">
                    <li>Yiieldy, our secure platform, is hosted on Microsoft Azure, a leading cloud hosting provider. Please note that you can view the security and compliance standards that Azure meets by clicking on the following link: <a className="text-green" href="https://azure.microsoft.com/en-us/explore/trusted-cloud/">https://azure.microsoft.com/en-us/explore/trusted-cloud/</a></li>
                    <li>All data is encrypted in transit using SSL/HTTPS encryption. Additionally, all passwords are one-way hashed using strong cryptography.</li>
                    <li>We follow secure coding standards (OWASP) and limit access to customer accounts to authorized personnel for customer support.</li>
                    <li>We minimize the collection of Personally Identifiable Information (PII) from our clients to what is necessary and never sell or share any of your data with anyone.</li>
                  </ol>
                }
                {index === 11 && "If you want all information about yourself removed from our database, please contact our support team with your email address."}
                {index === 12 && "It is possible by creating additional users in the app."}
                {index === 13 && "Our Yiieldy products are designed to be highly flexible, enabling us to assist a wide range of agricultural businesses. Yiieldy caters to all types of farms."}
                {index === 14 && "You can reach out to us anytime for assistance. You can also browse our online help resources or register for one of our online trainings."}
              </Item>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-3 mx-auto max-w-[1443px] lg:py-5">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 text-2xl md:mx-auto">
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

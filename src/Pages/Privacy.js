import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Assets";
import { Footer, Nav } from "../UI";

const navigation = [
  { name: "Product", href: "#product-section" },
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Support", href: "#footer-section" },
];

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Nav />
      {/* PRIVACY HERO SECTION */}
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-[1443px] bg-white lg:pt-40 mt-auto">
        <div className="max-w-xl sm:mx-auto lg:max-w-[700px]">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-[1443px] md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-6xl md:mx-auto">
                Privacy Policy
              </h2>
              <p className="text-base text-primaryColor md:text-lg">
              This policy details clear and concise instructions for users to opt out of specific data collection, marketing communications, or other activities outlined in the privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRIVACY POLICY SECTION */}
      <div
        className="px-4 mx-auto max-w-xl md:max-w-full lg:max-w-[1443px] md:px-24 lg:px-8"
        id="privacy"
      >
        <div className="max-w-[1443px] mx-auto">
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <div className="relative">
                <p className="text-base text-gray-700 md:text-lg text-center">
                  {/* Welcome to our Privacy Policy. This document explains how we
                  collect, use, disclose, and protect your personal information
                  when you use our services. We are committed to respecting your
                  privacy and ensuring the confidentiality and security of your
                  personal information. */}
                  This document explains how we collect, use, disclose, and
                  protect your personal information when you utilize our
                  services. We are committed to respecting your privacy and
                  ensuring the confidentiality and security of your personal
                  information.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <div className="relative">
                <p>
                  We may collect various types of information, including but not
                  limited to:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>
                    Personal Information: Name, contact information, email
                    address, etc.
                  </li>
                  <li>
                    Usage Information: Data about your interaction with our
                    services, including log data and analytics.
                  </li>
                  <li>
                    Cookies and Tracking: Information obtained through cookies
                    and similar technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Information We Collect:
              </h2>
              <div className="relative">
                <p>
                  We may collect various types of information, including but not
                  limited to:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>
                    Personal Information: Name, contact information, email
                    address, etc.
                  </li>
                  <li>
                    Usage Information: Data about your interaction with our
                    services, including log data and analytics.
                  </li>
                  <li>
                    Cookies and Tracking: Information obtained through cookies
                    and similar technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                How We Use Your Information:
              </h2>
              <div className="relative">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>Provide and maintain our services.</li>
                  <li>Personalize and enhance your experience.</li>
                  <li>Communicate with you and respond to inquiries.</li>
                  <li>Monitor and analyze usage patterns and trends.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Data Sharing and Disclosure:
              </h2>
              <div className="relative">
                <p>
                  We may share your information with third parties in the
                  following circumstances:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>With your consent.</li>
                  <li>To comply with legal obligations.</li>
                  <li>For legitimate business purposes.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Data Security:
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.:
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Your Rights and Choices:
              </h2>
              <div className="relative">
                <p>You have the right to:</p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>Access and correct your personal information.</li>
                  <li>Opt-out of receiving communications from us.</li>
                  <li>Request the deletion of your personal information.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Third-Party Links:
              </h2>
              <p>
                Our services may contain links to third-party websites. We are
                not responsible for the content or privacy practices of these
                websites.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Changes to this Privacy Policy:
              </h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page, and the effective date will be updated
                accordingly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Contact Us:
              </h2>
              <div className="relative">
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>
                    <a
                      href="https://wa.me/message/HN4LGKGKTJCKH1"
                      className="transition-colors duration-300 text-gray-800 hover:text-gray-500 hover:text-teal-accent-400 lg:text-xl sm:text-sm"
                    >
                      <span className="text-gray-800 font-bold lg:text-xl sm:text-sm">
                        Chat Us:{" "}
                        <span className="lg:text-xl sm:text-sm font-normal text-gray-700">
                          +(234)9139218797
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="text-sm text-gray-900">
                    <a
                      href="mailto:contactus@yiieldy.com"
                      className="transition-colors duration-300 text-gray-800 hover:text-gray-500 hover:text-teal-accent-400 text-xl"
                    >
                      <span className="text-gray-800 font-bold text-xl flex gap-3">
                        Email:
                        <span className="text-xl font-normal text-gray-700">
                          contactus@yiieldy.com
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
                <p>
                  By using our services, you consent to the terms outlined in
                  this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

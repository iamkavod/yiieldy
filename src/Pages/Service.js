import React from "react";
import { ConsultancyServices, DynamicWebminars, InteractiveWorkshop, OnsiteTrainingSessions } from "../Assets";
import ProductHeader from '../Pages/FiidzApp/ProductHeader';
import Footer from '../UI/Footer';

export default function Service() {
  return (
    <main>
      {/* Header */}
      <ProductHeader />

      {/* Our Services */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primaryColor lg:text-[60px] md:mx-auto">
            Our Services
          </h2>
          <p className="text-base text-gray-700 md:text-sm">
            We specialize in delivering tailored training solutions to precisely
            meet your organization's needs. Our robust training options include
            interactive workshops, dynamic webinars, on-site training sessions
            led by industry experts, and customized consultancy services. For
            comprehensive information and queries, feel free to contact our
            sales team at marketing@yiieldy.com. We are fully committed to
            helping you achieve your training objectives and look forward to
            discussing your requirements in detail.
          </p>
        </div>
        <div className="grid lg:gap-20 gap-5 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-20">
          <div className="p-8 duration-300 transform bg-primaryColorLightB border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img src={InteractiveWorkshop} alt="interractive workshop" className="w-20 h-20" />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-primaryColor lg:text-[40px] twxt-[20px]">
              Interactive <br /> Workshops,
            </h6>
            <p className="lg:text-[20px] text-gray-900">
              Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi nam{" "}
              <br />
              diam interdum
            </p>
          </div>
          <div className="p-8 duration-300 transform bg-primaryColorLightB border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
            <img src={DynamicWebminars} alt="interractive workshop" className="w-20 h-20" />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-primaryColor lg:text-[40px] twxt-[20px]">
              Dynamic <br /> Webinars
            </h6>
            <p className="lg:text-[20px] text-gray-900">
              Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi nam{" "}
              <br />
              diam interdum
            </p>
          </div>
          <div className="p-8 duration-300 transform bg-primaryColorLightB border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img src={OnsiteTrainingSessions} alt="interractive workshop" className="w-20 h-20" />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-primaryColor lg:text-[40px] twxt-[20px]">
              On-site <br /> training sessions
            </h6>
            <p className="lg:text-[20px] text-gray-900">
              Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi nam{" "}
              <br />
              diam interdum
            </p>
          </div>
          <div className="p-8 duration-300 transform bg-primaryColorLightB border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img src={ConsultancyServices} alt="interractive workshop" className="w-20 h-20" />
            </div>
            <h6 className="mb-2 font-semibold leading-10 text-primaryColor lg:text-[40px] twxt-[20px] capitalize">
            consultancy services. 
            </h6>
            <p className="lg:text-[20px] text-gray-900">
              Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi nam{" "}
              <br />
              diam interdum
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

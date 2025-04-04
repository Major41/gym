import React from "react";
import { FaArrowAltCircleRight, FaArrowRight, FaCheck } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Subscription = () => {
  return (
    <div id="pricing" className="bg-[#13262e] w-full h-full py-20">
      <div className="w-[90%] mx-auto">
        <h2 className="text text-xl font-bold mb-4">Subscriptions</h2>

        <h2 className=" text-3xl lg:text-5xl font-bold mb-20 text-white">
          FLEXIBLE
          <span className="text"> PLANS </span>
          FOR EVERY GOAL
        </h2>

        <div className="flex flex-col md:flex-row gap-10 justify-evenly">
          <div className="flex w-full flex-col justify-evenly bg-[#203036] py-10 px-5 rounded-2xl">
            <h3 className="text-center text-white text-2xl font-bold mb-4">
              Basic
            </h3>
            <p className="text-white text-2xl mb-2">
              $25 <span className="text-[#a1a1a1] text-sm">/monthly</span>
            </p>
            <p className="text-[#a1a1a1] mb-4">
              Essential package for regular workouts
            </p>

            <div className="flex flex-col mb-20">
              <h2 className="text-[#a1a1a1] mb-2">WHAT YOU GET </h2>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Unlimited access to the
                gym{" "}
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> 1 free group class per
                month{" "}
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Free access to relaxation
                areas{" "}
              </p>
            </div>
            <button className="flex items-center text-lg justify-center gap-2 text-white py-2 px-4 rounded-lg bg-[#1a1a1a] transition duration-300">
              Get Started <FaArrowRight className="-rotate-45" />
            </button>
          </div>

          {/* Standard */}
          <div className="flex w-full flex-col bg justify-evenly bg-[#203036] py-10 px-5 rounded-2xl">
            <h3 className="text-center text-white text-2xl font-bold mb-4">
              Standard
            </h3>
            <p className="text-white text-2xl mb-2">
              $35 <span className="text-[#a1a1a1] text-sm">/monthly</span>
            </p>
            <p className="text-[#a1a1a1] mb-4">
              Extended package for comprehensive training
            </p>

            <div className="flex flex-col mb-20">
              <h2 className="text-[#a1a1a1] mb-2">WHAT YOU GET </h2>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Unlimited access to the
                gym{" "}
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> 3 free group class per
                month{" "}
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Free access to relaxation
                areas and Sauna{" "}
              </p>
            </div>
            <button className="flex items-center text-lg justify-center gap-2 text-white py-2 px-4 rounded-lg bg-[#ff4f00] transition duration-300">
              Get Started <FaArrowRight className="-rotate-45" />
            </button>
          </div>

          {/* Premium */}
          <div className="flex w-full flex-col justify-evenly bg-[#203036] py-10 px-5 rounded-2xl">
            <h3 className="text-center text-white text-2xl font-bold mb-4">
              Premium
            </h3>
            <p className="text-white text-2xl mb-2">
              $45 <span className="text-[#a1a1a1] text-sm">/monthly</span>
            </p>
            <p className="text-[#a1a1a1] mb-4">
              Deluxe package with maximum benefits
            </p>

            <div className="flex flex-col mb-20">
              <h2 className="text-[#a1a1a1] mb-2">WHAT YOU GET </h2>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Unlimited access to the
                gym{" "}
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Unlimited group class per
                month{" "}
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> 2 personal training
                sessions per month
              </p>
              <p className="flex items-center gap-2 text-white text-xl">
                <FaCheck className="text-green-800" /> Free access to relaxation
                areas, Sauna and Pool
              </p>
            </div>
            <button className="flex text-lg items-center justify-center gap-2 text-white py-2 px-4 rounded-lg bg-[#1a1a1a] transition duration-300">
              Get Started <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

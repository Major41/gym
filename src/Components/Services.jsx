import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pTrainig from "../images/ptraining.jpg";
import classes from "../images/classes.jpg";
import swim from "../images/swim.jpg";
import cardio from "../images/cardio.jpg";
import strenght from "../images/gym-wall.jpg";
import workouts from "../images/workout.jpg";

const services = [
  {
    title: "Personal Training",
    img: pTrainig,
  },
  {
    title: "Group Classes",
    img: classes,
  },
  {
    title: "Swimming",
    img: swim,
  },
  {
    title: "Cardio Equipments",
    img: cardio,
  },
  {
    title: "Strength Training",
    img: strenght,
  },
  {
    title: "Functional Workouts",
    img: workouts,
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div id="services" className="bg-[#13262e] w-full h-full py-20">
      <div className="w-[90%] mx-auto">
        <h2 className="text font-bold text-xl mb-4">Our Services</h2>

        <h2 className=" text-3xl  lg:text-5xl font-bold mb-5 text-white">
          UNLEASH YOUR POTENTIAL 
          <span className="text"> PREMIUM <br className="hidden lg:block" /> FITNESS SERVICES </span>
          TAILORED FOR YOU
        </h2>
        <p className="text-[#a1a1a1] mb-10 font-semibold">
          At Lift Gym, we offer personalized fitness to help you reach your
          goals. <br className="hidden lg:block" /> From one-on-one training to
          high-energy classes and recovery sessions, we provide{" "}
          <br className="hidden lg:block" /> everything you need to succeed in
          your fitness journey.
        </p>

        {/* Scrollable Services Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[400px] h-[300px] flex-shrink-0"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-[400px] h-[300px] object-cover rounded-lg"
                />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white bg-black bg-opacity-60 px-4 py-2 rounded-md">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-80 transition"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-80 transition"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import img from "../images/gym1.jpg";
function Project() {
  return (
    <div id="projects" className="bg-[#0e1c22e1] w-full h-full py-20">
      <div className="w-[90%] mx-auto">
        <h2 className="text text-xl font-bold mb-4">Preference</h2>
        <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-white ">
          WHY CHOOSE US FOR YOUR
          <span className="text">
            FITNESS <br className="hidden lg:block" />
          </span>
          JOURNEY?
        </h2>

        <div className="flex flex-col md:flex-row gap-10  justify-evenly">
          <div className="w-full">
            <img
              src={img}
              alt="amazing image"
              className="w-[800px] h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col bg-[#203036] py-2 px-4 rounded-lg gap-2">
              <h3 className="text-white text-2xl font-semibold">
                <span className="text">State-of-the-Art</span> Equipment
              </h3>
              <p className="text-[#a1a1a1] font-semibold">
                Our gym is equipped with the latest fitness technology & Quality
                equpments with regular servicing for customer safety
              </p>
            </div>
            <div className="flex flex-col bg-[#203036] py-2 px-4 rounded-lg gap-2">
              <h3 className="text-white text-2xl font-semibold">
                <span className="text">Expert </span> Trainers
              </h3>
              <p className="text-[#a1a1a1] font-semibold">
                Our certified trainers are here to guide you every step of the
                way.
                <br /> They are passionate about helping you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col bg-[#203036] py-2 px-4 rounded-lg gap-2">
              <h3 className="text-white text-2xl font-semibold">
                <span className="text">Welcoming</span> Community
              </h3>
              <p className="text-[#a1a1a1] font-semibold">
                Join a supportive community of fitness enthusiasts who motivate
                and inspire each other.
                <br /> We believe in lifting each other up, both in and out of
                the gym.
              </p>
            </div>
            <div className="flex flex-col bg-[#203036] py-2 px-4 rounded-lg gap-2">
              <h3 className="text-white text-2xl font-semibold">
                <span className="text">Wide Range</span> of Classes
              </h3>
              <p className="text-[#a1a1a1] font-semibold">
                We offer a variety of classes, from yoga to high-intensity
                interval training (HIIT), to suit all fitness levels and
                preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

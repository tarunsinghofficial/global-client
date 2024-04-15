import { useState } from "react";
import bgImage from "../assets/bg4.png";
import cloud1 from "../assets/cloud1.png";


function App() {
  return (
    <div className="bg-gradient-to-b from-[#98B8DD] to-white h-screen flex justify-center">
      {/* <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-md md:text-lg lg:text-xl font-semibold">
            TRANSPORTATION
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            When you travel by car, how often do you carpool?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5">
          <div className="text-[#2C3E50] text-lg font-semibold">NEVER</div>
          <div className="w-44 lg:w-96">
            <Slider size="lg" defaultValue={100} color="indigo" />
          </div>
          <div className="text-[#2C3E50] text-lg font-semibold">ALWAYS</div>
        </div>
      </div> */}
      <img src={cloud1} alt="cloud" className="hidden md:block lg:block absolute w-56 top-20 left-10" />
      <img src={cloud1} alt="cloud" className="hidden md:block lg:block absolute w-56 top-32 right-10" />
      <img
        src={bgImage}
        alt="home"
        className="w-full absolute bottom-0"
      />
    </div>
  );
}

export default App;

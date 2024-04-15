import { useState } from "react";
import "../App.css";
import bg1 from "../assets/bg1.png";

function Personal4() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg1})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            Transportation
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
          When you travel by car, how often do you carpool?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="text-[#2C3E50] text-lg font-semibold">NOT FAR</div>
          <div className="w-44 lg:w-96">
            <input
              type="range"
              min={0}
              max={100}
              onChange={handleSliderChange}
              className="range"
            />
          </div>
          <div className="text-[#2C3E50] text-lg font-semibold">VERY FAR</div>
        </div>
      </div>
    </div>
  );
}

export default Personal4;

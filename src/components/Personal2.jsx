import { useState } from "react";
import "../App.css";
import bg3 from "../assets/bg3.png";

function Personal2() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg3})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            housing
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            Compared to your neighbors, how much trash do you generate?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="w-44 lg:w-96 flex items-center gap-5">
            <details className="dropdown">
              <summary className="m-1 btn">Choose</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Small</a>
                </li>
                <li>
                  <a>Medium</a>
                </li>
                <li>
                  <a>Large</a>
                </li>
              </ul>
            </details>
            <div className="flex  items-center gap-5">
              <div className="text-[#2C3E50] text-lg font-semibold">NEVER</div>
              <input
                type="range"
                min={0.5}
                max={10}
                onChange={handleSliderChange}
                className="range"
              />
            </div>
            <div className="text-[#2C3E50] text-lg font-semibold">ALWAYS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal2;

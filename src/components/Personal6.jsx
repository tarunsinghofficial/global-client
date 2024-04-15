import { useState } from "react";
import "../App.css";
import bg2 from "../assets/bg2.png";

function Personal6() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div
      id="background-component"
      style={{ backgroundImage: `url(${bg2})` }}
      className="bg-gradient-to-b from-[#98B8DD] to-white w-screen h-screen flex justify-center"
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl mt-44">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-[#2C3E50] text-md md:text-lg uppercase lg:text-xl font-semibold">
            Food
          </p>
          <h1 className="text-[#2C3E50] text-xl md:text-2xl lg:text-4xl font-bold">
            How often do you eat animal-based products?
          </h1>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10">
          <div className="w-44 lg:w-96 flex items-center justify-center">
            <details className="dropdown">
              <summary className="m-1 btn">Choose</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Never</a>
                </li>
                <li>
                  <a>Infrequently</a>
                </li>
                <li>
                  <a>Occasionally</a>
                </li>
                <li>
                  <a>Often</a>
                </li>
                <li>
                  <a>Very Often</a>
                </li>
                <li>
                  <a>Always</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal6;

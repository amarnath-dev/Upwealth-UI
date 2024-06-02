import { useState } from "react";
import Call from "../../../assets/svg/call.svg";
import CallGolden from "../../../assets/svg/call-golden.svg";
import "./CallBtn.css";

export const CallBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  return (
    <button
      className="call-button bg-background-color rounded-2xl flex flex-col justify-center items-center text-call font-bold w-48 h-44"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setClicked(true)}
    >
      {hovered && clicked ? (
        <div>
          <div className="w-full flex justify-center">
            <img src={CallGolden} alt="call" className="w-10" />
          </div>
          <h1 className="mt-2 text-golden">+1(931)-266-6424</h1>
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-center">
            <img src={Call} alt="call" className="w-10" />
          </div>
          <h1 className="mt-2">Call us</h1>
        </div>
      )}
    </button>
  );
};

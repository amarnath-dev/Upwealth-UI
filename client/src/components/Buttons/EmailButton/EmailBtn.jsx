import { useState } from "react";
import Email from "../../../assets/svg/email.svg";
import EmailGolden from "../../../assets/svg/mail-golden.svg";
import "./EmailBtn.css";

export const EmailBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  return (
    <button
      className={
        "email-button bg-background-color rounded-2xl flex flex-col justify-center items-center text-call font-bold w-48 h-28 md:h-44"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setClicked(true)}
    >
      {hovered && clicked ? (
        <div>
          <div className="w-full flex justify-center">
            <img src={EmailGolden} alt="email" className="w-5 md:w-10" />
          </div>
          <h1 className="mt-2 md:text-xs text-xs text-golden">
            info@upwealthmagazine.com
          </h1>
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-center">
            <img src={Email} alt="email" className="w-5 md:w-10" />
          </div>
          <h1 className="mt-2 md:text-lg text-sm p-1 md:p-0">Send an email</h1>
        </div>
      )}
    </button>
  );
};

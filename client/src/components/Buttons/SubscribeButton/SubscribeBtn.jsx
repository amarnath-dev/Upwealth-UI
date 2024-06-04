import "./SubscribeBtn.css";
import { useState } from "react";
import RightArrow from "../../../assets/svg/right-arrow.svg";

export const SubscribeBtn = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`subscribe-btn text-lg md:text-2xl font-bold md:w-72 font-Montserrat cursor-pointer text-primary-text bg-background-color`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <>
          Subscribe Now{" "}
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="inline-block ml-2"
          />
        </>
      ) : (
        "Subscribe Now!"
      )}
    </button>
  );
};

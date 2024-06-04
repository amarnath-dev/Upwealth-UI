import { useState } from "react";
import ArrowDown from "../../../assets/svg/arrow-down.svg";
import ArrowDownWhite from "../../../assets/svg/arrow-down-white.svg";
import "./NavigateBtn.css";

export const NavigateBtn = () => {
  const [hovered, setHovered] = useState(false);

  const handleNavigateClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`navigate-btn flex justify-center items-center bg-background-color rounded-full w-12 h-12 mb-3 md:mb-0`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleNavigateClick}
    >
      <img
        src={hovered ? ArrowDownWhite : ArrowDown}
        className={hovered ? "w-4" : "w-7 bg-cover"}
      />
    </button>
  );
};

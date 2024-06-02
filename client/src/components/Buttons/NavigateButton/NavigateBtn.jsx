import ArrowDown from "../../../assets/svg/arrow-down.svg";
import "./NavigateBtn.css";

export const NavigateBtn = () => {
  return (
    <button className="navigate-btn flex justify-center items-center bg-background-color rounded-full w-16 h-16">
      <img src={ArrowDown} />
    </button>
  );
};

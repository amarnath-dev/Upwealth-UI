import ArrowDown from "../../../assets/svg/arrow-down.svg";
import "./NavigateBtn.css";

export const NavigateBtn = () => {
  return (
    <button className="navigate-btn flex justify-center items-center">
      <img src={ArrowDown} />
    </button>
  );
};

/* eslint-disable react/prop-types */
import "./SocialsBtn.css";

export const SocialsBtn = ({ socialIcon }) => {
  return (
    <button className="social-btn rounded-full w-14 h-14 flex justify-center items-center">
      <img src={socialIcon} alt="social" className="bg-cover"/>
    </button>
  );
};

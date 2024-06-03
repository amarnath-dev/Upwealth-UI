import { useState } from "react";
import Logo from "../../assets/images/logo-img.png";
import Facebook from "../../assets/svg/facebook.svg";
import Insta from "../../assets/svg/insta.svg";
import LinkedIn from "../../assets/svg/linkedIn.svg";
import XIcon from "../../assets/svg/x.svg";
import { SocialsBtn } from "../Buttons/SocialsButton/SocialsBtn";
import "./Footer.css";

export const Footer = () => {
  const [logo] = useState([Facebook, Insta, LinkedIn, XIcon]);

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className="footer w-screen h-full flex flex-col justify-center bg-background-color">
      <div className="flex flex-col items-center px-16 pt-14 pb-6 w-full bg-background-color">
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-5 justify-between items-center w-full">
            <img src={Logo} alt="logo" className="w-40 cursor-pointer" />

            <div className="flex gap-2 justify-between px-2 py-2.5 ml-28">
              <div className="my-auto">
                <button className="footer-btn py-1 px-3 rounded-md">
                  Home
                </button>
              </div>


              <button
                className={`footer-btn py-1 px-3 rounded-md ${
                  hoveredButton === "kaltech" ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("kaltech")}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredButton === "kaltech"
                  ? "Kaltech Consultancy"
                  : "Kaltech"}
              </button>
              
              <button
                className={`footer-btn py-1 px-3 rounded-md ${
                  hoveredButton === "insurance" ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("insurance")}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredButton === "insurance"
                  ? "Insurance Life Magazine"
                  : "Insurance Life"}
              </button>
            </div>

            <div className="flex gap-5 justify-between">
              {logo.map((socialIcon) => {
                return (
                  <>
                    <SocialsBtn socialIcon={socialIcon} />
                  </>
                );
              })}
            </div>
          </div>
          <div className="divider mt-8 max-w-full h-1.5 rounded-lg shadow w-72 bg-background-color" />
          <div className="mt-8 text-md font-medium text-primary-text">
            <h1 className="font-Montserrat font-semi-bold">
              © 2022 - 2024 | Alrights reserved by Kaltech Designs
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

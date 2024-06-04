import { useState } from "react";
import Logo from "../../assets/images/logo-img.png";
import Facebook from "../../assets/svg/facebook.svg";
import Insta from "../../assets/svg/insta.svg";
import LinkedIn from "../../assets/svg/linkedIn.svg";
import XIcon from "../../assets/svg/x.svg";
import { SocialsBtn } from "../Buttons/SocialsButton/SocialsBtn";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const [logo] = useState([Facebook, Insta, LinkedIn, XIcon]);

  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <footer className="footer w-screen h-full flex flex-col justify-center bg-background-color">
      <div className="flex flex-col items-center px-4 md:px-16 pt-14 pb-6 w-full bg-background-color">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center w-full">
            <img
              src={Logo}
              alt="logo"
              className="w-28 md:w-40 cursor-pointer"
              onClick={() => navigate("/")}
            />

            <div className="flex flex-col md:flex-row md:gap-5 justify-between items-center md:ml-28">
              <button className="footer-btn py-1 px-3 rounded-md">Home</button>
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

            <div className="flex gap-3 md:gap-5 justify-center md:justify-between">
              {logo.map((socialIcon, index) => (
                <SocialsBtn key={index} socialIcon={socialIcon} />
              ))}
            </div>
          </div>

          <div className="divider mt-4 max-w-full h-1.5 rounded-lg shadow w-48 md:w-72 bg-background-color" />
          <div className="mt-8 text-sm md:text-md font-medium text-primary-text text-center">
            <h1 className="font-Montserrat font-semi-bold">
              © 2022 - 2024 | All rights reserved by Kaltech Designs
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

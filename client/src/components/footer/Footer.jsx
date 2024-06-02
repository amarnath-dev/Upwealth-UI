import Logo from "../../assets/images/logo-img.png";
import { useState } from "react";
import Facebook from "../../assets/svg/facebook.svg";
import Insta from "../../assets/svg/insta.svg";
import LinkedIn from "../../assets/svg/linkedIn.svg";
import XIcon from "../../assets/svg/x.svg";
import { SocialsBtn } from "../buttons/SocialsButton/SocialsBtn";
import "./Footer.css";

export const Footer = () => {
  const [logo] = useState([Facebook, Insta, LinkedIn, XIcon]);
  return (
    <div className="footer w-screen h-full flex flex-col justify-center bg-background-color">
      <div className="flex flex-col items-center px-16 pt-14 pb-6 w-full bg-background-color">
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-5 justify-between items-center w-full">
            <img src={Logo} alt="logo" className="w-40 cursor-pointer" />
            <div className="flex gap-5 justify-between text-sm font-medium text-primary-text font-Montserrat ml-28">
              <div className="my-auto">
                <span className="cursor-pointer">Home</span>
              </div>
              <div className="flex gap-5 justify-between px-2 py-2.5">
                <span className="cursor-pointer">Kaltech</span>{" "}
                <span className="cursor-pointer">Insurance Life</span>{" "}
              </div>
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

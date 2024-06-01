import { HomeBtn } from "../buttons/HomeButton/HomeBtn";
import { LoginBtn } from "../buttons/LoginButton/LoginBtn";
import Logo from "../../assets/images/logo-img.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav w-screen h-24 flex items-center justify-center bg-background-color">
        <div className="w-full flex justify-around items-center">
          <div className="flex justify-center items-center">
            <img src={Logo} alt="logo" className="w-36 cursor-pointer" />
          </div>
          <div className="flex justify-center items-center gap-7">
            <HomeBtn />
            <button className="px-3 py-1 rounded text-xl">Contact Us</button>
          </div>
          <div className="flex justify-center items-center">
            <LoginBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

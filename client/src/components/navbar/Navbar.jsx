import { HomeBtn } from "../Buttons/HomeButton/HomeBtn";
import { LoginBtn } from "../Buttons/LoginButton/LoginBtn";
import Logo from "../../assets/images/logo-img.png";
import { useNavigate } from "react-router-dom";
import { ContactBtn } from "../Buttons/ContactButton/ContactBtn";
import "./Navbar.css";

const Navbar = ({ page }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav w-screen h-24 flex items-center justify-center">
        <div className="w-full flex justify-around items-center">
          <div className="flex justify-center items-center">
            <img src={Logo} alt="logo" className="w-36 cursor-pointer" />
          </div>
          <div className="flex justify-center items-center gap-7">
            {page === "home" ? (
              <>
                <HomeBtn />
                <button
                  className="px-3 py-1 rounded text-xl"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </>
            ) : (
              <>
                <button
                  className="px-3 py-1 rounded text-xl"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
                <ContactBtn />
              </>
            )}
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

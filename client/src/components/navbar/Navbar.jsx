import { HomeBtn } from "../Buttons/HomeButton/HomeBtn";
import { LoginBtn } from "../Buttons/LoginButton/LoginBtn";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav w-screen h-16 flex items-center justify-center">
      <div className="w-full flex justify-around items-center">
        <div className="flex justify-center items-center">UpWealth</div>
        <div className="flex justify-center items-center gap-3">
          <HomeBtn />
          <button className="px-3 py-1 rounded text-xl">Contact Us</button>
        </div>
        <div className="flex justify-center items-center">
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

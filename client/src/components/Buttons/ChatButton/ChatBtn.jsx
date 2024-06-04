import { useState } from "react";
import Chat from "../../../assets/svg/chat.svg";
import ChatGolden from "../../../assets/svg/chat-golden.svg";
import "./ChatBtn.css";

export const ChatBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  return (
    <button
      className={`chat-button bg-background-color rounded-2xl flex flex-col justify-center items-center text-call font-bold w-48 h-28 md:h-44`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setClicked(true)}
    >
      {hovered && clicked ? (
        <div>
          <div className="w-full flex justify-center">
            <img src={ChatGolden} alt="chat" className="w-5 md:w-10" />
          </div>
          <h1 className="mt-2 text-sm md:text-lg text-golden">+1(931)-266-6101</h1>
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-center">
            <img src={Chat} alt="chat" className="w-5 md:w-10" />
          </div>
          <h1 className="mt-2 text-sm md:text-lg">Chat with us</h1>
        </div>
      )}
    </button>
  );
};

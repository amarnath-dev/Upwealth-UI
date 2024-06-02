import "./ChatBtn.css";
import Chat from "../../../assets/svg/chat.svg";

export const ChatBtn = () => {
  return (
    <button className="chat-button bg-background-color rounded-2xl flex flex-col justify-center items-center text-call font-bold w-40 h-40">
      <div className="w-full flex justify-center">
        <img src={Chat} alt="chat" className="w-10" />
      </div>
      <h1 className="mt-2">Chat with us</h1>
    </button>
  );
};

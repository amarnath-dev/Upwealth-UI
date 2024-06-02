import "./CallBtn.css";
import Call from "../../../assets/svg/call.svg";

export const CallBtn = () => {
  return (
    <button className="call-button bg-background-color rounded-2xl flex flex-col justify-center items-center text-call font-bold w-40 h-40">
      <div className="w-full flex justify-center">
        <img src={Call} alt="call" className="w-10" />
      </div>
      <h1 className="mt-2">Call us</h1>
    </button>
  );
};

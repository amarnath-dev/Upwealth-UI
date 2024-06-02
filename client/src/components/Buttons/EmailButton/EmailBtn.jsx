import "./EmailBtn.css";
import Email from "../../../assets/svg/email.svg";

export const EmailBtn = () => {
  return (
    <button className="email-button bg-background-color rounded-2xl flex flex-col justify-center items-center text-call font-bold w-40 h-40">
      <div className="w-full flex justify-center">
        <img src={Email} alt="email" className="w-10" />
      </div>
      <h1 className="mt-2">Send an email</h1>
    </button>
  );
};

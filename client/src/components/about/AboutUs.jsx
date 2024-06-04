import { NavigateBtn } from "../Buttons/NavigateButton/NavigateBtn";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="w-screen z-50 md:top-3/4 md:mt-4 absolute md:px-10">
      <div className="container-div w-full md:h-56 flex flex-col md:flex-row bg-background-color">
        <div className="flex-2">
          <h1 className="heading text-xl md:text-2xl px-5 md:px-10 mt-5 font-Bebasneue">
            ABOUT US
          </h1>
          <div className="flex-wrap truncate px-5 md:px-10 overflow-hidden">
            <h1 className="font-bold md:text-3xl break-words font-Montserrat leading-tight mt-2">
              Grow your net worth <br /> by growing your <br /> network.
            </h1>
          </div>
        </div>
        <div className="divider hidden md:block w-1 h-52 mt-8 bg-gray-400 mx-4"></div>
        <div className="flex-1 px-5 mt-1 md:mt-0 md:px-10 md:py-10">
          <h1 className="font-Montserrat text-md">
            UpWealth magazine is a premier magazine for entrepreneurs by
            entrepreneurs. Do you ever wonder how entrepreneurs become debt-free
            and financially free while spending time with their loved ones and
            doing the thing they enjoy? Well, look no further. UPWealth has all
            the answers you need. Read from small to large business owners who
            have mastered the art of creating and maintaining business systems,
            sticking to their visions and persisting in their missions! The
            power of leveraging other businesses is unmatched.
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center bg-background-color">
        <div className="py-8 hidden md:block">
          <NavigateBtn />
        </div>
      </div>
    </div>
  );
};

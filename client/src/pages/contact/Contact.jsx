import "./Contact.css";
import Navbar from "../../components/navbar/Navbar";
import { NavigateBtn } from "../../components/Buttons/NavigateButton/NavigateBtn";
import { ChatBtn } from "../../components/Buttons/ChatButton/ChatBtn";
import { CallBtn } from "../../components/Buttons/CallButton/CallBtn";
import { EmailBtn } from "../../components/Buttons/EmailButton/EmailBtn";
import { Footer } from "../../components/footer/Footer";

export const Contact = () => {
  return (
    <>
      <section className="w-screen h-full bg-contact-background-img bg-cover relative">
        <Navbar page={"contact"} />
        <div className="w-full h-full flex justify-center items-center py-8">
          <div className="form-div w-2/4 h-auto rounded-md flex flex-col relative">
            <div className="w-full text-center mt-12">
              <h1 className="font-Bebasneue text-6xl">
                Contact our friendly team
              </h1>
              <h1 className="font-Montserrat mt-6">
                Let us know how we can help
              </h1>
            </div>
            <div className="py-9 font-Montserrat">
              <form>
                <div className="w-full flex justify-around">
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64 focus:outline-none"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64 focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-full flex justify-around mt-5">
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64 focus:outline-none"
                    placeholder="Phone number"
                  />
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64 focus:outline-none"
                    placeholder="Email ID"
                  />
                </div>
                <div className="w-full flex justify-around mt-5 px-6">
                  <textarea
                    name="message"
                    id="message"
                    className="input-field text-area rounded-xl w-full bg-background-color indent-5 py-3 focus:outline-none"
                    rows={3}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    className="submit-btn rounded-lg px-5 py-2 font-semibold mt-10"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 right-20 px-5">
          <NavigateBtn />
        </div>
      </section>

      {/* Below section  */}
      <section className="w-screen h-full text-center bg-background-color">
        <div className="w-full h-full flex py-36">
          <div className="w-1/3">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="px-10">
                <h1 className="font-Montserrat font-bold text-2xl">
                  Get in touch with Upwealth magazine
                </h1>
              </div>
              <div className="mt-2 ml-5 font-Montserrat">
                <p>
                  If you have any questions regarding subscriptions, or how to
                  feature or advertise in our magazine, dont hesitate to get in
                  touch
                </p>
              </div>
            </div>
          </div>
          <div className="grow flex justify-center items-center">
            <div className="w-full">
              <div className="ml-24 flex gap-5">
                <ChatBtn />
                <CallBtn />
                <EmailBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

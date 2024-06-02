import "./Contact.css";
import Navbar from "../../components/navbar/Navbar";

export const Contact = () => {
  return (
    <>
      <div className="w-screen h-full bg-contact-background-img bg-cover">
        <Navbar page={"contact"} />
        <div className="w-full h-full flex justify-center items-center py-8">
          <div className="form-div w-2/4 h-full rounded-md">
            <div className="w-full text-center mt-12">
              <h1 className="font-Bebasneue text-6xl">
                Contact our friendly team
              </h1>
              <h1 className="font-Montserrat mt-6">
                Let us know how we can help
              </h1>
            </div>
            <div className="py-9 font-Montserrat">
              <form action="">
                <div className="w-full flex justify-around">
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-full flex justify-around mt-5">
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64"
                    placeholder="Phone number"
                  />
                  <input
                    type="text"
                    className="input-field rounded-xl bg-background-color py-2 indent-5 w-64"
                    placeholder="Email ID"
                  />
                </div>
                <div className="w-full flex justify-around mt-5 px-6">
                  <textarea
                    name="message"
                    id="message"
                    className="input-field text-area rounded-xl w-full bg-background-color indent-5 py-3"
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
      </div>
    </>
  );
};

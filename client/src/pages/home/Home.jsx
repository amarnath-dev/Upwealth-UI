import { SubscribeBtn } from "../../components/buttons/SubscribeButton/SubscribeBtn";
import { AboutUs } from "../../components/about/AboutUs";
import Navbar from "../../components/navbar/Navbar";
import HomeImage from "../../assets/images/home-img.png";
import EclipseTextOne from "../../assets/images/eclipse-text-one.png";
import EclipseTextTwo from "../../assets/images/eclipse-text-two.png";
import EclipseTextThree from "../../assets/images/eclipse-text-three.png";
import EclipseImg from "../../assets/images/eclipse-img.png";
import { NavigateBtn } from "../../components/buttons/NavigateButton/NavigateBtn";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Top Section Design */}
      <section className="bg-home-background-img bg-cover w-screen">
        <Navbar page={"home"} />
        <div className="w-full h-full">
          <div className="flex">
            <div className="flex justify-center items-center flex-1 h-screen">
              <div>
                <div className="flex-wrap text-7xl font-Bebasneue px-10 leading-tight">
                  <div>
                    <h1>Discover the Latest</h1>
                  </div>
                  <div className="flex gap-3">
                    <h1>Issue of</h1>
                    <h1 className="gradient-text-one">Upwealth</h1>
                  </div>
                  <div>
                    <h1 className="gradient-text-two">Magazine</h1>
                  </div>
                </div>
                <div className="px-10 font-Montserrat">
                  <h1>
                    Stay informed with our insightful articles and expert
                    advice.
                  </h1>
                  <div className="py-4">
                    <SubscribeBtn />
                  </div>
                  <div className="mt-8">
                    <NavigateBtn />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 h-screen flex justify-center items-center">
              <div>
                <div className="mt-5 px-8">
                  <img src={HomeImage} alt="home-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Below section Design */}
      <section className="w-screen bg-background-color">
        <div className="w-full h-screen flex justify-center items-center flex-col relative">
          <div className="w-2/3 h-80 bg-eclipse-one bg-cover relative flex justify-center items-center">
            <div className="text-div w-full absolute top-7 left-0 z-20 flex justify-center items-center flex-col gap-y-6">
              <img src={EclipseTextOne} alt="upwealth" className="w-96" />
              <img src={EclipseTextTwo} alt="upwealth" className="w-96" />
              <img src={EclipseTextThree} alt="upwealth" className="w-96" />
            </div>
            <div className="img-div w-2/3 h-60 bg-eclipse-two bg-cover flex items-center justify-center mt-20 relative z-10"></div>
            <div className="absolute z-30 flex justify-center items-center">
              <img src={EclipseImg} alt="books" />
            </div>
          </div>

          <AboutUs />
        </div>
      </section>
    </>
  );
};

export default Home;

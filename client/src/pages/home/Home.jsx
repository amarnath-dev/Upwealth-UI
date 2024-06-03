import { useState } from "react";
import { SubscribeBtn } from "../../components/buttons/SubscribeButton/SubscribeBtn";
import { AboutUs } from "../../components/about/AboutUs";
import Navbar from "../../components/navbar/Navbar";
import HomeImage from "../../assets/images/home-img.png";
import EclipseTextOne from "../../assets/images/eclipse-text-one.png";
import EclipseTextTwo from "../../assets/images/eclipse-text-two.png";
import EclipseTextThree from "../../assets/images/eclipse-text-three.png";
import { NavigateBtn } from "../../components/buttons/NavigateButton/NavigateBtn";
import EclipseTopLeft from "../../assets/images/eclipse-top-left.png";
import EclipseTopRight from "../../assets/images/eclipse-top-right.png";
import EclipseBottomRight from "../../assets/images/eclipse-bottom-right.png";
import EclipseBottomLeft from "../../assets/images/eclipse-bottom-left.png";
import EclipseCebterImg from "../../assets/images/eclipse-center-img.png";
import "./Home.css";

import TopLeftVariant from "../../assets/images/eclipse-top-left-variant.png";
import TopRightVariant from "../../assets/images/eclipse-top-right-variant.png";
import BottomLeftVariant from "../../assets/images/eclipse-bottom-left-variant.png";
import BottomRightVariant from "../../assets/images/eclipse-bottom-right-variant.png";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickIndex, setClickIndex] = useState();

  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  const handleClick = (index) => {
    setClickIndex(index);
    setClicked(true);
  };

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
      <section className="w-screen">
        <div className="w-full h-screen flex justify-center items-center flex-col relative bg-background-color">
          <div className="w-2/3 h-80 bg-eclipse-one bg-cover relative flex justify-center items-center">
            <div className="absolute z-40 top-3 w-2/3 flex justify-between">
              <img
                src={
                  hovered && clicked && clickIndex === 1
                    ? TopLeftVariant
                    : EclipseTopLeft
                }
                alt="img"
                className="w-28 h-30 cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(1)}
              />
              <img
                src={
                  hovered && clicked && clickIndex === 2
                    ? TopRightVariant
                    : EclipseTopRight
                }
                alt="img"
                className="w-28 h-30 cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(2)}
              />
            </div>
            <div className="text-div w-full absolute top-12 left-0 z-20 flex justify-center items-center flex-col gap-y-6">
              <img src={EclipseTextOne} alt="upwealth" className="w-96" />
              <img src={EclipseTextTwo} alt="upwealth" className="w-96" />
              <img src={EclipseTextThree} alt="upwealth" className="w-96" />
              <div className="w-full bottom-10 absolute z-22 flex justify-between">
                <img
                  src={
                    hovered && clicked && clickIndex === 3
                      ? BottomLeftVariant
                      : EclipseBottomRight
                  }
                  alt="img"
                  className="cursor-pointer w-32 h-34"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(3)}
                />
                <img
                  src={
                    hovered && clicked && clickIndex === 4
                      ? BottomRightVariant
                      : EclipseBottomLeft
                  }
                  alt="img"
                  className="cursor-pointer w-32 h-34"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(4)}
                />
              </div>
            </div>
            <div className="w-2/3 h-60 bg-eclipse-two bg-cover flex justify-center items-center mt-20 relative z-24">
              <div className="relative w-48 h-[250px] flex justify-center items-center">
                <div className="cursor-pointer absolute left-2 w-full h-full bg-gray-200 z-20 bottom-10"></div>
                <img
                  src={EclipseCebterImg}
                  alt="image"
                  className="object-cover cursor-pointer absolute z-30 w-48 mb-20"
                />
              </div>
            </div>
          </div>
          <AboutUs />
        </div>
      </section>
    </>
  );
};

export default Home;

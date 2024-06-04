import { useState, useEffect } from "react";


import ImageOne from "../../assets/images/slider-img-1.png";
import ImageTwo from "../../assets/images/slider-img-2.png";
import ImageThree from "../../assets/images/slider-img-3.png";
import ImageFour from "../../assets/images/slider-img-4.png";
import ImageFive from "../../assets/images/slider-img-5.png";



export const Slider = () => {
  const [images, setImages] = useState([
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
  ]);

  const rotateImages = () => {
    setImages((prevImages) => {
      const rotatedImages = [...prevImages];
      const lastImage = rotatedImages.pop();
      rotatedImages.unshift(lastImage);
      return rotatedImages;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateImages();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100px] relative flex justify-center items-center mt-36 md:mt-60">
      <div className="w-full flex justify-between items-center absolute z-10 mb-2">
        <img src={images[0]} alt="img1" className="w-24 h-34 md:w-32 md:h-72"/>
        <img src={images[1]} alt="img2" className="w-24 h-34 md:w-32 md:h-72"/>
      </div>
      <div className="px-5 w-full flex justify-between items-center absolute z-20 md:mt-9">
        <img src={images[2]} alt="img3" className="w-28 h-38 md:w-40 md:h-96 md:ml-10" />
        <img src={images[3]} alt="img4" className="w-28 h-38 md:w-40 md:h-96 md:mr-10" />
      </div>
      <div className="main-image w-full px-10 flex justify-center items-center absolute z-40 md:mt-10">
        <img src={images[4]} alt="img5" className="w-40 h-auto mt-8 md:w-52 md:h-auto" />
      </div>
    </div>
  );
};

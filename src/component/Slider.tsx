import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
interface SliderProps {
  images: Array<string>;
}
const Slider: React.FC<SliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const changeSlide = (direction: string): void => {
    if (imageIndex === null) return;

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="w-full h-[350px] flex gap-5">
      {imageIndex !== null && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black flex justify-between items-center z-[9999]">
          <div
            onClick={() => changeSlide("left")}
            className=" flex-1 text-white flex justify-center items-center cursor-pointer"
          >
            <FontAwesomeIcon size="xl" className="w-12" icon={faArrowLeft} />
          </div>
          <div className="flex-10 ">
            <img
              className="w-full h-full object-cover"
              src={images[imageIndex]}
              alt=""
            />
          </div>
          <div
            onClick={() => changeSlide("right")}
            className="flex-1 text-white flex justify-center items-center  cursor-pointer"
          >
            <FontAwesomeIcon size="xl" className=" w-12" icon={faArrowRight} />
          </div>
          <div
            onClick={() => setImageIndex(null)}
            className="absolute top-0 right-0 text-white text-4xl font-bold p-4 cursor-pointer"
          >
            x
          </div>
        </div>
      )}
      <div className="basis-3/4">
        <img
          onClick={() => setImageIndex(0)}
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          src={images[0]}
          alt={images[0]}
        />
      </div>
      <div className="basis-1/4 flex flex-1 flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <img
            onClick={() => setImageIndex(index + 1)}
            className="w-full h-24  object-cover rounded-xl cursor-pointer "
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

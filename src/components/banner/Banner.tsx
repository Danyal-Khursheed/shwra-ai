import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { Images } from "../../../public/assets/Images";

interface BannerInterface {
  text: string;
  boldText?: string;
  buttonText: string;
  onClick: () => void;
}

const Banner: FC<BannerInterface> = ({
  text,
  boldText,
  buttonText,
  onClick,
}) => {
  return (
    <div
      className="relative flex flex-row justify-center items-center md:max-w-[65%] max-w-[95%] mx-auto md:h-40 h-24 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(to right, #1e3a46, #3b3f4a)",
      }}
    >
      {/* Right 30% background image */}
      <div className="absolute right-0 top-0 h-full w-[40%] z-0">
        <Image
          src={Images.background_triangle}
          alt="Background Triangle"
          fill
          className="object-contain"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full px-4 flex flex-row justify-between items-center md:max-w-[75%] max-w-[95%] mx-auto">
        <p className="font-semibold md:max-w-[75%] max-w-[70%]  text-white">
          <span className="md:text-3xl text-[12px] font-bold ">{boldText}</span>{" "}
          <span className="md:text-[16px] text-[10px]"> {text}</span>
        </p>
        <button
          onClick={() => onClick}
          className="bg-primary-golden text-black w-32 md:text-[16px] text-[12px] flex flex-row gap-2 justify-center items-center h-12 rounded-full cursor-pointer"
        >
          <span>{buttonText}</span>
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Banner;

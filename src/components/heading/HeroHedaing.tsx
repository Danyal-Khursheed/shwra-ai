"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";

interface HeadingTitleProps {
  text?: string;
  heading: string;
  marginBottom?: string;
  disableAnimate?: boolean;
  description?: string;
}

function HeadingTitle({
  text,
  heading,
  disableAnimate,
  description,
}: HeadingTitleProps) {
  return (
    <motion.div
      variants={
        disableAnimate ? {} : slideIn(0, 0, { duration: 0.5, delay: 0.2 })
      }
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`text-center flex flex-col gap-0 text-black md:gap-0 items-center mt-6`}
    >
      {text && (
        <div className="inline-block rounded-full bg-primary-golden px-6 py-1">
          <p className="font-madaniArabic text-sm font-normal text-[var(--primaryColor)]">
            {text}
          </p>
        </div>
      )}
      {heading && (
        <h1 className="custom_font_bold md:text-[40px] text-[24px] mt-3 font-bold">
          {heading}
        </h1>
      )}
      {description && (
        <>
          <div className="text-center md:mt-5 mt-2 md:max-w-[50%] max-w-[90%]">
            <p className="m-0 text-[#475467] md:text-[20px] text-[16px]">
              {description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default HeadingTitle;

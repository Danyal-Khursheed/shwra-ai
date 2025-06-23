"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Images } from "../../../public/assets/Images";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/animations";

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="flex relative flex-col gap-7 h-auto justify-center items-center  md:mt-32 mt-40 mb-20">
      <div className="flex  justify-center">
        {/* header */}
        <motion.div
          className="absolute md:block hidden -top-16 right-1/4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <Image src={Images?.contract_review} alt="" width={35} height={35} />
        </motion.div>
        <motion.div
          className="absolute md:block hidden -top-16 left-1/4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <Image
            src={Images?.contract_drafting}
            alt=""
            width={35}
            height={35}
          />
        </motion.div>
        <motion.div
          className="absolute md:block hidden top-1/3 left-1/18"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <Image src={Images?.law} alt="" width={35} height={35} />
        </motion.div>

        <motion.div
          variants={slideIn(50, 0, { delay: 0.2, duration: 0.6 })}
          initial="initial"
          animate="animate"
          className="flex flex-row gap-3 justify-center items-center border border-white p-3 px-4 rounded-4xl mx-4"
        >
          <Image src={Images.ShwraBrownLogo} width={30} height={30} alt="" />
          <p className="text-sm">
            {t(
              "Where we support the law with the power of artificial intelligence"
            )}
          </p>
        </motion.div>
      </div>
      {/* hero */}
      <div className="flex justify-center items-center flex-col gap-5">
        <motion.p
          variants={slideIn(50, 0, { delay: 0.5, duration: 0.6 })}
          initial="initial"
          animate="animate"
          className="md:text-[47px] text-[23px] md:max-w-[60%] max-w-[90%] mx-auto text-center"
        >
          {t("Revolutionizing legal services through artificial intelligence")}
        </motion.p>
        <motion.p
          variants={slideIn(50, 0, { delay: 0.8, duration: 0.6 })}
          initial="initial"
          animate="animate"
          className="md:w-[50%] w-[90%] text-center"
        >
          {t("Leverage the power of artificial intelligence")}
        </motion.p>
        <motion.button
          variants={slideIn(50, 0, { delay: 1.0, duration: 0.6 })}
          initial="initial"
          animate="animate"
          className="md:w-sm w-[80%] p-3 rounded-xl mt-10 cursor-pointer"
          style={{ background: "linear-gradient(to right, #EBDFDE, #BFA7A4)" }}
        >
          {t("start now")}
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;

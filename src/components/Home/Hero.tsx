"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Images } from "../../../public/assets/Images";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/animations";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="flex relative flex-col gap-7 text-white h-auto justify-center items-center  md:mt-32 mt-40 mb-20">
      <div className="flex  justify-center ">
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
          <p className="md:text-sm text-[10px] text-center">
            {t(
              "Where we support the law with the power of artificial intelligence"
            )}
          </p>
        </motion.div>
      </div>
      {/* hero */}
      <div className="flex justify-center items-center flex-col gap-5">
        <motion.h1
          variants={slideIn(50, 0, { delay: 0.2, duration: 0.3 })}
          initial="initial"
          animate="animate"
          className="md:text-[48px] text-[23px] md:max-w-[60%] max-w-[90%] mx-auto text-center font-semibold"
        >
          {t("Revolutionizing legal services through artificial intelligence")}
        </motion.h1>
        <motion.p
          variants={slideIn(50, 0, { delay: 0.4, duration: 0.3 })}
          initial="initial"
          animate="animate"
          className="md:w-[50%] w-[90%] text-center text-[16px]"
        >
          {t("Leverage the power of artificial intelligence")}
        </motion.p>
        <div className="flex md:flex-row flex-col md:gap-7 md:w-[70%] w-[90%]  gap-2  mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center"
          >
            <Link
              href="https://portal.shwra.ai/ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-sm w-full p-3 rounded-lg mt-10 bg-white border border-primary-ai text-primary-ai cursor-pointer md:font-semibold text-center transition-all duration-300"
            >
              {t("start now2")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center"
          >
            <Link
              href="https://portal.shwra.ai/ar/demo/detailsForm"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-sm w-full p-3 rounded-lg md:mt-10 mt-5 cursor-pointer md:font-semibold text-center transition-all duration-300"
              style={{
                background: "linear-gradient(to right, #EBDFDE, #BFA7A4)",
              }}
            >
              {t("demo now")}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

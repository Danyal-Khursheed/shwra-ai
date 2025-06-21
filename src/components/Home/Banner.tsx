"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Images } from "../../../public/assets/Images";
import { motion } from "framer-motion";

const Banner = () => {
  const t = useTranslations();

  return (
    <div
      style={{
        background: "linear-gradient(to left, #1e3a46, #4F5E65)",
      }}
      className="md:max-w-[90%] max-w-full mx-auto md:rounded-lg w-full md:h-[19rem] h-auto flex md:flex-row flex-col justify-center items-center mt-10 md:mt-48 md:mb-32"
    >
      <div className="flex flex-col gap-6 py-10 px-10 w-full md:w-[60%]">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:text-[35px] text-[20px] font-bold leading-snug text-white"
        >
          {t(
            "Shwra gives you the power of artificial intelligence to always stay one step ahead"
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="md:text-[18px] text-[14px] leading-relaxed text-white"
        >
          {t("Shwra helps you perform your legal services better in less time")}
        </motion.p>
        <button className="md:hidden block w-full p-3 rounded-lg mt-4 cursor-pointer bg-primary-ai text-white font-semibold">
          {t("start now")}
        </button>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden md:flex justify-end items-center w-[40%] h-full"
      >
        <Image
          src={Images?.musheer_interface}
          alt="Musheer Interface"
          width={400}
          height={400}
          className="-translate-y-3/8 translate-x-6"
        />
      </motion.div>
    </div>
  );
};

export default Banner;

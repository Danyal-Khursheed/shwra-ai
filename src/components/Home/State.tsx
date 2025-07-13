"use client";
import React, { FC } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Images } from "../../../public/assets/Images";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/animations";
import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AlertBanner from "../banner/AlertBanner";

interface cardinterface {
  title: string;
  description: string;
  descriptionEn: string;
}

const State = () => {
  const t = useTranslations();

  return (
    <div>
      <AlertBanner />

      <div className="flex md:flex-row flex-col w-full lg:p-10 pt-10 ">
        <div className="w-full text-black  flex flex-col  relative ">
          <div className="self-end md:block hidden">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Image
                className=""
                src={Images?.graph}
                alt=""
                width={150}
                height={150}
                loading="lazy"
              />
            </motion.div>
          </div>
          <div className="flex flex-col md:gap-10 gap-2">
            {" "}
            <motion.h1
              variants={slideIn(50, 0, { delay: 0.2, duration: 0.2 })}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="md:w-[80% font-bold md:text-[33px] text-[22px] px-4"
            >
              {t(
                "Artificial intelligence significantly increases the revenues of legal firms from its first year"
              )}
            </motion.h1>
            <motion.p
              variants={slideIn(50, 0, { delay: 0.2, duration: 0.6 })}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="md:w-[80%] px-4 md:text-black text-gray-500 md:text-[20px] text-[14px]"
            >
              {t(
                "These technologies are not limited to improving operational efficiency"
              )}
            </motion.p>
          </div>

          <div className="md:flex hidden flex-row">
            <div className="w-[70%]"></div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Image
                className=""
                src={Images?.pie_chart}
                alt=""
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full md:p-12 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-2">
            {statsData.map((el: cardinterface, index: number) => (
              <Card
                key={index}
                title={el.title}
                description={el.description}
                descriptionEn={el.descriptionEn}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;

const Card: FC<cardinterface> = ({ title, description, descriptionEn }) => {
  const locale = useLocale();
  const number = parseInt(title.replace(/\D/g, ""), 10);
  const prefix = title.includes("+") ? "+" : "";
  const suffix = title.includes("%") ? "%" : "";

  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  return (
    <>
      <div
        ref={countRef}
        className="bg-[#F8F6F6] border border-[#DCCFCC] text-black rounded-xl flex flex-col p-4 justify-center items-center h-40 md:h-52 lg:h-40 md:gap-6 gap-2"
      >
        <h1 className="md:text-[34px] text-[26px]" dir="ltr">
          {isInView ? (
            <CountUp
              end={number}
              duration={4}
              prefix={prefix}
              suffix={suffix}
            />
          ) : (
            `${prefix}0${suffix}`
          )}
        </h1>
        <p className="text-center md:text-[14px] text-[12px]">
          {locale === "ar" ? description : descriptionEn}
        </p>
      </div>
    </>
  );
};

const statsData = [
  {
    title: "66%",
    description:
      "من الشركات يؤكدون على زيادة العملاء بعد استخدام الذكاء الاصطناعي",
    descriptionEn:
      "Companies confirm an increase in customers after using artificial intelligence",
  },
  {
    title: "65%",
    description: "من العملاء يفضلون الشركات التي تستخدم الذكاء الاصطناعي",
    descriptionEn:
      "Customers prefer companies that use artificial intelligence",
  },
  {
    title: "80%",
    description: "توفير للوقت المخصص سابقا لمراجعة العقود",
    descriptionEn: "Saving time previously allocated to reviewing contracts",
  },
  {
    title: "20%",
    description: "توفير في تكاليف الخدمات القانونية",
    descriptionEn: "Savings on legal services costs",
  },
  {
    title: "40%",
    description: "توفير للوقت الذي كان يهدر في البحث اليدوي",
    descriptionEn: "Save time wasted on manual searching",
  },
  {
    title: "79%",
    description:
      "من المحامين استخدموا الذكاء الاصطناعي سنة 2024، بزيادة كبيرة عن 2023.",
    descriptionEn: "Lawyers used AI in 2024, a significant increase from 2023.",
  },
];

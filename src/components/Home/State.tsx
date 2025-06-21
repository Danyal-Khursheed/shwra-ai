"use client";
import React, { FC } from "react";
import Banner from "../banner/Banner";
import { useTranslations } from "next-intl";
import { Images } from "../../../public/assets/Images";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/animations";
import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface cardinterface {
  title: string;
  description: string;
}

const State = () => {
  const t = useTranslations();
  return (
    <div>
      <Banner
        text={t("Among law firms that use artificial intelligence")}
        boldText={"72%"}
        buttonText={t("start now")}
        onClick={() => console.log("")}
      />

      <div className="flex md:flex-row flex-col w-full md:p-10 pt-10 ">
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
              className="md:w-[80% font-bold md:text-[40px] text-[22px] px-4"
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-2">
            {statsData.map((el: cardinterface, index: number) => (
              <Card key={index} title={el.title} description={el.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;

const Card: FC<cardinterface> = ({ title, description }) => {
  const number = parseInt(title.replace(/\D/g, ""), 10);
  const prefix = title.includes("+") ? "+" : "";
  const suffix = title.includes("%") ? "%" : "";

  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  return (
    <>
      <div
        ref={countRef}
        className="bg-primary-golden text-black rounded-xl flex flex-col p-4 justify-center items-center h-40 md:gap-6 gap-2"
      >
        <h1 className="md:text-[36px] text-[26px] font-semibold">
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
        <p className="text-center md:text-[16px] text-[12px]">{description}</p>
      </div>
    </>
  );
};

const statsData = [
  {
    title: "+66%",
    description:
      "من الشركات يؤكدون على زيادة العملاء بعد استخدام الذكاء الاصطناعي",
  },
  {
    title: "+65%",
    description: "من العملاء بفضلون الشركات التي تستخدم الذكاء الاصطناعي",
  },
  {
    title: "+80%",
    description: "توفير الوقت المخصص سابقًا لمراجعة العقود سابقًا",
  },
  {
    title: "+20%",
    description: "توفير في تكاليف الخدمات القانونية",
  },

  {
    title: "+40%",
    description: "توفير للوقت الذي كان يهدر في البحث اليدوي",
  },
];

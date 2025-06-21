"use client";
import React, { useEffect, useState } from "react";
import HeadingTitle from "../heading/HeroHedaing";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Images } from "../../../public/assets/Images";
import axios from "axios";

const Packages = () => {
  const t = useTranslations();
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const handleToggleExpand = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const fetchData = () => {
    const response = axios.get(
      `https://shwraapidevops.azurewebsites.net/api/Subscription/GetAllPackages?NoOfUsers=0`
    );
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="flex flex-col gap-5 text-black">
      <HeadingTitle
        text={t("Shawra Packages")}
        heading={t("Shawra AI Packages")}
        description={t(
          "AI-powered legal services for greater accuracy, faster results, and better decisions"
        )}
      />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-10 max-w-[90%] mx-auto">
        {shawraPackages.map((item, ind) => (
          <PackageCard
            key={ind}
            items={item}
            ind={ind}
            expandedCardIndex={expandedCardIndex}
            handleToggleExpand={handleToggleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;

const PackageCard = ({
  items,
  ind,
  expandedCardIndex,
  handleToggleExpand,
}: any) => {
  const t = useTranslations();

  return (
    <div
      style={{ boxShadow: "0px 5px 20px 0px #14142B14" }}
      className={`w-full flex flex-col justify-between overflow-hidden rounded-xl min-h-[400px] p-8 bg-white`}
    >
      <div className="flex flex-col overflow-x-hidden gap-3">
        <p className="font-[600] text-[23px] min-h-14">{items.name}</p>
        <p className="text-[14px] text-[#667085] py-4  min-h-24">
          {items.description}
        </p>

        {!items.isCustom ? (
          <>
            <p className="text-[34px] font-bold flex flex-row justify-center items-center">
              {items.price}
              <Image src={Images?.riyal} width={30} height={30} alt="" />
            </p>
            <p className="text-center text-[11px] -mt-2">
              غير شامل ضريبة القيمة المضافة
            </p>
          </>
        ) : (
          <p className="text-[34px] font-bold flex flex-row justify-center items-center">
            {items.price}
          </p>
        )}

        {items.features && (
          <>
            <p className="mt-6  text-[#170F49] font-semibold">{t("Include")}</p>

            <div className="mt-2 text-sm">
              <AnimatePresence initial={false}>
                <motion.div
                  key={expandedCardIndex === ind ? "expanded" : "collapsed"}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {items?.features.map((el: any, index: number) => (
                    <div key={index} className="flex mt-5 flex-row gap-2 py-1">
                      <Image
                        src={el.isActive ? Images.check : Images.uncheck}
                        alt="Check"
                        width={20}
                        height={20}
                      />
                      <p>{el.name}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const shawraPackages = [
  {
    name: "طالب القانون",
    description:
      "الباقة المصممة لاحتياجات الطلبة القانونية الدراسية، من المرحلة الجامعية الأولى إلى الدراسات العليا، لبناء مستقبل قانوني قوي.",
    price: "3,000",
    isCustom: false,
    features: [
      { name: "مدير آلي", isActive: true },
      { name: "محرك بحث", isActive: true },
      { name: "عدد محدود من الأسئلة", isActive: true },
      { name: "الحصول على آخر التحديثات القانونية", isActive: true },
      { name: "مدير حساب", isActive: true },
    ],
  },
  {
    name: "الممارس القانوني",
    description: "باقة مناسبة للإمكانيات الحالية لأعمال الممارس القانوني.",
    price: "956.25",
    isCustom: false,
    features: [
      { name: "مدير آلي", isActive: true },
      { name: "محرك بحث", isActive: true },
      { name: "عدد غير محدود من الأسئلة", isActive: true },
      { name: "الحصول على آخر التحديثات القانونية", isActive: true },
    ],
  },
  {
    name: "الشركات والجهات الحكومية",
    description: "مُصمم ليتم تحديده وتشكيله حسب احتياجات الكيان القانوني.",
    price: "مخصص",
    currency: "",
    isCustom: true,
    features: [
      { name: "مدير آلي", isActive: true },
      { name: "محرك بحث", isActive: true },
      { name: "مدير حساب", isActive: true },
      { name: "عدد غير محدود من الأسئلة", isActive: true },
      { name: "الحصول على آخر التحديثات القانونية", isActive: true },
    ],
  },
];

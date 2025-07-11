"use client";
import React, { useEffect, useState } from "react";
import HeadingTitle from "../heading/HeroHedaing";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Images } from "../../../public/assets/Images";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const Packages = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [packageData, setPackageData] = useState<Package[]>([]);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const handleToggleExpand = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `
https://shwra-prod.azurewebsites.net/api/Subscription/GetAllPackages?NoOfUsers=0`,
        {
          headers: {
            "Accept-Language": locale === "en" ? "en-US" : "ar-SA",
          },
        }
      );
      setPackageData(response?.data?.result);
    } catch (error) {
      console.log(error);
    }
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

      <div className=" hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 w-[90%] max-w-[1400px] mx-auto  p-4">
        {packageData?.map((item: Package, ind: number) => (
          <PackageCard
            key={ind}
            items={item}
            ind={ind}
            expandedCardIndex={expandedCardIndex}
            handleToggleExpand={handleToggleExpand}
          />
        ))}
      </div>
      <div className="md:hidden block">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {packageData?.map((item: Package, ind: number) => (
            <SwiperSlide key={ind}>
              <PackageCard
                key={ind}
                items={item}
                ind={ind}
                expandedCardIndex={expandedCardIndex}
                handleToggleExpand={handleToggleExpand}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Packages;

interface PackageCardProps {
  items: Package;
  ind: number;
  expandedCardIndex: number | null;
  handleToggleExpand: (index: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  items,
  ind,
  expandedCardIndex,
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const digitsCount = items.annualPackageAmount
    ?.toString()
    ?.replace(".", "")?.length;

  return (
    <div
      // style={{ boxShadow: "0px 5px 20px 0px #14142B14" }}
      className={`md:w-full flex flex-col justify-between bg-white rounded-xl h-[720px] p-8 my-4 w-[75%] shadow-md`}
    >
      <div className="flex  flex-col overflow-x-hidden gap-3">
        <div className="flex flex-col">
          <p className="font-[600] text-[23px] min-h-10">{items.name}</p>
          <p className="text-[14px] text-[#667085] py-4   min-h-20">
            {items.description}
          </p>
        </div>

        {true ? (
          <>
            <p className="text-[34px] font-bold flex flex-row justify-center items-center">
              {items.annualPackageAmount}
              <Image
                src={Images?.riyal}
                width={30}
                height={30}
                alt="Riyal icon"
              />
            </p>

            <div className="flex justify-center items-center w-full -mt-4">
              <div className="relative">
                <span className="text-[20px] flex flex-row text-[#667085] pe-1">
                  {items.annualPackageAmount * 2}
                  <Image
                    src={Images?.riyal}
                    width={20}
                    height={20}
                    alt="Riyal icon"
                  />
                </span>
                <div
                  className={`absolute top-1/2 border-red-600 ${
                    locale === "en" ? "-left-1" : "left-4"
                  } ${
                    digitsCount >= 5
                      ? "w-[70px]"
                      : digitsCount === 3
                      ? "w-[45px]"
                      : digitsCount === 4
                      ? "w-[45px]"
                      : digitsCount < 3
                      ? "w-[28px]"
                      : "w-[60px]"
                  } border-t-4 -rotate-[15deg]`}
                ></div>
              </div>
            </div>

            <div className="flex flex-row gap-3  justify-center items-center">
              <p className="text-center text-[11px] -mt-2">
                غير شامل ضريبة القيمة المضافة
              </p>
            </div>
          </>
        ) : (
          <p className="text-[34px] font-bold flex flex-row justify-center items-center">
            {items.annualPackageAmount}
          </p>
        )}

        {items.features && (
          <>
            <p className="md:mt-6 mt-2  text-[#170F49] font-semibold">
              {t("Include")}
            </p>

            <div className="mt-2 text-sm min-h-72">
              <AnimatePresence initial={false}>
                <motion.div
                  key={expandedCardIndex === ind ? "expanded" : "collapsed"}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {items?.features.map((el: Feature, index: number) => (
                    <div
                      key={index}
                      className="flex md:mt-5 mt-2 flex-row gap-2 py-1"
                    >
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

export interface Package {
  id: string;
  name: string;
  description: string;
  annualPackageAmountNotSpecified: boolean;
  annualPackageAmount: number;
  vat: number;
  annualPackageAmountWithVAT: number;
  amountPerUser: number;
  refundAmount: number | null;
  payableAmount: number | null;
  numberOfUserNotSpecified: boolean;
  numberOfUser: number;
  accountManager: boolean;
  allowedPaymentMethods: number[];
  isActive: boolean;
  recommendedFor: number;
  features: Feature[];
}

export interface Feature {
  id: string;
  name: string;
  description: string | null;
  amount: number;
  route: string | null;
  refCode: string;
  isActive: boolean;
}

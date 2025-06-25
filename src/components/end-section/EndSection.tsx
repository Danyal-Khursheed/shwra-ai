"use client";
import React from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import useAppStoreLink from "@/hooks/useStoreNavigator";

const EndSection = ({
  noPadding = false,
  noMargin = false,
}: {
  noPadding?: boolean;
  noMargin?: boolean;
}) => {
  const translate = useTranslations("Website");
  const appStoreLink = useAppStoreLink();

  return (
    <div
      className={` ${noMargin ? "" : "mt-16"} ${
        noPadding ? "px-0 md:px-0 lg:px-0" : "xl:px-9"
      }`}
    >
      <div className=" bg-[#DDB669] rounded-[0px] md:rounded-[24px] flex flex-col p-[32px] md:p-[64px] items-center text-center gap-10 overflow-hidden">
        <div className="flex flex-col gap-5 ">
          <motion.p
            variants={slideIn(0, 50)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="font-[madaniArabicSemiBold] text-[26px] md:text-[40px] text-white "
          >
            {translate("Request Your Legal Service Now")}
          </motion.p>
          <motion.p
            variants={slideIn(0, 50, { delay: 0.2 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-[16px] md:text-[20px] text-white"
          >
            {translate("Experience a seamless and direct")}
          </motion.p>
        </div>
        <Link target="_blank" href={appStoreLink}>
          <motion.button
            variants={slideIn(0, 50, { delay: 0.4 })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="cursor-pointer py-3 w-[280px] lg:w-[358px] rounded-md text-white text-[18px]"
            style={{
              backgroundColor: `#173039`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {translate("ButtonText2")}
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default EndSection;

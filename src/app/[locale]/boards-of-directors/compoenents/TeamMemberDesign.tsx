"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import useScreenWidth from "@/hooks/useWindowWidth";
import { Images } from "../../../../../public/assets/Images";

interface TeamMember {
  index?: number;
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin: string;
  email: string;
  Qualifications: string;
  degrees: {
    degreeName1: string;
    degreeLocation: string;
    degreeName2: string;
    degreeLocation2: string;
    degreeName3?: string;
    degreeLocation3?: string;
  };
}

const TeamMemberDesign = ({
  image,
  name,
  position,
  description,
  linkedin,
  email,
  Qualifications,
  degrees,
  index,
}: TeamMember) => {
  const translate = useTranslations();
  const isMobile = useScreenWidth(860);

  return (
    <motion.div
      variants={slideIn(0, isMobile ? 0 : 100, {
        opacity: 0,
        delay: index && index * 0.2,
      })}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className="flex flex-col bg-[#F9FAFB] p-5 lg:p-6 items-center m-4 md:m-0 justify-between flex-1"
    >
      {/* Image and Name */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          loading="lazy"
          className="w-[80px] h-[80px] rounded-full bg-[#D9D9D9] object-contain"
          src={image}
          alt={name}
          width={100}
          height={100}
        />
        <p className=" text-[18px] font-semibold md:text-[16px] lg:text-[18px]  mt-2 text-center">
          {name}
        </p>
        <p className="text-primary-ai text-[16px] md:text-[14px] lg:text-[16px] text-center">
          {position}
        </p>
      </div>

      {/* Description */}
      <div className="flex-1 mt-4 mb-4">
        <p className="text-[var(--textColor)] text-[16px] md:text-[14px] lg:text-[16px] text-justify">
          {description}
        </p>
      </div>

      {/* Qualifications */}
      <div className="w-full">
        <div className="border-t-2 border-primary-ai pt-1 w-[150px]"></div>
        <p className="text-[16px] font-[600] mb-2">{Qualifications}:</p>
        <div className="flex flex-col gap-2">
          <p className="flex items-start gap-3 text-sm font-semibold lg:text-[14px]">
            <span className="flex-shrink-0">{degrees?.degreeName1}</span>
            <span className="flex-grow font-normal text-xs lg:text-[14px]">
              {translate(degrees?.degreeLocation)}
            </span>
          </p>
          <p className="flex items-start gap-3 text-sm font-semibold lg:text-[14px]">
            <span className="flex-shrink-0">{degrees?.degreeName2}</span>
            <span className="flex-grow font-normal text-xs lg:text-[14px]">
              {translate(degrees?.degreeLocation2)}
            </span>
          </p>
          {degrees?.degreeLocation3 && (
            <p className="flex items-start gap-3 text-sm font-semibold lg:text-[14px]">
              <span className="flex-shrink-0">{degrees?.degreeName3}</span>
              <span className="flex-grow font-normal text-xs lg:text-[14px]">
                {translate(degrees?.degreeLocation3)}
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-5 mt-4">
        <Link href={linkedin}>
          <Image
            loading="lazy"
            className="w-[19px] h-[20px] opacity-70 cursor-pointer"
            src={Images.Linkdin}
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </Link>
        <Link href={"mailto: " + email}>
          <Image
            loading="lazy"
            className="w-[23px] h-[20px] opacity-70 cursor-pointer"
            src={Images.EmailNew}
            alt="Email"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default TeamMemberDesign;

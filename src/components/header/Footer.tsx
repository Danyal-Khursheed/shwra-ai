"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Images } from "../../../public/assets/Images";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import { usePathname } from "next/navigation";

function Footer() {
  const translate = useTranslations("");
  const language = useLocale();
  const pathname = usePathname();
  type LinkItem = {
    id: number;
    title: string;
    href: string;
  };

  const Links = [
    { id: 1, title: translate("Home"), href: `/${language}/` },
    {
      id: 2,
      title: translate("About Shwra"),
      href: `/${language}/boards-of-directors`,
    },
    { id: 4, title: translate("Contact Us"), href: `/${language}/contact-us` },
    { id: 4, title: translate("FAQs"), href: `/${language}/faqs` },
    { id: 4, title: translate("privacy"), href: `/policies` },
    { id: 4, title: translate("terms"), href: `/terms` },
  ];

  const isHomePage =
    pathname === `/${language}` || pathname === `/${language}/`;
  const buttonText = isHomePage ? translate("start now") : translate("Demo");

  return (
    <section className="font-madaniArabicMedium bg-primary-ai-light py-10 mt-16 px-4 md:px-0  text-black">
      <div className="flex flex-col md:flex-row  max-w-[90%] mx-auto">
        <div className="flex flex-col gap-5 flex-1">
          <Image
            height={100}
            loading="lazy"
            src={Images.shwra_ai}
            alt="ShwraLogo"
            width={280}
          />
          <p className="text-justify text-sm font-normal max-w-lg">
            {translate("It is a licensed Saudi electronic platform")}
          </p>
          <div>
            <ul
              className="flex md:text-start md:flex-row flex-col gap-5 text-base"
              style={{ fontWeight: 300 }}
            >
              {Links?.map((dropdown: LinkItem, i: number) => (
                <li key={i}>
                  <Link
                    className="flex flex-col border-b  border-[#171717] w-fit"
                    href={`${dropdown.href}` || "/"}
                  >
                    {dropdown.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:items-end mt-4">
          <div className="flex flex-col items-center gap-3">
            <motion.div
              variants={slideIn(50, 0, { delay: 1.0, duration: 0.6 })}
              initial="initial"
              animate="animate"
              className="w-full flex justify-center"
            >
              <a
                href="https://portal.shwra.ai/ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-sm w-[80%] p-3 rounded-lg mt-10 cursor-pointer md:font-semibold text-center bg-primary text-white"
              >
                {buttonText}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-x-10 pt-10 justify-center text-[#475467] text-sm w-full ">
        <div className="flex gap-2">
          <a href="tel:920033635">920033635</a>
          <Image
            height={20}
            className="object-contain"
            width={20}
            src={Images.Phone}
            alt="Phone Icon"
          />
        </div>
        <div className="flex gap-2">
          <a href="mailto:info@shwra.sa">info@shwra.sa</a>
          <Image
            height={20}
            className="object-contain"
            width={20}
            src={Images.Email}
            alt="Email Icon"
          />
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col-reverse justify-end md:justify-between items-center  max-w-[90%] mx-auto"
        dir="ltr"
      >
        <div className="flex gap-x-10 mt-6 -mb-6 md:justify-start items-center justify-center text-[#475467] text-sm ">
          <div className="flex gap-2">
            <p>&copy; 2025 Shwra. All rights reserved.</p>
          </div>
        </div>

        <div className="flex gap-x-9 items-center md:mb-0 mt-6 md:justify-end justify-center">
          <Link target="_blank" href="https://x.com/shwraApp" passHref>
            <Image
              height={20}
              loading="lazy"
              className="object-contain"
              width={20}
              src={Images.Twitter}
              alt="Twitter Logo"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/shwraapp/"
            passHref
          >
            <Image
              height={20}
              loading="lazy"
              className="object-contain"
              width={20}
              src={Images.Linkdin}
              alt="LinkedIn Logo"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/shwraapp"
            passHref
          >
            <Image
              height={20}
              loading="lazy"
              className="object-contain"
              width={20}
              src={Images.Insta}
              alt="Instagram Logo"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/people/%D8%B4%D9%88%D8%B1%D9%89-Shwra/61553127944298/?mibextid=LQQJ4d"
            passHref
          >
            <Image
              height={20}
              className="object-contain"
              width={20}
              src={Images.FaceBook}
              alt="Facebook Logo"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.tiktok.com/@shwraapp?is_from_webapp=1&sender_device=pc"
            passHref
          >
            <Image
              height={20}
              className="object-contain"
              width={20}
              src={Images.TikTok}
              alt="Tiktok Logo"
            />
          </Link>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=966550592033&text&type=phone_number&app_absent=0"
            passHref
          >
            <Image
              height={20}
              loading="lazy"
              className="object-contain"
              width={20}
              src={Images.Whatsapp}
              alt="Whatsapp Logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;

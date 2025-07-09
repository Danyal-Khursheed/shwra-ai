"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Images } from "../../../public/assets/Images";
import Language from "./components/Language";
import useLanguage from "@/hooks/useLanguage";
import { useLocale } from "next-intl";
import MenuMapping from "./components/menuMapping";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import useScreenWidth from "@/hooks/useWindowWidth";

interface navbarInterface {
  textBlack?: boolean;
}

const UpdatedNavBar: FC<navbarInterface> = ({ textBlack }) => {
  const { isArabic } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const isMobile = useScreenWidth(768);
  const locale = useLocale();

  useEffect(() => {
    const visibleSidebar = document.getElementById("visible-sidebar");

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      visibleSidebar?.classList.remove("z-[999999]");
      visibleSidebar?.classList.add("z-20");
    } else {
      document.body.classList.remove("overflow-hidden");
      visibleSidebar?.classList.remove("z-20");
      visibleSidebar?.classList.add("z-[999999]");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div
      style={{ direction: isArabic ? "rtl" : "ltr" }}
      className={`w-full flex justify-around items-center md:py-3 bg-transparent  z-40 ${
        textBlack ? "text-black" : "text-white"
      } `}
    >
      <div
        className={`hidden lg:flex  items-center  
            justify-between w-full  md:max-w-[80%] `}
      >
        <div className=" flex flex-row gap-12">
          <motion.div
            variants={slideIn(0, -10, { delay: 0 })}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: isMobile ? false : true }}
          >
            <Image
              className=""
              src={textBlack ? Images.shwra_black : Images.ShwraLogo}
              alt="ShwraLogo"
              width={47}
              height={40}
            />
          </motion.div>
          {pathname !== `/${locale}/campaign` && (
            <MenuMapping textBlack={textBlack} />
          )}
        </div>
        {/* <div className="flex flex-row gap-8">
          <motion.div
            variants={slideIn(0, -10, { delay: 7 * 0.1 })}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: isMobile ? false : true }}
          >
            <Language textBlack={textBlack} />
          </motion.div>
        </div> */}
      </div>
      {/* Mobile Header */}
      <div
        id="updated-navbar"
        className={`flex lg:hidden items-center justify-between w-full px-4 py-3 responsive-Header-color  top-0  left-0 z-20`}
      >
        <Image
          src={textBlack ? Images.shwra_ai : Images.MobileShwraLogo}
          alt="ShwraLogo"
          width={170}
          height={40}
        />
        <div className="flex flex-row gap-5">
          <div className="">{/* <Language textBlack={textBlack} /> */}</div>
          <button onClick={toggleMenu} className="">
            <Image
              src={textBlack ? Images.toggle : Images.ToggelButton}
              alt="toggle"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed ${
          textBlack ? "bg-white" : "bg-primary"
        }  top-0 left-0 h-full w-64  shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={toggleMenu} className="text-darkBlue">
            <Image
              src={textBlack ? Images.toggle : Images.ToggelButton}
              alt="toggle"
              width={30}
              height={30}
            />
          </button>
          <Image
            src={textBlack ? Images.shwra_black : Images.ShwraLogo}
            alt="ShwraLogo"
            width={47}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-4 px-4">
          <MenuMapping toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary/50 backdrop-blur-sm bg-opacity-50 z-20 "
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default UpdatedNavBar;

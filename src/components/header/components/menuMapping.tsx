import React from "react";
import { menuItems } from "./menuItems";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import useScreenWidth from "@/hooks/useWindowWidth";

interface MenuItem {
  label: string;
  arabicLabel: string;
  key: string;
  href?: string;

  toggleMenu?: () => void;
}

const MenuMapping = ({
  toggleMenu,
  textBlack,
}: {
  toggleMenu?: () => void;
  textBlack?: boolean;
}) => {
  const { isArabic } = useLanguage();
  const locale = useLocale();
  const pathname = usePathname();
  const isHomePage = ["/en", "/ar"].includes(pathname);
  const isMobile = useScreenWidth(768);

  return (
    <>
      {menuItems?.map((item: MenuItem, index: number) => {
        const isActive = item.href
          ? item.key === "/home"
            ? isHomePage
            : pathname.includes(item.href)
          : false;
        return (
          <div className="pt-1" key={index}>
            {/* {item.dropdown ? (
              <>
                <div className="relative group pb-2">
                  <motion.button
                    variants={slideIn(0, -10, { delay: 3 * 0.1 })}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: isMobile ? false : true }}
                    id="dropdownNavbarLink"
                    className={`flex items-center justify-between w-full  text-gray-900 rounded md:p-0 md:w-auto ${
                      isActive ? "text-primaryGolden" : ""
                    }`}
                  >
                    {isArabic ? item.arabicLabel : item.label}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </motion.button>
                  <motion.div
                    variants={slideIn(0, 20, {
                      delay: 0,
                      opacity: 1,
                      type: "spring",
                    })}
                    initial="initial"
                    whileInView={"animate"}
                    className="absolute bg-white top-8 left-0 z-50 hidden group-hover:block font-normal  w-56 divide-y divide-gray-100 rounded-lg shadow"
                  >
                    <div
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      {item.dropdown?.map((dropdown: any, index: number) => {
                        const isActive = activeLink === dropdown.href;

                        return (
                          <motion.div
                            key={index}
                            variants={slideIn(0, 20, {
                              delay: (index + 1) * 0.05,
                              type: "spring",
                            })}
                            initial="initial"
                            whileInView={"animate"}
                          >
                            <Link
                              href={`/${locale}${dropdown.href} ` || "/"}
                              onMouseEnter={() => setHoverItem(index)}
                              onMouseLeave={() => setHoverItem(null)}
                              onClick={toggleMenu}
                              className={`flex flex-row   items-center gap-3 p-2 border-b  last:border-none ${
                                hoverItem === index || isActive
                                  ? "bg-primaryGolden text-white border-primaryGolden"
                                  : "hover:bg-primaryGolden hover:text-white border-borderPrimary"
                              }`}
                            >
                              <Image
                                priority
                                className="animate-fadeIn"
                                src={
                                  hoverItem === index || isActive
                                    ? dropdown?.hoverImgSrc
                                    : dropdown?.imgSrc
                                }
                                alt="headerImag"
                                width={30}
                                height={30}
                              />

                              <p className="">
                                {isArabic
                                  ? dropdown.arabicLabel
                                  : dropdown.label}
                              </p>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </>
            ) : ( */}
            <motion.div
              variants={slideIn(0, -10, { delay: index * 0.1 })}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: isMobile ? false : true }}
            >
              <Link
                onClick={toggleMenu}
                href={`/${locale}${item.href} ` || "/"}
                className={`text-red hover:text-lightBlue cursor-pointer ${
                  isActive ? `${textBlack && "text-primary-ai"}` : ""
                }  ${isArabic ? "md:text-left" : "md:text-right"}`}
              >
                {isArabic ? item.arabicLabel : item.label}
              </Link>
            </motion.div>
            {/* )} */}
          </div>
        );
      })}
    </>
  );
};

export default MenuMapping;

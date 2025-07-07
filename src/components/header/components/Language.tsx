import { Images } from "../../../../public/assets/Images";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useLayoutEffect, useState } from "react";

interface LanguageInterface {
  textBlack?: boolean;
}

const Language: FC<LanguageInterface> = ({ textBlack }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale() {
    const nextLocale = locale === "ar" ? "en" : "ar";
    const path = pathname?.replace(`/${locale}`, `/${nextLocale}`);
    router.replace(path);
  }

  return (
    <div>
      {isSmallScreen ? (
        <div>
          <div>
            <button
              onClick={changeLocale}
              className="p-3 bg-primary-golden rounded-[50px] text-black flex flex-row gap-2"
              disabled
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={changeLocale}
            className="p-2  rounded flex cursor-pointer flex-row gap-2"
            disabled
          >
            <Image
              className="hidden md:block mt-1"
              src={textBlack ? Images.black_globe : Images.Global}
              alt="Global"
              width={20}
              height={40}
            />
            {locale === "en" ? "العربية" : "English"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Language;

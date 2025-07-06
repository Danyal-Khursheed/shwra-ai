"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiCopy } from "react-icons/fi";
import { Images } from "../../../../../public/assets/Images";

const iconColor = "#b79c99";

interface TooltipProps {
  isVisible: boolean;
}

const Tooltip = ({ isVisible }: TooltipProps) => {
  const t = useTranslations();
  return (
    <span
      className={`text-xs text-green-600 absolute -top-5 w-20 right-0 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {t("Copied")}
    </span>
  );
};

const ContactInfo = () => {
  const t = useTranslations();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const contactItems = [
    {
      icon: <FiMapPin color={iconColor} size={20} />,
      label: t("location"),
      value: "الرياض",
      link: "https://www.google.com/maps/place/%D9%85%D9%86%D8%B5%D8%A9+%D8%B4%D9%88%D8%B1%D9%89+%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA+%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9%E2%80%AD/@24.8233114,46.5934602,21z",
      copyIcon: <Image src={Images?.copy} alt="" width={15} height={15} />,
    },
    {
      icon: <FiMail color={iconColor} size={20} />,
      label: t("email"),
      value: "info@shwra.sa",
      link: null,
      copyIcon: <FiCopy size={16} />,
    },
    {
      icon: <FiPhone color={iconColor} size={20} />,
      label: t("Phone"),
      value: "920033635",
      link: null,
      copyIcon: <FiCopy size={16} />,
    },
  ];

  return (
    <div className="w-full md:max-w-[75%] max-w-[90%] mx-auto p-4 md:p-8 border rounded-xl border-gray-200 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-b border-gray-200 pb-7">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 text-sm text-gray-900 font-medium"
          >
            {item.icon}
            <div className="flex flex-col items-start relative">
              <p className="font-semibold">{item.label}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-[color:#b79c99]">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    onClick={() => handleCopy(item.value, index)}
                    className="cursor-pointer"
                  >
                    {item.value}
                  </span>
                )}

                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCopy(item.value, index)}
                >
                  {item.copyIcon}
                  <Tooltip isVisible={copiedIndex === index} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;

import React, { FC } from "react";

import Image from "next/image";
import { Images } from "../../../public/assets/Images";

import { useTranslations } from "next-intl";

const AlertBanner = () => {
  const t = useTranslations();
  return (
    <div
      className="relative flex flex-row justify-center items-center md:max-w-[85%] max-w-[95%] mx-auto md:h-40 h-60 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(to right, #1e3a46, #3b3f4a)",
      }}
    >
      <div className="absolute right-0 top-0 h-full w-[40%] z-0">
        <Image
          src={Images.background_triangle}
          alt="Background Triangle"
          fill
          className="object-contain"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full px-4 flex flex-row justify-between  items-center  max-w-[95%] mx-auto">
        <p className="font-semibold   text-white">
          <span className="md:text-[16px] text-[10px]  flex-wrap gap-2 flex justify-center items-center">
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              تلتـــــــــــــــــــــــــــــــزم
            </span>
            <span className="md:text-[16px] text-[14px]">شورى</span>
            <span className="md:text-[16px] text-[14px]">باستخدام</span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              أعلى
            </span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              معايير
            </span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              الأمان
            </span>
            <span className="md:text-[16px] text-[14px]">لضمان</span>
            <span className="md:text-[16px] text-[14px]">الحفاظ</span>
            <span className="md:text-[16px] text-[14px]">التام</span>
            <span className="md:text-[16px] text-[14px]">على</span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              خصوصية
            </span>
            <span className="md:text-[16px] text-[14px]">بياناتك.</span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              لا
            </span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              يتم
            </span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              حفظ
            </span>
            <span className="md:text-[16px] text-[14px]">أي</span>
            <span className="md:text-[16px] text-[14px]">محتوى</span>
            <span className="md:text-[16px] text-[14px]">تقوم</span>
            <span className="md:text-[16px] text-[14px]">بإنشائه</span>
            <span className="md:text-[16px] text-[14px]">على</span>
            <span className="md:text-[16px] text-[14px]">المنصة</span>
            <span className="md:text-[16px] text-[14px]">إلا</span>
            <span className="md:text-[16px] text-[14px]">إذا</span>
            <span className="md:text-[16px] text-[14px]">بحفظه</span>
            <span className="md:text-[16px] text-[14px]">كمسودة.</span>
            <span className="md:text-[16px] text-[14px]">كما</span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              نؤكد
            </span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              أن
            </span>
            <span className="text-primary-ai md:text-[21px] text-[18px]">
              بياناتك
            </span>
            <span className="md:text-[16px] text-[14px]">لا</span>
            <span className="md:text-[16px] text-[14px]">تُستخدم</span>
            <span className="md:text-[16px] text-[14px]">بأي</span>
            <span className="md:text-[16px] text-[14px]">شكل</span>
            <span className="md:text-[16px] text-[14px]">من</span>
            <span className="md:text-[16px] text-[14px]">الأشكال</span>
            <span className="md:text-[16px] text-[14px]">في</span>
            <span className="md:text-[16px] text-[14px]">تدريب</span>
            <span className="md:text-[16px] text-[14px]">أنظمة</span>
            <span className="md:text-[16px] text-[14px]">الذكاء</span>
            <span className="md:text-[16px] text-[14px]">الاصطناعي</span>
            <span className="md:text-[16px] text-[14px]">الخاصة</span>
            <span className="md:text-[16px] text-[14px]">بنا.</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AlertBanner;

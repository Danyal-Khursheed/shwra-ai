"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArabicPolicies from "./component/Arabic";
import EnglishPolicies from "./component/English";
import { SiteTitleArabic, SiteTitleEnglish } from "@/constant/meta_data";
import { Images } from "../../../public/assets/Images";

const Page = () => {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const param = new URL(location.href).searchParams.get("lang");
    if (param) {
      setLang(param);
    }
  }, []);

  useEffect(() => {
    document.title = lang === "en" ? SiteTitleEnglish : SiteTitleArabic;
  }, [lang]);

  return (
    <div
      style={{
        paddingTop: "20px",
        paddingLeft: "12px",
        paddingRight: "12px",
        maxWidth: "1280px",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: '"Readex Pro", sans-serif',
        lineHeight: "1.8",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <Image
          loading="lazy"
          src={Images?.shwraFav}
          alt="logo"
          layout="fixed"
          width={150}
          height={150}
        />
      </div>
      {lang === "ar" ? <ArabicPolicies /> : <EnglishPolicies />}
    </div>
  );
};

export default Page;

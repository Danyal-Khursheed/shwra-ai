"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import English from "./component/english";
import Arabic from "./component/arabic";
import { SiteTitleArabic, SiteTitleEnglish } from "@/constant/meta_data";
import { Images } from "../../../public/assets/Images";

const Page = () => {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const location = window.location;
    const param = new URL(location.href).searchParams.get("lang");
    if (param) {
      setLang(param);
    }
  }, []);

  useEffect(() => {
    document.title = lang === "en" ? SiteTitleEnglish : SiteTitleArabic;
  }, [lang]);

  return (
    <Suspense fallback={null}>
      <div
        style={{
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
          className="logo-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
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

        {lang === "en" ? <Arabic /> : <Arabic />}
      </div>
    </Suspense>
  );
};

export default Page;

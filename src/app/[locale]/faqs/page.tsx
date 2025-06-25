import React from "react";
import FaqChild from "./component/FaqsChild";

import { Metadata } from "next";
import {
  FaqsDescriptionArabic,
  FaqsDescriptionEnglish,
  FaqsTitleArabic,
  FaqsTitleEnglish,
} from "@/constant/constant";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: locale === "en" ? FaqsTitleEnglish : FaqsTitleArabic,
    description:
      locale === "en" ? FaqsDescriptionEnglish : FaqsDescriptionArabic,
    alternates: {},
  };
}
const page = ({ params }: { params: { locale: string } }) => {
  return (
    <div>
      <FaqChild params={params} />
    </div>
  );
};

export default page;

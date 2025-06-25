import React from "react";
import FaqChild from "./component/FaqsChild";
import { Metadata } from "next";
import {
  FaqsDescriptionArabic,
  FaqsDescriptionEnglish,
  FaqsTitleArabic,
  FaqsTitleEnglish,
} from "@/constant/constant";

// ✅ Updated interface to match Next.js App Router expectations
interface FaqsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: FaqsPageProps): Promise<Metadata> {
  // ✅ Await the params Promise
  const { locale } = await params;

  return {
    title: locale === "en" ? FaqsTitleEnglish : FaqsTitleArabic,
    description:
      locale === "en" ? FaqsDescriptionEnglish : FaqsDescriptionArabic,
  };
}

// ✅ Updated component to handle async params
const Page = async ({ params }: FaqsPageProps) => {
  // ✅ Await params if you need to use locale in the component
  const { locale } = await params;

  return (
    <div>
      <FaqChild locale={locale} />
    </div>
  );
};

export default Page;

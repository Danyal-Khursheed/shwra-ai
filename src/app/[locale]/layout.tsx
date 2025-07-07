import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "../../globals.css";
import Footer from "@/components/header/Footer";
import { ReactNode } from "react";
import Navbar from "@/components/header/Navbar";
import {
  SiteDescriptionArabic,
  SiteDescriptionEnglish,
  SiteTitleArabic,
  SiteTitleEnglish,
} from "@/constant/meta_data";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: locale === "en" ? SiteTitleEnglish : SiteTitleArabic,
    description:
      locale === "en" ? SiteDescriptionEnglish : SiteDescriptionArabic,
    icons: {
      icon: "/favIcon.svg",
    },
  };
}

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string; slug?: string[] }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // Resolve the params Promise
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Error loading messages:", error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

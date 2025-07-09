import { SiteDescriptionEnglish, SiteTitleEnglish } from "@/constant/meta_data";
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-readex", // optional: for custom property usage
});
export const metadata = {
  title: SiteTitleEnglish,
  description: SiteDescriptionEnglish,
  icons: {
    icon: "/favIcon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={readexPro.className}>
      <body>{children}</body>
    </html>
  );
}

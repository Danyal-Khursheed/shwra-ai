import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useAppStoreLink = () => {
  const [appLink, setAppLink] = useState("");
  const location = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const isLawyerJoinPage = location === `/${locale}/join-as-lawyer`;
    
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    const isAndroid = /Android/i.test(userAgent);

    if (isLawyerJoinPage) {
      setAppLink(
        isAndroid
          ? "https://play.google.com/store/apps/details?id=sa.shwra.lawyer"
          : "https://apps.apple.com/sa/app/%D9%85%D8%AD%D8%A7%D9%85%D9%8A-%D8%B4%D9%88%D8%B1%D9%89/id6443634947"
      );
    } else {
      setAppLink(
        isAndroid
          ? "https://play.google.com/store/apps/details?id=sa.shwra.app"
          : "https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
      );
    }
  }, [location, locale]);

  return appLink;
};

export default useAppStoreLink;

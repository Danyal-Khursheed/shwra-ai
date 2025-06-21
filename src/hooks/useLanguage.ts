import { useLocale } from "next-intl";

const useLanguage = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return { isArabic, locale };
};

export default useLanguage;

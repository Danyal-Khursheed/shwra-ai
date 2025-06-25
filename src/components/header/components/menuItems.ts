interface MenuItem {
  label: string;
  arabicLabel: string;
  key: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
    arabicLabel: string;
    imgSrc?: string;
    hoverImgSrc: string;
  }[];
}

export const menuItems: MenuItem[] = [
  { label: "Home", arabicLabel: "الرئيسية", key: "/home", href: "/" },
  {
    label: "About Shwra",
    arabicLabel: "عن شورى",
    key: "About Shwra",
    href: "/boards-of-directors",
  },
  {
    label: "Contact Us",
    key: "Contact Us",
    arabicLabel: "تواصل معنا",
  },

  {
    label: "FAQs",
    arabicLabel: "الاسئلة الشائعة",
    key: "FAQs",
    href: "/faqs",
  },
];

export const LanguageItem = [
  { label: "EN", value: "en" },
  { label: "العربية", value: "ar" },
];

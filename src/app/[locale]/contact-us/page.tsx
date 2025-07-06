import HeadingTitle from "@/components/heading/HeroHedaing";
import { useTranslations } from "next-intl";
import React from "react";
import ContactInfo from "./components/contact-info";
import Form from "./components/Form";

const Page = () => {
  const translate = useTranslations();
  return (
    <div className="flex flex-col gap-10">
      <HeadingTitle
        text={translate("Contact us")}
        heading={translate("Contact us")}
        description={translate("contact description")}
      />

      <Form />
      <ContactInfo />
    </div>
  );
};

export default Page;

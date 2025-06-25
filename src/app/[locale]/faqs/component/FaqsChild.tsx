"use client";
import ContactSection from "@/components/ContactUs/ContactUs";
import HeadingTitle from "@/components/heading/HeroHedaing";
import Accordion from "@/utils/Accordion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import EndSection from "@/components/end-section/EndSection";
import { faqsData } from "@/constant/faqsData";

const FaqChild = ({ params }: { params: { locale: string } }) => {
  const translate = useTranslations("");

  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  return (
    <div className="bg-[#F9FAFB] -mb-20">
      {" "}
      <div className="bg-white">
        <div className="relative pt-[100px] md:py-[100px] p-4 ">
          <div className={" mt-[-14px]"}>
            <HeadingTitle
              text={translate("FAQ")}
              heading={translate("How can we Help you")}
            />
          </div>
          <motion.p
            variants={slideIn(0, 0, {
              delay: 0.2,
              duration: 0.3,
            })}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{
              lineHeight: "30px",
            }}
            className="text-center md:text-center md:px-12 text-[var(--textColor)] text-[16px] md:text-[20px] mt-6  "
          >
            {translate("Faq page text")}
          </motion.p>
        </div>
      </div>
      <div className="py-16 ">
        <HeadingTitle
          text=""
          heading={translate("Frequently Asked Questions (FAQs) 2")}
        />
        <div className="mt-10 divide-y">
          {faqsData?.map((data, ind) => {
            return (
              <motion.div
                variants={slideIn(0, 0, {
                  delay: 0.2,
                  duration: 0.3,
                })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={ind}
                className=" md:w-[784px] mx-auto py-5 lg:py-7 px-4  border-gray-200"
              >
                <Accordion
                  question={translate(data.question)}
                  answer={translate(data.answer)}
                  isOpen={openIndex === ind}
                  onToggle={() => handleToggle(ind)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="pb-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default FaqChild;

"use client";
import { Images } from "../../../public/assets/Images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";

const ContactSection = () => {
  const Translate = useTranslations();
  return (
    <div className="w-full  xl:px-9  max-w-[90%] mx-auto">
      <motion.div className=" bg-white rounded-lg  py-8 max-w-full text-center">
        <motion.div
          initial="initial"
          whileInView={"animate"}
          variants={slideIn(0, 50, { delay: 0.2 })}
          viewport={{ once: true }}
        >
          <div className="flex justify-center -space-x-4 mb-4">
            <Image
              loading="lazy"
              src={Images?.Avatargroup}
              alt="Team member 1"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {Translate("title")}
          </h2>
          <p className="text-gray-500 mb-6">{Translate("description")}</p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://api.whatsapp.com/send/?phone=966550592033&text&type=phone_number&app_absent=0"
            }
          >
            <button className="bg-primary-ai text-white font-medium py-2 px-8 w-[290px] rounded  cursor-pointer transition duration-200">
              {Translate("ContactUs")}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;

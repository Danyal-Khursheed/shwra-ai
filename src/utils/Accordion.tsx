"use client";
import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface AccordionProps {
  question: string;
  answer?: string;
  list?: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  list,
  onToggle,
}) => {
  const translate = useTranslations();
  return (
    <div onClick={onToggle} className="px-0">
      <div className="flex justify-between items-center cursor-pointer">
        <p className="md:text-[18px] max-w-[80%] font-semibold">{question}</p>
        {isOpen ? (
          <FiMinusCircle
            className="w-[24px] h-[26px] cursor-pointer"
            color="#bda4a1"
          />
        ) : (
          <FiPlusCircle
            className="w-[24px] h-[26px] cursor-pointer"
            color="#bda4a1"
          />
        )}
      </div>

      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            key={question}
            initial={{ height: 0, marginTop: "0", opacity: 0 }}
            animate={{ height: "auto", marginTop: "10px", opacity: 1 }}
            exit={{ height: 0, marginTop: "0", opacity: 0 }}
            className="overflow-hidden w-[96%] text-gray-500 text-sm md:text-[16px]"
          >
            {answer && <p className="mt-2">{answer}</p>}

            {list && list.length > 0 && (
              <ul className=" space-y-2 mt-3">
                {list.map((item, i) => (
                  <li key={i}>{translate(item)}</li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;

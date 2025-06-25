"use client";
import React from "react";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// Define types for props
interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div onClick={onToggle} className="px-0 ">
      <div className="flex justify-between items-center cursor-pointer">
        <p className=" md:text-[18px] max-w-[80%]">{question}</p>
        {isOpen ? (
          <FiMinusCircle
            onClick={onToggle}
            className="w-[24px] h-[26px] cursor-pointer"
            color="#bda4a1"
          />
        ) : (
          <FiPlusCircle
            onClick={onToggle}
            className="w-[24px] h-[26px] cursor-pointer"
            color="#bda4a1"
          />
        )}
      </div>
      <AnimatePresence mode={"sync"}>
        {isOpen && (
          <motion.p
            key={question}
            initial={{ height: 0, marginTop: "0", opacity: 0 }}
            animate={{ height: "auto", marginTop: "10px", opacity: 1 }}
            exit={{ height: 0, marginTop: "0", opacity: 0 }}
            className={`overflow-hidden w-[96%] flex  text-gray-500 text-sm md:text-[16px]`}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;

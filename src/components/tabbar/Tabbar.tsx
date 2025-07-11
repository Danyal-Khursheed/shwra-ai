"use client";
import { useLocale } from "next-intl";
import React, { FC, useRef, useEffect } from "react";

interface TabBarProps {
  activeTab: string | undefined;
  handleActiveTab: (id: string) => void;
  isMobile?: boolean;
}

const HorizontalTabBar: FC<TabBarProps> = ({
  activeTab,
  handleActiveTab,
  isMobile = false,
}) => {
  const locale = useLocale();
  const isEN = locale === "en";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile && scrollContainerRef.current && activeTab) {
      const activeTabElement = scrollContainerRef.current.querySelector(
        `[data-tab-id="${activeTab}"]`
      ) as HTMLElement;

      if (activeTabElement) {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        const tabLeft = activeTabElement.offsetLeft;
        const tabWidth = activeTabElement.offsetWidth;
        const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab, isMobile]);

  return (
    <div
      className="overflow-x-auto scrollbar-hide p-4 px-7"
      ref={scrollContainerRef}
    >
      <div className="flex w-max mx-auto border-y border-gray-300 py-2 items-center justify-center space-x-4 rtl:space-x-reverse">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-tab-id={tab.id}
            onClick={() => handleActiveTab(tab.id)}
            className={`whitespace-nowrap rounded-full cursor-pointer px-6 py-2 h-12 text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-l from-[#e0cfcf] to-[#c8b3b3] text-white"
                : "text-gray-800 hover:text-[#7d6f6f]"
            }`}
          >
            {isEN ? tab.titleEn : tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTabBar;

const tabs = [
  {
    id: "tab-001",
    title: "مشير",
    titleEn: "Musheer",
  },
  {
    id: "tab-002",
    title: "محرك البحث",
    titleEn: "Search Engine",
  },
  {
    id: "tab-003",
    title: "صياغة العقود",
    titleEn: "Contract Drafting",
  },
  {
    id: "tab-004",
    title: "مراجعة العقود",
    titleEn: "Contract Review",
  },
  {
    id: "tab-005",
    title: "تحليل القضايا",
    titleEn: "Case Analysis",
  },
  {
    id: "tab-006",
    title: "ترجمة قانونية",
    titleEn: "Legal Translation",
  },
  {
    id: "tab-007",
    title: "صياغة مستندات قانونية",
    titleEn: "Legal Document Drafting",
  },
  {
    id: "tab-008",
    title: "مراجعة مستندات قانونية",
    titleEn: "Legal Document Review",
  },
  {
    id: "tab-009",
    title: "تلخيص مستندات قانونية",
    titleEn: "Legal Document Summarization",
  },
  {
    id: "tab-010",
    title: "إدارة وتنظيم مهام المحامي",
    titleEn: "Lawyer Task Management",
  },
];

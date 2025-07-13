"use client";
import React, { useState, useEffect } from "react";
import HeadingTitle from "../heading/HeroHedaing";
import { useTranslations } from "next-intl";
import HorizontalTabBar from "../tabbar/Tabbar";
import Image from "next/image";
import { Images } from "../../../public/assets/Images";
import { motion } from "framer-motion";

const Services = () => {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("tab-001");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = ServiceData.findIndex(
          (service) => service.id === prevTab
        );
        const nextIndex = (currentIndex + 1) % ServiceData.length;
        return ServiceData[nextIndex].id;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleActiveTab = (id: string) => {
    setActiveTab(id);
  };

  const selectedService = ServiceData.find(
    (service) => service.id === activeTab
  );

  return (
    <div className="flex flex-col gap-12 text-black">
      <HeadingTitle
        heading={t("Our services using artificial intelligence")}
        description={t(
          "Our services simplify everything related to the legal field"
        )}
      />

      <HorizontalTabBar
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
        isMobile={isMobile}
      />

      {selectedService && (
        <div className="md:bg-primary-ai-light w-[95%] mx-auto md:min-h-[80vh] rounded-lg md:p-8 p-2 flex md:flex-row flex-col-reverse">
          {/* Text Content */}
          <motion.div
            key={`text-${activeTab}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center items-start flex-col md:p-7 p-2 gap-5"
          >
            <h1 className="text-[28px] md:block hidden md:text-[40px] text-primary-ai font-bold">
              {selectedService.title}
            </h1>

            <p className="text-gray-500 min-h-12 md:text-[16px] text-[14px]">
              {selectedService.description}
            </p>

            <ul className="list-disc md:ms-7 ms-3 text-gray-500 space-y-2 md:text-[16px] text-[14px]">
              {selectedService.points?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            {selectedService?.endDescription && (
              <div className="text-gray-500 md:text-[16px] text-[14px]">
                {selectedService.endDescription}
              </div>
            )}
          </motion.div>

          {/* Image Content */}
          <div className="w-full flex justify-center items-center aspect-[4/3]">
            {/* Desktop Image */}
            <motion.div
              key={`desktop-${activeTab}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:block hidden w-full rounded-lg shadow-xl"
            >
              <Image
                src={selectedService.image}
                alt={selectedService.titleEn}
                width={800}
                loading="lazy"
                height={400}
                className="rounded-xl   object-contain"
              />
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              key={`mobile-${activeTab}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative md:hidden block w-full aspect-[4/3]  rounded-lg px-3"
            >
              <Image
                src={selectedService.image}
                alt={selectedService.titleEn}
                fill
                loading="lazy"
                sizes="100vw"
                className="rounded-lg object-contain px-3"
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

const ServiceData = [
  {
    id: "tab-001",
    title: " خدمة مشير بالاعتماد على الذكاء الإصطناعي",
    titleEn: "Musheer service powered by artificial intelligence",
    description:
      " أول مستشار قانوني يعتمد على الذكاء الاصطناعي، يقدم استشارات قانونية بسهولة ويسر، مما يجعل الوصول إلى المعلومة القانونية متاحًا للجميع.",
    descriptionEn:
      "The first legal advisor powered by artificial intelligence, providing legal consultations with ease and convenience, making legal information accessible to everyone.",
    points: [
      "يعتمد مشير على الأنظمة واللوائح القانونية السعودية لضمان تقديم رأي قانوني دقيق وسليم.  ",
      "يقوم بتحليل البيانات القانونية بشكل شامل لتوفير استشارات قانونية موثوقة.  ",
      "يواكب التحديثات المستمرة في المشهد القانوني بالمملكة العربية السعودية، مما يضمن حصول المستخدمين على أحدث المعلومات القانونية المحدثة فور صدورها.",
    ],
    pointsEn: [
      "Musheer relies on Saudi legal systems and regulations to ensure accurate and sound legal opinions.",
      "It thoroughly analyzes legal data to provide reliable legal consultations.",
      "It keeps up with continuous updates in the legal landscape of the Kingdom of Saudi Arabia, ensuring users receive the most up-to-date legal information as soon as it's released.",
    ],
    image: Images.musheer_interface,
    responsiveImage: Images.musheer_interface2,
  },
  {
    id: "tab-002",
    title: "خدمة محرك البحث",
    titleEn: "Legal Search Engine Service",
    description:
      "محرك بحث قانوني متقدم يتيح لك الوصول بسرعة إلى جميع المعلومات القانونية الخاصة بالقوانين والأنظمة السعودية، مما يسهل عملية الوصول الى المعلومات القانونية في وقت قياسي.",
    descriptionEn:
      "An advanced legal search engine that enables you to quickly access all legal information related to Saudi laws and regulations, making it easier to obtain legal information in record time.",
    points: [
      "بحث سريع ودقيق في الأنظمة واللوائح السعودية باستخدام كلمات مفتاحية أو تصنيفات قانونية.",
      "الوصول الفوري إلى أحدث القوانين والتعديلات لضمان الحصول على المعلومات القانونية المواكبة للتحديثات القانونية الجديدة.",
      "شمولية في تغطية الأنظمة، اللوائح، الأحكام القضائية، وكل المعلومات القانونية.",
    ],
    pointsEn: [
      "Fast and accurate search through Saudi laws and regulations using keywords or legal categories.",
      "Instant access to the latest laws and amendments to ensure up-to-date legal information aligned with the newest legal updates.",
      "Comprehensive coverage of laws, regulations, court rulings, and all legal information.",
    ],
    image: Images.searchEngineService,
    responsiveImage: Images.search_engine,
  },
  {
    id: "tab-003",
    title: "خدمة صياغة العقود",
    titleEn: "Contract Drafting Service",
    description:
      "نُصيغ عقودًا مخصصة بدقة واحترافية عالية، تعتمد على نماذج قانونية ذكية، وتشمل:",
    descriptionEn:
      "We draft customized contracts with high precision and professionalism, based on intelligent legal templates, including:",
    points: [
      "توليد عقود تتوافق مع طبيعة كل نشاط أو اتفاقية.",
      "استخدام خوارزميات قانونية لضمان وضوح البنود وحماية الحقوق.",
      "التزام كامل بالقوانين السعودية، مع تحديث تلقائي لأي تغييرات تنظيمية.",
      "صياغة عقود قابلة للتخصيص، تشمل جميع التفاصيل التي تحتاجها دون تعقيد.",
    ],
    pointsEn: [
      "Contracts generated to align with the nature of each activity or agreement.",
      "Utilization of legal algorithms to ensure clause clarity and rights protection.",
      "Full compliance with Saudi laws, with automatic updates for any regulatory changes.",
      "Customizable contract drafting that includes all the details you need without complexity.",
    ],
    image: Images.contractReviewService,
    responsiveImage: Images.summerization,
  },
  {
    id: "tab-004",
    title: "خدمة مراجعة العقود",
    titleEn: "Contract Review Service",
    description:
      "نقدم مراجعة قانونية دقيقة مدعومة بتقنيات الذكاء الاصطناعي لضمان أقصى درجات الحماية والامتثال، وتشمل:",
    descriptionEn:
      "We provide precise legal contract reviews powered by artificial intelligence to ensure the highest levels of protection and compliance, including:",
    points: [
      "تحليل فوري لبنود العقد لاكتشاف الثغرات والمخاطر القانونية المحتملة.",
      "تقديم توصيات ذكية لتحسين الشروط وضمان التوازن بين الأطراف.",
      "مراجعة متوافقة تمامًا مع الأنظمة واللوائح السعودية، محدثة تلقائيًا.",
      "تقارير واضحة ومبسّطة تسهّل اتخاذ القرار بثقة.",
    ],
    pointsEn: [
      "Instant analysis of contract clauses to detect potential legal gaps and risks.",
      "Smart recommendations to improve terms and ensure balance between parties.",
      "Review fully aligned with Saudi laws and regulations, automatically updated.",
      "Clear and simplified reports that support confident decision-making.",
    ],
    image: Images.contractReviewService,
    responsiveImage: Images.contract_review_interface,
  },
  {
    id: "tab-005",
    title: "خدمة دراسة وتحليل القضايا",
    titleEn: "Case Study and Analysis Service",
    description:
      "نوفر خدمة دراسة وتحليل القضايا القانونية بشكل دقيق، حيث نقوم بتحليل كافة جوانب القضية باستخدام تقنيات الذكاء الإصطناعي، لتقديم رأي قانوني مدروس ودقيق، مع توضيح الحكم المتوقع بناءً على الأنظمة واللوائح.",
    descriptionEn:
      "We provide an in-depth legal case study and analysis service, using artificial intelligence to examine all aspects of a case and deliver a well-considered and accurate legal opinion, along with a prediction of the likely judgment based on applicable laws and regulations.",
    points: [
      "دراسة وتحليل كافة التفاصيل القانونية المتعلقة بالقضية، بما في ذلك النصوص القانونية ذات الصلة والأحكام القضائية السابقة.",
      "توضيح الحكم المتوقع بناءً على البيانات المتاحة، نقدم تقديرًا واقعيًا للحكم المحتمل في القضية، مع شرح الأسباب القانونية لذلك.",
      "توجيه الأطراف المعنية إلى أفضل الخطوات التي يمكن اتخاذها بناءً على التحليل القانوني.",
    ],
    pointsEn: [
      "Study and analysis of all legal aspects of the case, including relevant legal texts and previous court rulings.",
      "Clarification of the expected judgment based on the available data, offering a realistic estimate of the likely outcome with legal reasoning.",
      "Guidance to involved parties on the best possible actions to take based on the legal analysis.",
    ],
    image: Images.caseStudyServiceWebp,
    responsiveImage: Images.case_study,
  },
  {
    id: "tab-006",
    title: "الترجمة القانونية",
    titleEn: "Legal Translation",
    description:
      "توفر شورى للذكاء الإصطناعي خدمة ترجمة قانونية دقيقة واحترافية للوثائق والمستندات القانونية، مع الالتزام بالمصطلحات القانونية الدقيقة والامتثال التام لأنظمة المملكة، مما يضمن دقة الترجمة وسلامة المعنى القانوني على جميع اللغات.",
    descriptionEn:
      "Shawra AI provides accurate and professional legal translation services for legal documents and contracts, strictly adhering to precise legal terminology and full compliance with Saudi regulations—ensuring translation accuracy and preserving the legal meaning across all languages.",
    image: Images.legalTransaltionServiceWebp,
    responsiveImage: Images.translation,
  },
  {
    id: "tab-007",
    title: "صياغة مستندات قانونية",
    titleEn: "Legal Document Drafting",
    description:
      "نساعدك على صياغة مستندات قانونية واضحة واحترافية، تراعي السياق النظامي في المملكة، وتشمل:",
    descriptionEn:
      "We help you draft clear and professional legal documents that align with the regulatory framework in the Kingdom of Saudi Arabia, including:",
    points: [
      "إعداد المذكرات القانونية، قرارات الشركاء، محاضر الاجتماعات، واللوائح الداخلية.",
      "استخدام الذكاء الاصطناعي لتوليد محتوى قانوني دقيق ومتناسق.",
      "ضمان التوافق مع الأنظمة واللوائح السعودية، وتحديث المستندات تلقائيًا عند الحاجة.",
      "تخصيص المستندات حسب طبيعة الجهة (أفراد – شركات – جهات حكومية).",
    ],
    pointsEn: [
      "Drafting legal memos, partner resolutions, meeting minutes, and internal regulations.",
      "Using artificial intelligence to generate accurate and consistent legal content.",
      "Ensuring compliance with Saudi laws and regulations, with automatic updates when needed.",
      "Customizing documents based on the type of entity (individuals – companies – government bodies).",
    ],
    image: Images.documentDraftingServiceWebp,
    responsiveImage: Images.drafting_doc,
  },
  {
    id: "tab-008",
    title: "مراجعة مستندات قانونية",
    titleEn: "Legal Document Review",
    description:
      "نُقدّم مراجعة دقيقة للمستندات القانونية لضمان وضوح الصياغة وسلامة المحتوى، وتشمل:",
    descriptionEn:
      "We provide thorough reviews of legal documents to ensure clarity of language and content accuracy, including:",
    points: [
      "تحليل المذكرات، القرارات، ومحاضر الاجتماعات لاكتشاف الثغرات أو التعارض مع الأنظمة.",
      "تقديم توصيات ذكية لتحسين وضوح النص وجودته القانونية.",
      "التحقق من الامتثال الكامل للوائح السعودية والتعديلات المستجدة.",
      "تقارير مراجعة مبسّطة تساعدك في اتخاذ قرارات واثقة ومدروسة.",
    ],
    pointsEn: [
      "Analyzing memos, resolutions, and meeting minutes to identify gaps or conflicts with regulations.",
      "Providing smart recommendations to enhance the clarity and legal quality of the text.",
      "Verifying full compliance with Saudi regulations and recent amendments.",
      "Simplified review reports that help you make confident and informed decisions.",
    ],
    image: Images.documentReview2ServiceWebp,
    responsiveImage: Images.musheer_interface2,
  },
  {
    id: "tab-009",
    title: "تلخيص مستندات قانونية",
    titleEn: "Legal Document Summarization",
    description:
      "نوفر خدمة تلخيص المستندات القانونية بدقة وكفاءة، مما يساعد في تسهيل فهم المحتوى القانوني المعقد دون الإخلال بالمضمون.",
    descriptionEn:
      "We provide accurate and efficient summarization of legal documents, helping simplify complex legal content without compromising its essence.",
    points: [
      "تلخيص دقيق واحترافي يحافظ على الجوهر القانوني للمستندات.",
      "توافق تام مع الأنظمة واللوائح لضمان صحة المعلومات وسلامتها القانونية.",
      "سرعة في الإنجاز لتوفير الوقت دون التأثير على دقة المحتوى.",
      "وضوح وسهولة في الفهم لمساعدة المختصين وغير المختصين في استيعاب المستندات القانونية بسهولة.",
    ],
    pointsEn: [
      "Professional and precise summaries that preserve the legal essence of documents.",
      "Full compliance with laws and regulations to ensure the accuracy and legal validity of the content.",
      "Fast turnaround to save time without compromising content accuracy.",
      "Clear and easy-to-understand summaries to help both legal professionals and non-specialists grasp legal documents effortlessly.",
    ],
    image: Images.legalSummarizationServiceWebp,
    responsiveImage: Images.summerization2,
  },
  {
    id: "tab-010",
    title: "إدارة وتنظيم مهام المحامي",
    titleEn: "Lawyer Task Management",
    description:
      "نوفّر لك نظامًا ذكيًا يساعد المحامين على تنظيم أعمالهم اليومية بكل سهولة وفعالية، دون عناء التشتت أو ضياع الوقت:",
    descriptionEn:
      "We provide an intelligent system that helps lawyers organize their daily tasks easily and efficiently—eliminating distractions and saving valuable time:",
    points: [
      "لوحة تحكم موحّدة لمتابعة القضايا، الجلسات، العملاء، والمواعيد من مكان واحد.",
      "تنبيهات ذكية لمتابعة المهل القانونية والمواعيد المهمة دون تأخير.",
      "تقارير تلقائية عن أداء العمل، عدد القضايا، حالة كل ملف، ونِسَب الإنجاز.",
      "إدارة ملفات القضايا بذكاء: حفظ، تصنيف، أرشفة، واسترجاع سريع.",
      "نظام متابعة المهام اليومية للمحامي أو فريق العمل، مع إمكانية التخصيص والتوزيع.",
    ],
    pointsEn: [
      "A unified dashboard to track cases, sessions, clients, and appointments all in one place.",
      "Smart alerts to stay on top of legal deadlines and important dates without delays.",
      "Automated reports on performance, case counts, file statuses, and progress rates.",
      "Intelligent case file management: storing, categorizing, archiving, and quick retrieval.",
      "A daily task tracking system for lawyers or team members, with customization and assignment options.",
    ],
    endDescription:
      "تم تصميم هذه الأداة لتوفير وقت المحامي، وتحسين الإنتاجية، وضمان جودة المتابعة القانونية بأعلى المعايير.",
    endDescriptionEn:
      "This tool is designed to save attorneys time, improve productivity, and ensure the highest quality legal follow-up.",
    image: Images.legalSaasServiceWebp,
    responsiveImage: Images.saas,
  },
];

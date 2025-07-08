"use client";
import HeadingTitle from "@/components/heading/HeroHedaing";
import React from "react";
import "./compoenents/boardOfDirectors.css";
import TeamMemberDesign from "./compoenents/TeamMemberDesign";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideIn } from "@/animations";
import { Images } from "../../../../public/assets/Images";

// Dynamic metadata function

const AboutUsChild = () => {
  const teamMemberData = [
    {
      name: "Saleh Elassaf",
      position: "Co-Founder & CEO",
      description: "Saleh Elassaf Description",
      image: Images.Saleh_alassaf,
      linkedin:
        "https://www.linkedin.com/in/saleh-alassaf-553406b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx6b%2FLtnkTsi7%2Bza7QU3i9w%3D%3D ",
      email: "s.alassaf@shwra.sa ",
      Qualifications: "Qualifications",
      degrees: {
        degreeName1: "MBA",
        degreeLocation: "BarryUniversitydescription",
        degreeName2: "BSC",
        degreeLocation2: "FloridaInternationaldescription",
      },
    },
    {
      name: "Abdullah Al Ameri",
      position: "Co-Founder & Director of Legal Services",
      description: "Abdullah Al Ameri Description",
      image: Images.Abdullah_Alamri,
      linkedin: "https://www.linkedin.com/in/abdullah-alaamri-5baa05a7/ ",
      email: "a.alaamri@shwra.sa ",
      Qualifications: "Qualifications",
      degrees: {
        degreeName1: "LLM",
        degreeLocation: "InternationalCommercoaldescription",
        degreeName2: "LLB",
        degreeLocation2: "KingSaudUniversitydescription",
      },
    },
    {
      name: "Abdulaziz Al Dakheel",
      position: "Co-Founder & CFO",
      description: "Abdulaziz Al Dakheel Description",
      image: Images.Abdualaziz_aldakheel,
      linkedin:
        "https://www.linkedin.com/in/abdulaziz-aldakheel-29ba81119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "info@shwra.sa ",
      Qualifications: "Qualifications",
      degrees: {
        degreeName1: "MBA",
        degreeLocation: "AvilaUniversitydescription",
        degreeName2: "B.S",
        degreeLocation2: "FinancialManagmentdescription",
      },
    },

    {
      name: "Mohammed Al Dakheel",
      position: "Co-Founder & Business Development Manager",
      description: "Mohammed Al Dakheel Description",
      image: Images.Mohammad_Aldakheel,
      linkedin: "https://www.linkedin.com/company/shwraapp/mycompany/ ",
      email: "mohaldakeel@shwra.sa ",
      Qualifications: "Qualifications",
      degrees: {
        degreeName1: "Ph.D",
        degreeLocation: "PsychologySaintMarydescription",
        degreeName2: "MSc",
        degreeLocation2: "FinanceSaintMarydescription",
        degreeName3: "B.S",
        degreeLocation3: "FinancialManagementUnidescription",
      },
    },
    {
      name: "Dhaif Allah Al-Wadani",
      position: "Co-Founder & CTO",
      description: "Dhaif Allah Al-Wadani Description",
      image: Images.Dhaif_Allah,
      linkedin: "https://www.linkedin.com/in/dalwadani/ ",
      email: "d.alwadani@shwra.sa ",
      Qualifications: "Qualifications",
      degrees: {
        degreeName1: "Ph.D",
        degreeLocation: "ComputerSciencedescription",
        degreeName2: "MSc",
        degreeLocation2: "UniversityofStirlingdescription",
        degreeName3: "B.S",
        degreeLocation3: "ComputerEngineeringFahddescription",
      },
    },
  ];

  const translate = useTranslations();
  const locale = useLocale();

  return (
    <>
      <div className="md:py-20 pt-20 relative">
        <HeadingTitle
          text={translate("who are we ?")}
          heading={translate("Shwra Platform?")}
        />

        <motion.p
          variants={slideIn(0, 0, { opacity: 0, delay: 0.3 })}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-center text-[#475467] leading-[25px] md:leading-[30px] md:px-12 text-[14px] md:text-[20px] ms-[25px] me-[25px] mb-[15px] md:mb-0 md:me-0 md:ms-0 mt-6"
        >
          {translate("Shwra Platform Text")}
        </motion.p>
      </div>

      <div className="bg-[#E6E6E6] h-[1px] mx-auto md:mx-12 hidden md:block"></div>

      <div className="flex flex-col gap-1 lg:gap-6 py-10 lg:py-16">
        <HeadingTitle
          text={translate("shwra team")}
          heading={translate("Shwra Team")}
        />

        <div
          className={`hidden mt-10 ${
            locale === "en" ? "" : "md:flex-row-reverse"
          } md:flex  flex-col gap-2 lg:gap-7 
        md:flex-row flex-wrap justify-between xl:px-10 max-w-[85%] mx-auto`}
        >
          {teamMemberData
            ?.slice(0, 3)
            ?.sort(() => (locale === "ar" ? -1 : 1))
            ?.map((data, ind) => (
              <TeamMemberDesign
                key={ind}
                index={ind}
                image={data.image}
                name={translate(data.name)}
                description={translate(data.description)}
                position={translate(data.position)}
                linkedin={data.linkedin}
                email={data.email}
                Qualifications={translate(data.Qualifications)}
                degrees={data.degrees}
              />
            ))}
        </div>
        <div className="hidden md:flex flex-col md:flex-row flex-wrap gap-6 justify-between xl:px-10 max-w-[85%] mx-auto">
          {teamMemberData?.slice(3, 5)?.map((data, ind) => (
            <TeamMemberDesign
              key={ind}
              image={data.image}
              name={translate(data.name)}
              description={translate(data.description)}
              position={translate(data.position)}
              linkedin={data.linkedin}
              email={data.email}
              Qualifications={translate(data.Qualifications)}
              degrees={data.degrees}
            />
          ))}
        </div>

        <div className="md:hidden mt-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            autoplay
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
          >
            {teamMemberData?.map((data, ind) => (
              <SwiperSlide key={ind}>
                <div
                  className={`${
                    locale === "ar" ? "min-h-[650px]" : "min-h-[770px]"
                  } overflow-hidden flex`}
                >
                  <TeamMemberDesign
                    image={data.image}
                    name={translate(data.name)}
                    description={translate(data.description)}
                    position={translate(data.position)}
                    linkedin={data.linkedin}
                    email={data.email}
                    Qualifications={translate(data.Qualifications)}
                    degrees={data.degrees}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination gap-1"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AboutUsChild;

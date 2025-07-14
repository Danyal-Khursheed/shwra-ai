"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Autoplay added
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css"; // Your global styles
import Image from "next/image";
import { Images } from "../../../public/assets/Images";

const slides = [
  Images.musheerServicesWebp,
  Images.searchEngineServiceWebp,
  Images.legalSummarizationServiceWebp,
  Images.contractReviewServiceWebp,
  Images.caseStudyServiceWebp,
  Images.legalTransaltionServiceWebp,
  Images.documentDraftingServiceWebp,
  Images.analyze,
  Images.legalSummarizationServiceWebp,
  Images.legalSaasServiceWebp,
];

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            spaceBetween: 15,
            slidesPerView: 1.4,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 50,
            slidesPerView: 2,
          },
          1280: {
            spaceBetween: 10, // Increased spacing for larger screens
            slidesPerView: 2.5, // More slides visible for wider screens
          },
          1400: {
            spaceBetween: 10, // Increased spacing for larger screens
            slidesPerView: 2, // More slides visible for wider screens
          },
        }}
        modules={[Pagination, Autoplay]}
        className="my-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative my-slide aspect-[4/3]">
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <Image
                src={slide}
                alt="Musheer Interface"
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/slider/8.png",
  "/slider/7.png",
  "/slider/6.png",
  "/slider/5.png",
  "/slider/4.png",
  "/slider/3.png",
  "/slider/2.png",
  "/slider/1.png",
];

export default function Slider() {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400 mb-5">
        🎯Indicator Accuracy
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full mb-6 h-auto object-contain"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #facc15;
        }

        .swiper-pagination-bullet {
          background: #ffffff;
          opacity: .6;
        }

        .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
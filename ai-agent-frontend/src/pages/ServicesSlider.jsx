import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Updated import path

const services = [
  {
    title: "Web Development",
    description: "Build modern, responsive websites and web applications.",
    icon: "🌐",
  },
  {
    title: "Mobile Development",
    description: "Create high-performance mobile apps for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Craft user-friendly interfaces and exceptional user experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Promote your brand with effective online strategies.",
    icon: "📢",
  },
];

const ServicesSlider = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSlider;

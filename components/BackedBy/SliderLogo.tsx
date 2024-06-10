"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PartnersData } from "@/lib/PartnersData";

function TestimonialsSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        {PartnersData.data.map((item, index) => (
          <div key={index} className="  ">
            <div className="flex items-center mx-4 bg-black rounded-xl py-6">
              <Image
                src={item.path}
                alt={item.title}
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { TestimonialsSliderData } from "@/lib/TestimonialsSlider";

function TestimonialsSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    dotsClass: "custom_dots slick-dots slick-thumb",
  };
  return (
    <div className="max-w-[350px]">
      <Slider {...settings}>
        {TestimonialsSliderData.data.map((item, index) => (
          <div key={index} className="max-w-[350px]">
            <div
              key={index}
              className="flex flex-col gap-10 items-center text-center"
            >
              <div className="border-white border-[6px] rounded-full custom_gradient_box relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col item-center justify-center gap-8">
                <p>{item.des}</p>
                <div className="flex flex-col gap-2 uppercase">
                  <span>{item.name}</span>
                  <p className="text-sm">{item.industry}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;

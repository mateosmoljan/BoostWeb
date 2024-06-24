"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { TestimonialsSliderData } from "@/lib/TestimonialsSlider";
import shadow from "@/public/assets/images/Shadow.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Diversity3 } from "@mui/icons-material";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="ml-2 p-2 md:p-3 -bottom-[20%] left-1/2 absolute cursor-pointer border-gray-400 border-2 rounded-full"
      onClick={onClick}
    >
      <div>
        <FaArrowRight className="text-[24px] text-gray-400" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="mr-2 p-2 md:p-3  -bottom-[20%] right-1/2 z-10 absolute cursor-pointer border-2 border-gray-400 rounded-full"
      onClick={onClick}
    >
      <div>
        <FaArrowLeft className="text-[24px] text-gray-400" />
      </div>
    </div>
  );
}

function TestimonialsSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full ">
      <div className="w-[30%] h-full absolute left-0 z-10">
        <Image
          src={shadow}
          alt="shadow left"
          width={128}
          height={210}
          className="h-full w-full"
        />
      </div>
      <Slider {...settings}>
        {TestimonialsSliderData.data.map((item, index) => (
          <div key={index} className="!px-5">
            <div className="  h-[450px] max-w-[400px] custom_inset_shadow p-4 md:p-6 rounded-2xl">
              <div className="h-[450px] flex flex-col  justify-between">
                <p className="text-left">{item.des}</p>
                <div className="absolute bottom-10 flex flex-col items-start justify-start gap-2 uppercase">
                  <span>{item.name}</span>
                  <p className="text-sm">{item.industry}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-[30%] h-full absolute right-0 top-0 z-10">
        <Image
          src={shadow}
          alt="shadow right"
          width={128}
          height={210}
          className="h-full w-full rotate-180 "
        />
      </div>
    </div>
  );
}

export default TestimonialsSlider;

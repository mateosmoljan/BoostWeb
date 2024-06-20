import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";
import "./style.css";
import Image from "next/image";

function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20">
      <div className="container">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="">
            What Our
            <span className="text-gradient"> Clients Say </span>
            About US?
          </h2>
          <p className="text-center max-w-[500px]">
            It was very pleasant to work with them, they surpassed by far the
            expectations resulting in a high quality project. I know that they
            have the ability to comply with any type of software, so I do not
            hesitate to recommend them.
          </p>
        </div>
        <div className="flex justify-center md:justify-between">
          <div className="hidden md:flex flex-col justify-between w-[15%]">
            <div className="">
              <Image
                src="/assets/images/client2.png"
                alt="Client profile"
                width={60}
                height={60}
              />
            </div>
            <div className="flex justify-end">
              <Image
                src="/assets/images/client1.png"
                alt="Client profile"
                width={40}
                height={40}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/images/client4.png"
                alt="Client profile"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="relative flex justify-center mt-40">
            <div className="absolute w-[266px] h-[266px] blur-2xl  opacity-50 rounded-full bg-gradient-blue -top-10" />
            <TestimonialsSlider />
          </div>
          <div className="hidden md:flex justify-between flex-col w-[15%]">
            <div className="flex justify-end">
              <Image
                src="/assets/images/client3.png"
                alt="Client profile"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                src="/assets/images/client2.png"
                alt="Client profile"
                width={40}
                height={40}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/images/client1.png"
                alt="Client profile"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

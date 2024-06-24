import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";
import "./style.css";

function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20">
      <div className="w-full">
        <div className="mb-14 container flex flex-col gap-4 items-center">
          <h2 className="">
            What Our
            <span className="text-gradient"> Clients Say </span>
            About US?
          </h2>
          <p className="text-center max-w-[500px]">
            Discover how our expert IT support services have helped businesses
            achieve their full potential.
          </p>
        </div>
        <div className="relative flex justify-center">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

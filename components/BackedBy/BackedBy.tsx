import { PartnersData } from "@/lib/PartnersData";
import Image from "next/image";
import SubscibeEmail from "../SubscibeEmail/SubscibeEmail";
import TestimonialsSlider from "./SliderLogo";

function BackedBy() {
  return (
    <section className=" w-full   pb-80 relative mb-[250px]">
      <div className="container">
        <h2 className="mb-20">Our Partners</h2>
        <div className="">
          <TestimonialsSlider />
        </div>
      </div>
      <SubscibeEmail />
    </section>
  );
}

export default BackedBy;

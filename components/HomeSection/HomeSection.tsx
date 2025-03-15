import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SeeMore from "./SeeMore";
import Image from "next/image";
import image1 from "@/public/assets/images/globeweb.png";

function HomeSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center relative ">
      <div className=" bg-primary w-[150px] absolute h-1/2 top-1/2 -left-[100px]  blur-[200px] opacity-50" />
      <div className=" bg-primary w-[200px] absolute h-1/3 right-0  blur-[150px] opacity-50" />
      <div className="hidden lg:block lg:w-[calc(var(--one)*56)] lg:h-[calc(var(--one)*56)] absolute top-[10%] right-[30%] opacity-40">
        <Image
          src={image1}
          alt="Globe"
          width={108}
          height={108}
          className="w-full h-full"
          placeholder="blur"
        />
      </div>
      <div className="hidden lg:block lg:w-[calc(var(--one)*108)] lg:h-[calc(var(--one)*108)] absolute top-[50%] left-[20%] opacity-40">
        <Image
          src={image1}
          alt="Globe"
          width={108}
          height={108}
          className="w-full h-full"
          placeholder="blur"
        />
      </div>
      <div className="hidden lg:block lg:w-[calc(var(--one)*88)] lg:h-[calc(var(--one)*88)] absolute bottom-[10%] right-[20%] opacity-40">
        <Image
          src={image1}
          alt="Globe"
          width={108}
          height={108}
          className="w-full h-full"
          placeholder="blur"
        />
      </div>
      <div className="container flex flex-col gap-10 h-screen items-center justify-center relative">
        <h1 className="w-[90%] sm:w-auto text-[48px] md:text-[52px] lg:text-[72px] leading-[120%] md:tracking-[-2.16px] tracking-[-1.44px] text-center relative">
          Software Development <br />
          <span className="text-gradient">Modern Solution !</span>
          {/* <div className="hidden sm:block absolute -left-[30%] sm:top-[20%] animate_dust_reverse -z-10">
            <Image
              src="/assets/images/star-dust-blue.svg"
              alt="Dust"
              width={200}
              height={200}
            />
          </div> */}
          <div className="absolute -top-[10%] right-0 xl:-right-[20%] animate_dust -z-10">
            <Image
              src="/assets/images/stars-dust.svg"
              alt="Dust"
              width={300}
              height={300}
            />
          </div>
        </h1>
        <div className="flex justify-center">
          <p className="leading-[130%] w-[90%] sm:w-auto text-gray-400 max-w-[577px] text-center md:text-[24px] text-[18px]">
            Ready-to-use software package that help businesses quickly establish
            and enhance their online presence
          </p>
        </div>
        <div className="flex justify-center gap-8 relative flex-col sm:flex-row w-full  items-center">
          <button className="custom_gradient_box relative p-2 w-[90%] sm:w-auto">
            <Link
              href="/contact"
              className=" btn z-10 flex gap-2 relative items-center justify-center text-[14px] !text-center leading-8 md:text-lg"
            >
              Get Started <FaArrowRight />
            </Link>
          </button>
          {/* <button className="w-[90%] sm:w-auto">
            <Link
              href="/#about"
              className="btn flex gap-2 items-center border-white border-2 justify-center !bg-transparent !text-white text-[14px] leading-8 md:text-lg"
            >
              Explore <FaArrowRight />
            </Link>
          </button> */}
        </div>
        <div>
          <SeeMore />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

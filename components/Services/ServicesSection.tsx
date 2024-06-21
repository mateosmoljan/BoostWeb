import { ServicesCardData } from "@/lib/ServicesCardData";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/assets/images/globeweb.png";
function ServicesSection() {
  return (
    <section className="w-full py-20 relative">
      <div className="hidden lg:block lg:w-[calc(var(--one)*108)] lg:h-[calc(var(--one)*108)] absolute top-0 right-[20%] opacity-30">
        <Image
          src={image1}
          alt="Globe"
          width={108}
          height={108}
          className="w-full h-full"
          placeholder="blur"
        />
      </div>
      <div className="container flex flex-col lg:flex-row gap-3 md:gap-6 relative ">
        <div className="hidden lg:block lg:w-[calc(var(--one)*88)] lg:h-[calc(var(--one)*88)] absolute top-[50%] left-[20%] opacity-30">
          <Image
            src={image1}
            alt="Globe"
            width={108}
            height={108}
            className="w-full h-full"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4 items-center lg:items-start lg:w-[40%] relative">
          <div className="absolute -right-20">
            <Image
              src="/assets/images/stars-dust.svg"
              alt="Logo BoostWeb"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <h2 className="text-center lg:text-left ">What We Do</h2>
          <p className="text-center lg:text-left mb-5">
            Our services include developing robust software, enhancing business
            processes, and delivering top-tier technical support to ensure your
            business thrives in the digital age.
          </p>
          <button className="custom_gradient_box relative p-2">
            <Link href="/services" className="btn relative z-10">
              See All Services
            </Link>
          </button>
        </div>
        <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {ServicesCardData.data.map((item, index) => (
            <div
              key={index}
              className="p-4 flex flex-col lg:flex-row  gap-3 border-transparent hover:border-white_hover border-[1px] rounded-2xl hover:bg-white_hover/10 transition-all duration-500 relative"
            >
              <div className=" relative md:w-[20%]">
                <div className="relative lg:w-full w-[64px]">
                  <Image
                    src={item.bg_image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className=""
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={30}
                      height={30}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[80%] flex flex-col gap-3 lg:gap-[calc(var(--one)*20)]">
                <h4>{item.title}</h4>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

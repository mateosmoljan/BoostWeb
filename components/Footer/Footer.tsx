import { socialsData } from "@/lib/socialsData";
import Image from "next/image";
import "./footer.css";
import image1 from "@/public/assets/images/logo.png";

function Footer() {
  return (
    <footer className="mt-32 relative">
      <div className="absolute w-full h-[300px] blur-3xl  opacity-30  bg-gradient-blue -top-10 left-0 -inset-9 -z-10" />
      <div className="w-full bg-gray2 py-12 z-30">
        <div className="container flex justify-between flex-col  gap-8 items-center">
          <div className=" mb-5 flex items-center gap-2 ">
            <div className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]">
              <Image
                src={image1}
                alt="Logo BoostWeb"
                width={50}
                height={50}
                placeholder="blur"
                className="w-full h-full"
              />
            </div>
            <span className="font-poppins text-2xl tracking-wide	 text-white">
              Boost<span className="text-gradient">Web</span>
            </span>
          </div>
          <div>
            <ul className=" flex flex-col sm:flex-row gap-3 z-30">
              <li className="text-center sm:pr-[calc(var(--one)*40)] sm:border-r-[1px] sm:border-gray-400">
                <a
                  href="/"
                  className="hover:underline opacity-60 hover:opacity-100"
                >
                  Home
                </a>
              </li>

              <li className="  text-center sm:px-[calc(var(--one)*40)] sm:border-r-[1px] sm:border-gray-400">
                <a
                  href="/#services"
                  className="hover:underline opacity-60 hover:opacity-100"
                >
                  Services
                </a>
              </li>
              <li className="  text-center sm:px-[calc(var(--one)*40)] sm:border-r-[1px] sm:border-gray-400">
                <a
                  href="/references"
                  className="hover:underline opacity-60 hover:opacity-100"
                >
                  References
                </a>
              </li>
              <li className=" text-center sm:px-[calc(var(--one)*40)] sm:border-r-[1px] sm:border-gray-400">
                <a
                  href="/#faq"
                  className="hover:underline opacity-60 hover:opacity-100"
                >
                  Faq
                </a>
              </li>
              {/* <li className=" text-center sm:px-[calc(var(--one)*40)]">
                <a
                  href="/blog"
                  className="hover:underline opacity-60 hover:opacity-100"
                >
                  Blog
                </a>
              </li> */}
              <li className=" text-center sm:pl-[calc(var(--one)*40)] sm:border-l-[1px] sm:border-gray-400">
                <a
                  href="/contact"
                  className="hover:underline opacity-60 hover:opacity-100"
                >
                  Start Project
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="flex gap-4 ">
            {socialsData.data.map((item, index) => (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                {item.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>

      <div className="w-screen py-6 border-t-[1px] border-gray-400 -z-10">
        <div className="container flex justify-center text-sm items-center">
          <p className="text-gray-400">
            All Rights Reservd{" "}
            <span className="text-gradient">BoostWeb.io</span> 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

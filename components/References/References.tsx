"use client";
import { ReferencesCardData } from "@/lib/ReferencesCardData";
import { ReferencesTitleData } from "@/lib/ReferencesTitleData";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AiFillCaretUp } from "react-icons/ai";
function ReferencesComponent() {
  const [activeReferences, setActiveReferences] = useState<string>("All");
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  const handleOpenSelect = (title: string) => {
    setActiveReferences(title);
    setOpenSelect(false);
  };

  const referencesData = () => {
    if (activeReferences === "All") {
      return ReferencesCardData.all;
    } else if (activeReferences === "Real Estate") {
      return ReferencesCardData.real_estate;
    } else if (activeReferences === "Blockchain") {
      return ReferencesCardData.blockchain;
    } else if (activeReferences === "E-commerce") {
      return ReferencesCardData.ecommerce;
    } else if (activeReferences === "Technology") {
      return ReferencesCardData.technology;
    } else if (activeReferences === "Other") {
      return ReferencesCardData.other;
    }
  };
  const References = referencesData() || ReferencesCardData.all;

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const dropDown = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    }),
  };

  return (
    <section className="container pt-20 md:pt-52">
      <div className=" flex flex-col gap-10">
        <div className=" bg-primary w-[150px] absolute h-1/2 top-0 -left-[100px]  blur-[200px] opacity-50" />
        <h2 className="text-center relative">
          References{" "}
          <div className="-z-10 absolute -top-5 sm:-right-20 animate_dust">
            <Image
              src="/assets/images/stars-dust.svg"
              alt="Logo BoostWeb"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </h2>
        <div className="flex justify-center">
          <ul className="hidden md:flex items-center p-1.5 rounded-full border-2 border-white_hover gap-2 md:gap-4">
            {ReferencesTitleData.data.map((item, index) => (
              <motion.li
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                key={index}
                className={`${
                  activeReferences === item.title
                    ? "bg-white_hover text-white"
                    : ""
                } cursor-pointer hover:bg-white_hover text-gray-300 rounded-full hover:text-white text-base relative block leading-7 px-6 py-2`}
                onClick={() => setActiveReferences(item.title)}
              >
                <span>{item.title}</span>
              </motion.li>
            ))}
          </ul>
          <div className="relative flex md:hidden w-[225px]">
            <h3
              className="w-[225px] text-xl relative flex justify-center items-center gap-2 p-3 rounded-2xl border-2 border-white_hover"
              onClick={() => setOpenSelect(!openSelect)}
            >
              {activeReferences}{" "}
              <AiFillCaretUp
                className={`text-gray-400 translate-all ${
                  openSelect ? "rotate-180 " : " "
                }`}
              />
            </h3>
            <motion.ul
              variants={dropDown}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className={`overflow-hidden w-[225px] bg-white top-[100%] z-10 absolute items-center justify-center flex-col gap-3 py-1.5 rounded-2xl ${
                openSelect ? "flex" : "hidden"
              }`}
            >
              {ReferencesTitleData.data.map((item, index) => (
                <li
                  key={index}
                  className={`w-full text-center ${
                    activeReferences === item.title ? "bg-gray-400" : ""
                  } z-20 cursor-pointer text-xl relative block leading-7 px-6 py-2`}
                  onClick={() => handleOpenSelect(item.title)}
                >
                  <span className="text-black">{item.title}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 transition-all duration-500">
          {References.map((item, index) => (
            <motion.a
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={`${activeReferences}-${index}`}
              href={item.url}
              target="_blank"
              className=" rounded-2xl hover:shadow-[inset 0 0  10px #ffffff]"
            >
              <div className="mx-auto rounded-2xl overflow-hidden relative hover:shadow-[inset 0 0 10px #ffffff]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  placeholder="blur"
                  className="w-full h-full hover:shadow-[inset 0 0 10px #ffffff]"
                />
                <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-blue p-2 rounded-full">
                  <FaArrowRight className="text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReferencesComponent;

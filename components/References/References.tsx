"use client";
import { ReferencesCardData } from "@/lib/ReferencesCardData";
import { ReferencesTitleData } from "@/lib/ReferencesTitleData";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
function ReferencesComponent() {
  const [activeReferences, setActiveReferences] = useState<string>("All");

  const referencesData = () => {
    if (activeReferences === "All") {
      return ReferencesCardData.all;
    } else if (activeReferences === "Accommodation") {
      return ReferencesCardData.accommodation;
    } else if (activeReferences === "Crypto") {
      return ReferencesCardData.crypto;
    } else if (activeReferences === "Education") {
      return ReferencesCardData.education;
    } else if (activeReferences === "AI") {
      return ReferencesCardData.ai;
    } else if (activeReferences === "Other") {
      return ReferencesCardData.other;
    }
  };
  const References = referencesData() || ReferencesCardData.all;

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section className="container pt-52">
      <div className=" flex flex-col gap-10">
        <div>
          <h2>References</h2>
        </div>
        <div className="flex justify-center">
          <ul className=" flex items-center p-1.5 rounded-full border-2 border-white_hover gap-2 md:gap-4">
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 transition-all duration-500">
          {References.map((item, index) => (
            <motion.a
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={`${activeReferences}-${index}`}
              href={item.url}
              className=" rounded-2xl"
            >
              <div className="mx-auto rounded-2xl overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  placeholder="blur"
                  className="w-full h-full"
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

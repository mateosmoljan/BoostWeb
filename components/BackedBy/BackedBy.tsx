import { PartnersData } from "@/lib/PartnersData";
import Image from "next/image";
import SubscibeEmail from "../SubscibeEmail/SubscibeEmail";

function BackedBy() {
  return (
    <section className="bg-white_hover w-full pt-32  pb-80 relative mb-[250px]">
      <div className="container">
        <h2 className="mb-20">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {PartnersData.data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 py-6 rounded-xl bg-black"
            >
              <Image
                src={item.path}
                alt={item.title}
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <SubscibeEmail />
    </section>
  );
}

export default BackedBy;

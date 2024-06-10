import { TeamData } from "@/lib/TeamData";
import Image from "next/image";
import React from "react";

function TeamComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {TeamData.data.map((item, index) => (
        <div
          key={index}
          className="p-4 py-8 flex flex-col items-center justify-between bg-white_hover rounded-3xl"
        >
          <div className="w-[200px] h-[200px] rounded-3xl mb-4">
            <Image
              src={item.path}
              alt={item.name}
              width={200}
              height={200}
              className="object-cover h-full w-full rounded-3xl"
            />
          </div>
          <div className="flex justify-center flex-col text-center">
            <h1 className="text-2xl my-2.5 text-secondary">{item.name}</h1>
            <p className="text-lg my-1 mb-2">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamComponent;

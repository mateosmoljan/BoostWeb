import { TeamData } from "@/lib/TeamData";
import Image from "next/image";
import React from "react";

function TeamComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {TeamData.data.map((item, index) => (
        <div
          key={index}
          className="p-4 flex flex-col items-center justify-between gap-10 bg-white_hover rounded-3xl"
        >
          <div className="w-[200px] h-[200px] rounded-3xl">
            <Image
              src={item.path}
              alt={item.name}
              width={200}
              height={200}
              className="object-cover h-full w-full rounded-3xl"
            />
          </div>
          <div className="flex justify-center gap-4 flex-col text-center">
            <h1 className="text-xl">{item.name}</h1>
            <p>{item.role}</p>
            <p className="flex flex-col gap-1 items-center text-sm">
              Backed By
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamComponent;

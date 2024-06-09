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
          <div>
            <Image src={item.path} alt={item.name} width={200} height={200} />
          </div>
          <div className="flex justify-center gap-4 flex-col text-center">
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamComponent;

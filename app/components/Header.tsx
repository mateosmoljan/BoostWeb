import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <section className="text-left">
      <h2 className=" text-left uppercase text-3xl lg:text-4xl leading-[120%] md:tracking-[-2.16px] tracking-[-1.44px] font-bold ">
        {title}
      </h2>

      {tags && (
        <div className="text-xs mt-2 hover:text-secondary text-white">
          <Link href="/blog/tag">#tags</Link>
        </div>
      )}
    </section>
  );
};

export default Header;

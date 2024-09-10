import React from "react";
import { slugify } from "../utils/helpers";

const Toc = ({ headings }: any) => (
  <div className="max-w-2xl mx-auto mt-8 text-center rounded-sm ">
    <h2 className="text-xl font-bold p-2 mb-5 border-b">Table of Contents</h2>
    <nav>
      <ul className="list-decimal text-left">
        {headings?.map((heading: any) => (
          <li key={heading?._key} className="mb-2">
            <a
              className="hover:underline"
              href={`#${slugify(heading.children[0].text)}`}
            >
              {heading.children[0].text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Toc;

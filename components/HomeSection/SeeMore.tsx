import { FaArrowDown } from "react-icons/fa6";

function SeeMore() {
  return (
    <button className="rounded-full p-4 bg-white absolute bottom-10 left-1/2">
      <a href="#about">
        <FaArrowDown />
      </a>
    </button>
  );
}

export default SeeMore;

import { FaArrowDown } from "react-icons/fa6";

function SeeMore() {
  return (
    <button className="z-30 rounded-full w-10 h-10 md:w-12 md:h-12 bg-white absolute bottom-10 left-1/2">
      <a
        href="#about"
        className="w-full h-full flex justify-center items-center rounded-full"
      >
        <FaArrowDown />
      </a>
    </button>
  );
}

export default SeeMore;

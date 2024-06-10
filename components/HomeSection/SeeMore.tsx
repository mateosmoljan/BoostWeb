import { FaArrowDown } from "react-icons/fa6";

function SeeMore() {
  return (
    <button className="rounded-full p-4 bg-white absolute bottom-10">
      <a href="#project_stats">
        <FaArrowDown />
      </a>
    </button>
  );
}

export default SeeMore;

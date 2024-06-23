import { FaArrowUp } from "react-icons/fa";

function ToTop() {
  return (
    <div className="z-30 fixed rounded-full w-10 h-10 md:w-12 md:h-12 right-3 md:right-6 bottom-3 md:bottom-6 bg-blue ">
      <a
        href="#top"
        className="w-full h-full flex justify-center items-center rounded-full "
      >
        <FaArrowUp className="text-white" />
      </a>
    </div>
  );
}

export default ToTop;

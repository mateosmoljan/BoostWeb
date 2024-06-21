import Image from "next/image";
import image2 from "@/public/assets/images/object.png";
import image1 from "@/public/assets/images/subscribe.png";
function SubscibeEmail() {
  return (
    <section className="w-full relative">
      <div className="container bg-gradient-blue px-8 py-10 sm:p-16 rounded-3xl relative flex ">
        <div className="w-[90%] sm:w-1/2 z-10">
          <h2 className="!text-3xl mb-8 !text-left !leading-10">
            Sign up for email updates{" "}
            <span className="text-gray-400">
              to keep up to date with the BoostWeb.io
            </span>
          </h2>
          <form action="" className="">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full p-4 mb-6 bg-transparent border-2 border-white text-white"
              />
              <button className="btn">Subscribe</button>
            </div>
          </form>
        </div>
        <div className=" absolute sm:relative sm:block w-1/2 h-[250px] right-0 bottom-0">
          <Image
            src={image1}
            alt="Subscribe"
            width={480}
            height={380}
            placeholder="blur"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="hidden xl:block -z-10 w-[calc(var(--one)*598)] h-[calc(var(--one)*598)] absolute top-0 right-0 custom_rotation_360 overflow-hidden">
        <Image
          src={image2}
          alt="Object"
          width={598}
          height={598}
          className=" "
          placeholder="blur"
        />
      </div>
    </section>
  );
}

export default SubscibeEmail;

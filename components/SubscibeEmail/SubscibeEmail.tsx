import Image from "next/image";

function SubscibeEmail() {
  return (
    <section className="w-full">
      <div className="container bg-gradient-blue px-8 py-10 sm:p-16 rounded-3xl relative flex ">
        <div className="w-[90%] sm:w-1/2 z-10">
          <h2 className="!text-3xl mb-8 !text-left !leading-10">
            Sign up for email updates{" "}
            <span className="text-gray-400">
              to keep up to date with the ZkSync.ai
            </span>
          </h2>
          <form action="" className="">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full p-4 mb-6 bg-transparent border-2 border-white text-white"
              />
              <button className="btn  ">Subscribe</button>
            </div>
          </form>
        </div>
        <div className=" absolute sm:relative sm:block w-1/2 h-[250px] right-0 bottom-0">
          <Image
            src="/assets/images/subscribe.png"
            alt="Subscribe"
            width={480}
            height={380}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default SubscibeEmail;

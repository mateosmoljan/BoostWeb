import Image from "next/image";
import Link from "next/link";
import frameworks from "@/public/assets/images/frameworks.webp";

function About() {
  return (
    <section className="w-full py-10">
      <div className="container flex flex-col-reverse md:flex-row gap-8 md:gap-12 ">
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          <h2 className="!text-left relative">
            We build your site custom to you, <br />
            <span className="text-gradient">Line by Line.</span> <br />
            <div className="-z-10 absolute -top-5 md:-right-20 animate_dust">
              <Image
                src="/assets/images/stars-dust.svg"
                alt="Logo BoostWeb"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </h2>
          <p className="text-gray-400">
            We do not use website builders such as Wordpress, Wix, Squarespace
            or Elementor. If they were so great, why is Facebook, TikTok, and
            Netflix using the same frameworks as us?
          </p>
          <p className="text-gray-400">
            Everything we do is built using custom, open-source technologies
            that are designed to fit your needs, not ours. Our process is always
            on the cutting edge of what is possible within the web development
            world.
          </p>
          <hr className="bg-gradient-blue-linear-right w-full h-[2px]" />
          <button className="flex">
            <Link href="/contact" className="btn">
              Start Project
            </Link>
          </button>
        </div>
        <div className="w-full md:w-1/2 relative -z-10">
          <div className="max-w-[500px] max-h-[500px]">
            <Image
              src={frameworks}
              alt="Logo"
              width={500}
              height={500}
              placeholder="blur"
              className=" w-full h-full"
            />
          </div>
          <div className="w-[300px] h-[300px] bg-gradient-blue absolute top-0 right-1/3 blur-[200px] -z-20 opacity-5 md:opacity-100" />
        </div>
      </div>
    </section>
  );
}

export default About;

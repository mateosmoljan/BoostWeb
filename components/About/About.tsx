import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className="w-full py-52">
      <div className="container flex flex-col-reverse md:flex-row ">
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          <h2 className="!text-left">
            <span className="text-gradient">AI Powered</span> <br />
            Smart Contract
          </h2>
          <p className="md:text-[24px] text-[18px] leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <span className="text-primary">Autem totam</span>
            numquam obcaecati quia optio. Dolor cum in esse enim nam corporis
            eveniet incidunt voluptates maiores! Sit dolore placeat{" "}
            <span className="text-primary">voluptatibus quam</span>.
          </p>
          <hr className="bg-gradient-blue-linear-right w-full h-[2px]" />
          <button className="flex">
            <Link href="/team" className="btn">
              Meet The Team
            </Link>
          </button>
        </div>
        <div className="w-full md:w-1/2 max-h-[300px] flex items-center justify-center relative -z-10">
          <Image
            src="/assets/images/about.png"
            alt="Logo"
            width={300}
            height={419}
            className=" m-auto w-1/3 md:w-auto absolute md:relative md:right-auto right-0"
          />
          <div className="w-[300px] h-[300px] bg-gradient-blue absolute top-0 blur-3xl -z-20 opacity-10 md:opacity-100" />
          <div className="w-[300px] h-[300px] bg-gradient-blue absolute -bottom-40 blur-3xl -z-20" />
        </div>
      </div>
    </section>
  );
}

export default About;

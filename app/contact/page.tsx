import Image from "next/image";
import image_email from "@/public/assets/images/email.png";
import ContactForm from "../../components/Forms/ContactForm";

function page() {
  return (
    <main className="container pt-52">
      <div className="mb-16">
        <h2>Tell Us About Your Project</h2>
      </div>
      <section className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="text-left ">
            <span className="text-secondary">What we’re offering</span>
            <h2 className="text-left my-5">
              Let’s talk with <br />{" "}
              <span className="custom_text">[Expertise]</span>
            </h2>
            <p className="mb-10">
              To learn more about how BoostWeb Services can grow your business
              complete this form to receive a quote from Boost Team quickly.
            </p>
          </div>

          <div className="max-w-[350px]">
            <div className="items-center flex gap-2 md:gap-4 border-2 border-transparent hover:border-white_hover cursor-pointer rounded-2xl py-4 px-5">
              <Image
                src={image_email}
                alt="Email"
                width={35}
                height={35}
                placeholder="blur"
                className="text-white"
              />
              <span className="text-white">boostwebio@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="hidden md:block absolute -top-[10%] -right-[40%] animate_dust">
            <Image
              src="/assets/images/stars-dust.svg"
              alt="Logo BoostWeb"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <ContactForm />
          <div className="hidden md:block absolute -left-[40%] -bottom-[10%] animate_dust_reverse">
            <Image
              src="/assets/images/star-dust-blue.svg"
              alt="Dust"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;

import Image from "next/image";
// import image_email from "@/public/assets/images/email.png";
import ContactForm from "../../../components/Forms/ContactForm";
import image1 from "@/public/assets/images/globeweb.png";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us | BoostWeb",
    description:
      "BoostWeb provides tailored packages designed to elevate your business’s online presence. Whether you're looking to enhance your website, improve search engine rankings, or drive more traffic, our ready-to-go solutions can help you achieve your goals. Contact us today to learn more about how we can support your digital growth and answer any questions you may have.",
    openGraph: {
      title: "Contact Us | BoostWeb",
      description:
        "BoostWeb provides tailored packages designed to elevate your business’s online presence. Whether you're looking to enhance your website, improve search engine rankings, or drive more traffic, our ready-to-go solutions can help you achieve your goals. Contact us today to learn more about how we can support your digital growth and answer any questions you may have.",
      type: "website",
      locale: "en_US",
      url: "https://www.boostweb.io/contact",
      siteName: "BoostWeb",
      images: [
        {
          url: "https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png", // Use a relevant image for the Contact page
          width: 1200,
          height: 630,
          alt: "Contact Us - BoostWeb", // Descriptive alt text
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | BoostWeb",
      description:
        "BoostWeb provides tailored packages designed to elevate your business’s online presence. Whether you're looking to enhance your website, improve search engine rankings, or drive more traffic, our ready-to-go solutions can help you achieve your goals. Contact us today to learn more about how we can support your digital growth and answer any questions you may have.",
      images: ["https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png"], // Same image as Open Graph
    },
    alternates: {
      canonical: "https://www.boostweb.io/contact", // Ensure the canonical URL is correct
    },
    keywords: [
      "BoostWeb contact",
      "contact BoostWeb",
      "online presence",
      "digital growth",
      "business packages",
      "website enhancement",
      "SEO support",
      "BoostWeb solutions",
    ],
  };
}

function page() {
  return (
    <main className="container pt-32 md:pt-52">
      <div className="mb-8 md:mb-16">
        <h2 className="text-left md:text-center">Tell Us About Your Project</h2>
      </div>
      <section className="flex flex-col md:flex-row gap-8">
        <div className=" bg-primary w-[150px] absolute h-1/2 top-1/2 -left-[100px]  blur-[200px] opacity-50" />
        <div className="w-full md:w-1/2">
          <div className="hidden lg:block lg:w-[calc(var(--one)*108)] lg:h-[calc(var(--one)*108)] absolute bottom-[10%] left-[20%] opacity-40">
            <Image
              src={image1}
              alt="Globe"
              width={108}
              height={108}
              className="w-full h-full"
              placeholder="blur"
            />
          </div>

          <div className="text-left ">
            <span className="text-secondary">What we’re offering</span>
            <h2 className="text-left my-5">
              Let’s talk with <br />{" "}
              <span className="custom_text">[Expertise]</span>
            </h2>
            <p className="mb-5 md:mb-10 text-gray-400">
              To learn more about how BoostWeb Services can grow your business
              complete this form to receive a quote from Boost Team quickly.
            </p>
          </div>

          {/* <div className="max-w-[350px]">
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
          </div> */}
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

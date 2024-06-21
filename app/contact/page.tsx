import Image from "next/image";
import image_email from "@/public/assets/images/email.png";
import ContactForm from "../../components/Forms/ContactForm";

function page() {
  return (
    <main className="container pt-52">
      <div>
        <h2>Contact Us</h2>
      </div>
      <section className="flex flex-col lg:flex-row ">
        <div>
          <div>
            <span>What we’re offering</span>
            <h2>
              Let’s talk with <span className="custom_text">[Expertise]</span>
            </h2>
          </div>

          <div>
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
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default page;

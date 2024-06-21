import FaqSection from "@/components/Faq/FaqSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import ProjectStats from "@/components/ProjectStats/ProjectStats";
import ServicesSection from "@/components/Services/ServicesSection";
import SubscibeEmail from "@/components/SubscibeEmail/SubscibeEmail";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <ProjectStats />
      <ServicesSection />
      <Testimonials />
      <FaqSection />
      <SubscibeEmail />
    </main>
  );
}

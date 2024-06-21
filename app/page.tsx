import FaqSection from "@/components/Faq/FaqSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import ProjectStats from "@/components/ProjectStats/ProjectStats";
import SubscibeEmail from "@/components/SubscibeEmail/SubscibeEmail";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProjectStats />
      <Testimonials />
      <FaqSection />
      <SubscibeEmail />
    </main>
  );
}

import About from "@/components/About/About";
import BackedBy from "@/components/BackedBy/BackedBy";
import FaqSection from "@/components/Faq/FaqSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import ProjectStats from "@/components/ProjectStats/ProjectStats";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProjectStats />
      <About />
      <Testimonials />
      <FaqSection />
      <BackedBy />
    </main>
  );
}

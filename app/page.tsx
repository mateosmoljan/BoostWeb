import About from "@/components/About/About";
import HomeSection from "@/components/HomeSection/HomeSection";
import ProjectStats from "@/components/ProjectStats/ProjectStats";
import SubscibeEmail from "@/components/SubscibeEmail/SubscibeEmail";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProjectStats />
      <About />
      <SubscibeEmail />
    </main>
  );
}

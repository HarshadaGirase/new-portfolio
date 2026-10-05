import Hero from "@/components/Hero";
import Frame from "@/components/Frame";
import CodingActivity from "@/components/CodingActivity";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Hackathons from "@/components/Hackathons";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function Home() {
  return (
    <Frame>
      <Hero />
      <CodingActivity />
      <Experience />
      <Education />
      <Projects />
      <TechStack />
      <Hackathons />
      <Footer />
    </Frame>
  );
}

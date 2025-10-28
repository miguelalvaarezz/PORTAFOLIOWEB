import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { YoSection } from "@/components/yo-section";
import { SkillsDuplicateSection } from "@/components/skills-duplicate-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <SkillsDuplicateSection />
      <YoSection />
      <ContactSection />
    </>
  );
}

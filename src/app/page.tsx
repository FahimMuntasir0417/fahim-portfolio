import { AboutSection } from "@/components/sections/about-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { EducationSection } from "@/components/sections/education-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { HighlightGrid } from "@/components/sections/highlight-grid";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HighlightGrid />
      <FeaturedProjects />
      <SkillsSection />
      <EducationSection />
      <ContactCta />
    </>
  );
}

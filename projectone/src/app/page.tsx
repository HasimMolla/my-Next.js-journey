import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { OurInstructer } from "@/components/OurInstructer";
import { TestomonialCards } from "@/components/TestomonialCards";
import { UpcommingWebiner } from "@/components/UpcommingWebiner";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestomonialCards />
      <UpcommingWebiner />
      <OurInstructer />
 
    </main>
  );
}

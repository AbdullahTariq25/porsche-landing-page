import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import StatsBar from "@/components/StatsBar";
import FeatureSection from "@/components/FeatureSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import FullBleed from "@/components/FullBleed";
import TechCards from "@/components/TechCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCanvas />
      <StatsBar />
      <FeatureSection />
      <HorizontalGallery />
      <FullBleed />
      <TechCards />
      <CTASection />
      <Footer />
    </>
  );
}

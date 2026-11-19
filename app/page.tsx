import Image from "next/image";
import ProblemSection from "./sections/4_ProblemSection";
import AnnouncemmentBar from "./sections/1_AnnouncementBar";
import NavigationBar from "./sections/2_NavigationBar";
import HeroSection from "./sections/3_HeroSection";
import HowItWorks from "./sections/5_HowItWorks";
import ProductFeatures from "./sections/6_ProductFeatures";
import ProductPreview from "./sections/7_ProductPreview";
import WhoItsFor from "./sections/8_WhoItsFor";
import Pricing from "./sections/9_Pricing";
import FAQ from "./sections/10_FAQ";
import FinalCTA from "./sections/11_FinalCTA";
import Footer from "./sections/12_Footer";

export default function Home() {
  return (
    <div className="">
      <AnnouncemmentBar />
      <NavigationBar />
      <HeroSection />
      {/* <ProblemSection />
      <HowItWorks />
      <ProductFeatures />
      <ProductPreview />
      <WhoItsFor />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer /> */}
    </div>
  );
}

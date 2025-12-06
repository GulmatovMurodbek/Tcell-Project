import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TariffCalculator from "@/components/TariffCalculator";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

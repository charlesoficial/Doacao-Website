import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ImpactSection = React.lazy(() => import("@/components/ImpactSection"));
const DogCards = React.lazy(() => import("@/components/DogCards"));
const TestimonialSection = React.lazy(() => import("@/components/TestimonialSection"));
const DonationSection = React.lazy(() => import("@/components/DonationSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center">Carregando...</div>}>
        <ImpactSection />
        <DogCards />
        <TestimonialSection />
        <DonationSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

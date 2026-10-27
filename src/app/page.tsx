import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Stats from "@/components/Stats";
import Highlights from "@/components/Highlights";
import Manufacturing_Process from "@/components/Manufacturing_Process";
import Services from "@/components/Services";
import Choose from "@/components/Choose";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <Statement />

      {/* Company Stats */}
      <Stats />

      {/* Highlights Section */}
      <Highlights />

      {/* Our Services */}
      <Services />

      {/* Manufacturing Process */}
      <Manufacturing_Process />

      {/* Why Choose Us */}
      <Choose />
    </>
  );
}

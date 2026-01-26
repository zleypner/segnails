import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { LuxuryStyles } from "@/components/sections/LuxuryStyles";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramSection } from "@/components/sections/Instagram";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <LuxuryStyles />
        <About />
        <Services />
        <Testimonials />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

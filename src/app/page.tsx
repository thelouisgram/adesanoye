import { Hero } from "@/components/Hero";
import { Pitch } from "@/components/Pitch";
import { Marquee } from "@/components/Marquee";
import { VisualStrip } from "@/components/VisualStrip";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pitch />
      <Marquee />
      <VisualStrip />
      <Portfolio />
      <Testimonials />
      <Services />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}

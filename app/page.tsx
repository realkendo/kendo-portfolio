import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Services } from "../components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

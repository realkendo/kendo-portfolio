import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { LogoAnimation } from "@/components/LogoAnimation";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stack />
      <LogoAnimation />
    </>
  );
};

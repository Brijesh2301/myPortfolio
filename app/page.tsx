import { HeroSectionOne } from "@/components/HeroSection";
import { ContainerTextFlipDemo } from "@/components/TypeWriter2";

import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  return (
    <main className="">
      <BackgroundLines>
        <HeroSectionOne />
        </BackgroundLines>
        <ContainerTextFlipDemo />
   
    </main>
  );
}
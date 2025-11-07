import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Benefits } from "@/components/sections/Benefits";
import { Status } from "@/components/sections/Status";
import { TechnicalSpecs } from "@/components/sections/TechnicalSpecs";
import { Funding } from "@/components/sections/Funding";
import { Impact } from "@/components/sections/Impact";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Status />
      <TechnicalSpecs />
      <Funding />
      <Impact />
      <Team />
      <Contact />
    </main>
  );
};

export default Index;

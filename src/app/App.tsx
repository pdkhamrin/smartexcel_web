import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { DataAnalysis } from "./components/DataAnalysis";
import { FormulaGeneration } from "./components/FormulaGeneration";
import { DataManipulation } from "./components/DataManipulation";
import { Benefits } from "./components/Benefits";
import { TargetAudience } from "./components/TargetAudience";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DataAnalysis />
        <FormulaGeneration />
        <DataManipulation />
        <Benefits />
        <TargetAudience />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
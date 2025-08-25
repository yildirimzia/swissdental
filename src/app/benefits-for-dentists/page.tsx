"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BenefitsForDentistsHero from "./BenefitsForDentistsHero";
import DentalFeatureCards from "./DentalFeatureCards";


gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  return (
    <>
    <BenefitsForDentistsHero /> 
    <DentalFeatureCards />
    </>
  );
}

"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BenefitsForDentistsHero from "./BenefitsForDentistsHero";


gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  return (
    <>
    <BenefitsForDentistsHero /> 
    </>
  );
}

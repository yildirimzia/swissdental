"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BenefitsForDentistsHero from "./BenefitsForDentistsHero";
import DentalFeatureCards from "./DentalFeatureCards";
import SimpleEntry from "./SimpleEntry";
import SdsEdutaciton from "../components/SdsEdutaciton";
import Bright from "./Bright";

gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  return (
    <>
    <BenefitsForDentistsHero /> 
    <DentalFeatureCards />
    <SimpleEntry />
    <SdsEdutaciton />
    <Bright />
    </>
  );
}

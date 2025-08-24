"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  Main  from "./Main";
import WhyCeramic from "./WhyCeramic";
import WhyCeramixText from "./WhyCeramixText";
import SectionImage from "./SectionImage";
import CeramicAdvantages from "./CeramicAdvantages";
import ServiceBlock from "./ServiceBlock";


gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  return (
    <>
    <Main />
    <WhyCeramic />
    <WhyCeramixText />
    <SectionImage />
    <CeramicAdvantages />
    <ServiceBlock />
    </>
  );
}

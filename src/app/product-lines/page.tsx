"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SdsAim from "./SdsAim";
import SdsEducation from "./SdsEducation";
import TrainingCards from "./TrainingCards";
import SdsBiologicalProtocol from "./BiologicalProtocol";
import DoctorBlock from "./DoctorBlock";
import VideoContent from "./videoContent";
import SimpleFast from "./SimpleFast";
import CleanestImplant from "./CleanestImplant";
import LifetimeWarranty from "./LifetimeWarranty";
import DifferentSpecial from "./DifferentSpecial";
import Piece from "./Piece";
import Bright from "./Bright";
import Main from "./Main";

gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  return (
    <>
      <Main />
      <Bright />
      <Piece />

      <DifferentSpecial />

      <LifetimeWarranty />

      <CleanestImplant />

      <VideoContent />
      <SimpleFast />

      <SdsAim />
      <SdsEducation />
      <TrainingCards />
      <SdsBiologicalProtocol />
      <DoctorBlock />
    </>
  );
}

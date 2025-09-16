"use client"; // Eğer GSAP veya interaktif kod ekleyeceksen bırak, yoksa silebilirsin

import Hero from "./Hero";
import AnEmployer from "./AnEmployer";
import Application from "./Application";

export default function CareerView() {
  return (
    <>
      <Hero />
      <AnEmployer />
      <Application />
    </>
  );
}

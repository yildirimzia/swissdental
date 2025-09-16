import React from 'react'
import HistoryHero from './Hero'
import SliderContent from './Slidercontent'
import Founder from './Founder'
import Description from './Description'
import FounderAndPioneer from './FounderAndPioneer'
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/history",
  titleOverride: "SDS – Seramik İmplantlarda Tarih ve Yenilikler",
  descriptionOverride:
    "SDS Swiss Dental Solutions tarafından geliştirilen seramik implantların gelişimini keşfedin – Dr. Ulrich Volz'un vizyonundan sadece 10 yıl içinde küresel pazar liderliğine uzanan yolculuk.",
  canonical: "/sds-tarihcesi",
  ogImage: `/api/og?title=${encodeURIComponent("SDS – Seramik İmplantlarda Tarih ve Yenilikler")}`,
});


function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <SliderContent />
      <Founder/>
      <Description/>
      <FounderAndPioneer/>
    </>
  )
}

export default HistoryPage
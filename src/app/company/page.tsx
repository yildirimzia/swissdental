import React from 'react'
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";
import CompanyView from "./CompanyView";

export const metadata: Metadata = buildMetadata({
  path: "/company",
  titleOverride: "SDS Seramik İmplantlar – Yenilik ve Kalite",
  descriptionOverride:
    "İmplantoloji alanında 20 yılı aşkın deneyime sahip, biyouyumlu seramik implantlarda dünya lideri olan SWISS DENTAL SOLUTIONS hakkında daha fazla bilgi edinin.",
  canonical: "/kurumsal",
  ogImage: "/images/SDS-SwissdentalsolutionsTR.jpg",
});

function page() {
  return (
    <CompanyView />
  )
}

export default page
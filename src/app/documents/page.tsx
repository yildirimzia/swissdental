import React from 'react'
import Hero from './Hero'
import CatalogList from './CatalogList'
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/documenets",
  titleOverride: "Diş Hekimleri için SDS Seramik İmplantlar Hakkında Belgeler ve Videolar",
  descriptionOverride:
    "SDS seramik implantlarla ilgili materyallerin bulunduğu video kütüphanemizi ve indirme alanımızı keşfedin: videolar, kataloglar, delme protokolleri ve kullanım talimatları.",
  canonical: "/dokumanlar",
});


function Documents() {
  return (
    <>
      <Hero /> 
      <CatalogList />
    </>
  )
}

export default Documents
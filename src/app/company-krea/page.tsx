import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";
import CompanyKreaView from "./CompanyKreaView";

export const metadata: Metadata = buildMetadata({
  path: "/company",
  titleOverride: "SDS | Bizim veya İmplantlarımız Hakkında Sorularınız İçin İletişim Alanı",
  descriptionOverride:
    "SDS veya seramik implantlarımız hakkında sorularınız mı var? Uzmanlarımızla doğrudan iletişim kurmak için iletişim seçeneklerimizi kullanın!",
  canonical: "/kurumsal",
  ogImage: `/api/og?title=${encodeURIComponent("SDS | Bizim veya İmplantlarımız Hakkında Sorularınız İçin İletişim Alanı")}`,
});


function page() {
  return (
    <CompanyKreaView />
  )
}

export default page
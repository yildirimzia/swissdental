
import Contact from "../components/Contact";
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  titleOverride: "SDS | Bizim veya İmplantlarımız Hakkında Sorularınız İçin İletişim Alanı",
  descriptionOverride:
    "SDS veya seramik implantlarımız hakkında sorularınız mı var? Uzmanlarımızla doğrudan iletişim kurmak için iletişim seçeneklerimizi kullanın!",
  canonical: "/iletisim",
  ogImage: `/api/og?title=${encodeURIComponent("SDS | Bizim veya İmplantlarımız Hakkında Sorularınız İçin İletişim Alanı")}`,
});


export default function Page() {
  return (
    <Contact />
  );
}

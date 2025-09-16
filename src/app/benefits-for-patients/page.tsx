// app/product-lines/page.tsx (SERVER COMPONENT)
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";
import BenefitsForPatientsView from "./BenefitsForPatientsView"

export const metadata: Metadata = buildMetadata({
  path: "/product-lines",
  titleOverride: "Bir Bakışta: Hastalar İçin Seramik İmplantların Avantajları",
  descriptionOverride:
    "Seramik implantlar: biyouyumlu, alerjiye karşı ideal, dayanıklı ve estetik. Titanyum implantlara sağlıklı, düşük radyasyonlu bir alternatif.",
  canonical: "/seramik-implant-urun-serileri",
  ogImage: "/images/SDS-SwissdentalsolutionsTR.jpg",
});

export default function Page() {
  return <BenefitsForPatientsView />;
}

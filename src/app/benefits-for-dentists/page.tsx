import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";
import BenefitsForDentistsView from "./BenefitsForDentistsView";

export const metadata: Metadata = buildMetadata({
  path: "/benefits-for-dentists",
  canonical: "/dis-hekimleri-icin-seramik-implant-faydalari",
  titleOverride: "Diş Hekimleri İçin Seramik İmplant Avantajları",
  descriptionOverride:
    "Seramik implantların avantajlarını deneyimleyin: üstün estetik, zaman kazandıran anında implantasyon, minimal peri-implantit riski ve memnun hastalar.",
  ogImage: `/api/og?title=${encodeURIComponent("Diş Hekimleri İçin Seramik İmplant Avantajları")}`,
});

export default function Page() {
  return <BenefitsForDentistsView />;
}
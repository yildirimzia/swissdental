import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";
import CareerView from "./CareerView"; // client component olacak

export const metadata: Metadata = buildMetadata({
  path: "/career",
  titleOverride: "SDS'de Kariyer – Seramik İmplantların Önde Gelen Tedarikçisi",
  descriptionOverride:
    "Seramik implantolojinin öncüsü ve dünya lideri SWISS DENTAL SOLUTIONS'ın bir parçası olun. Diş hekimliğinde kariyer fırsatlarını keşfedin.",
  canonical: "/kariyer", 
});

export default function Page() {
  return <CareerView />;
}

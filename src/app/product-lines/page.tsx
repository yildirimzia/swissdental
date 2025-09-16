import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductLinesView from "./ProductLinesView";
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/product-lines",
  titleOverride: "SDS Seramik İmplantlar: PARLAK & DEĞER Ürün Serileri Genel Bakış",
  descriptionOverride:
    "Tüm uygulamalar için ürün serilerimiz: BRIGHT - tek parça ve iki parçalı, 50'ye kadar özel şekil ve VALUE - uygun maliyetli hibrit sistem.",
  canonical: "/seramik-implant-urun-serileri",
});

gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  return (
    <ProductLinesView />
  );
}

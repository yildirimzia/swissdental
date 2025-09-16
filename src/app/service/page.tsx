import ServiceHero from "./ServiceHero";
import InfoCard from "./InfoCard"
import Questions from "./Questions";
import VideoContent from "../components/VideoContent";
import SdsEducation from "../components/SdsEdutaciton"
import ContactForm from "./ContactForm";


import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/service",
  titleOverride: "SDS Seramik İmplantlar – Servis ve Destek için İletişim",
  descriptionOverride:
    "Diş hekimlerinin işini kolaylaştıran ve müşteri memnuniyetine katkıda bulunan SDS Box ve diğer hizmetlerimizi tanıyın.",
  canonical: "/hizmetler",
});


function Service() {
  return (
   <>
     <ServiceHero />
     <InfoCard />
     <SdsEducation/>
     <VideoContent />
     <Questions />
     <ContactForm />
   </>
  );
}

export default Service;

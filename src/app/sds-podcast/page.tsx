import React from "react";
import Hero from "./Hero";
import Episode from "./Episode";
import SDSPod from "./SDSPod";
import EpisodeTwo from "./EpisodeTwo";

import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/sds-podcast",
  titleOverride: "SDS Podcast – Seramik İmplantlar Hakkında Uzman Röportajları",
  descriptionOverride:
    "SDS Podcast'te heyecan verici konuklar: seramik implantlar ve diş hekimliği alanında içgörüler ve gelişmelerle uzmanlar, implantologlar ve araştırmacılar.",
  canonical: "/sds-podcast",
  ogImage: `/api/og?title=${encodeURIComponent("SDS Podcast")}`,
});


function SDSPodcast() {
  return (
    <>
      <Hero />
      <Episode />
      <SDSPod />
      <EpisodeTwo />
    </>
  );
}

export default SDSPodcast;

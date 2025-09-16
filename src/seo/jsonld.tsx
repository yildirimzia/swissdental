// src/seo/jsonld.tsx
// "use client" GEREK YOK. Server Component içinde normal <script> render ederiz.

type JsonLdProps = {
  id: string;          // <script id="...">
  data: unknown;       // JSON-LD objesi
};

export function JsonLd({ id, data }: JsonLdProps) {
  // JSON-LD scriptini güvenle basıyoruz
  return (
    <script
      id={id}
      type="application/ld+json"
      // JSON.stringify ile tek satır, kaçışlar otomatik
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

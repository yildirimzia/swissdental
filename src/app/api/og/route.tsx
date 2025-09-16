// app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
import Image from "next/image";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Swiss Dental Solutions Türkiye";

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          fontWeight: 800,
          background: "#ffffff",
          color: "#0F6F69",
          padding: 64,
          textAlign: "center",
        }}
      >
        {title}
      </div>
    ),
    size
  );
}

// src/app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Swiss Dental Solutions Türkiye";

  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
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
    { width: WIDTH, height: HEIGHT }
  );
}

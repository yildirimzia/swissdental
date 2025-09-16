// src/app/fonts.ts
import localFont from "next/font/local";

export const gotham = localFont({
  src: [
    { path: "../../public/fonts/Gotham-Light.woff2",  weight: "300", style: "normal" },
    { path: "../../public/fonts/Gotham-Book.woff2",   weight: "400", style: "normal" },
    { path: "../../public/fonts/Gotham-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Gotham-Bold.woff2",   weight: "700", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
  preload: true,
});

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Clip — AI Video Clipping in Your Language",
  description: "Turn long videos into viral clips in Arabic, Hindi, Indonesian & Turkish. Native-quality AI, credits that never expire.",
  keywords: "ai video clipping, arabic subtitles, hindi video, indonesian clips, turkish video ai, lumina clip",
  openGraph: {
    title: "Lumina Clip — AI Video Clipping in Your Language",
    description: "Native-quality AI clipping for Arabic, Hindi, Indonesian & Turkish",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

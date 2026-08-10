import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeleDrive | Unlimited Telegram-backed Cloud Storage",
  description: "Turn Telegram into your personal, self-hosted, unlimited cloud storage. Upload, organize, and stream your photos, videos, and files seamlessly.",
  keywords: ["cloud storage", "telegram storage", "self-hosted", "open source", "teledrive", "media streaming", "free cloud storage", "telegram bot"],
  authors: [{ name: "Adil Rahiman", url: "https://github.com/adil-rahman-3063" }],
  creator: "Adil Rahiman",
  openGraph: {
    title: "TeleDrive | Unlimited Telegram-backed Cloud Storage",
    description: "Turn Telegram into your personal, self-hosted, unlimited cloud storage. Upload, organize, and stream your photos, videos, and files seamlessly.",
    url: "https://github.com/adil-rahman-3063/TeleDrive",
    siteName: "TeleDrive",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleDrive | Unlimited Telegram-backed Cloud Storage",
    description: "Turn Telegram into your personal, self-hosted, unlimited cloud storage. Upload, organize, and stream your photos, videos, and files seamlessly.",
    creator: "@adilrahmanms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

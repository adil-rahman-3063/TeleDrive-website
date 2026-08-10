import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeleDrive | Your Telegram-backed Library",
  description: "TeleDrive is your Telegram-backed library, effectively unlimited storage across channels.",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cidra — macOS display control, without tracking",
  description:
    "Free, open-source macOS menu bar utility for external monitor brightness, volume, presets, HiDPI sharpening, and BlackOut. No analytics. No telemetry. Ever.",
  openGraph: {
    title: "Cidra — macOS display control, without tracking",
    description:
      "Free, open-source macOS menu bar utility for external monitor control.",
    url: "https://cidra-web.vercel.app",
    siteName: "Cidra",
    images: ["/screenshot.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cidra — macOS display control, without tracking",
    description:
      "Free, open-source macOS menu bar utility for external monitor control.",
    images: ["/screenshot.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://cidra-web.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fatal capital – Wie du an Risikokapital kommst",
  description:
    "Buch von Sven Lachhein. Vier Teile, 16 Kapitel, 12 Arbeitsblätter. Wie du an Risikokapital kommst und wann du es lieber sein lässt.",
  metadataBase: new URL("https://fatal-capital.de"),
  openGraph: {
    title: "fatal capital – Wie du an Risikokapital kommst",
    description:
      "Buch von Sven Lachhein. Vier Teile, 16 Kapitel, 12 Arbeitsblätter. Wie du an Risikokapital kommst und wann du es lieber sein lässt.",
    url: "https://fatal-capital.de",
    siteName: "fatal capital",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 1793,
        alt: "fatal capital – Cover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fatal capital – Wie du an Risikokapital kommst",
    description:
      "Buch von Sven Lachhein. Vier Teile, 16 Kapitel, 12 Arbeitsblätter. Wie du an Risikokapital kommst und wann du es lieber sein lässt.",
    images: ["/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

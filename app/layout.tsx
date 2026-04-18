import type { Metadata } from "next";
import { Sora, Permanent_Marker } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: "600",
});
const permanent = Permanent_Marker({
  variable: "--font-permanent",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Lamin Cham | Frontend Developer",
  description:
    "Frontend developer focused on React, UX/UI and modern web applications.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Lamin Cham | Frontend Developer",
    description:
      "Frontend developer focused on React, UX/UI and modern web applications.",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Lamin Cham Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lamin Cham Portfolio",
    description: "Frontend developer focused on React and UX/UI",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` dark ${sora.variable} ${permanent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

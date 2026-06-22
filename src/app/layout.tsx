import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dove-aien.vercel.app"),
  title: {
    default: "Dove Aien Alinsasaguin | Customer Service & Retail Professional",
    template: "%s | Dove Aien Alinsasaguin",
  },
  description:
    "Former H&M Sales Advisor based in Sharjah, UAE. Open to opportunities in retail sales, customer service, receptionist, hostess, cashier and hospitality roles across the UAE.",
  keywords: [
    "Customer Service",
    "Retail Sales",
    "Sales Advisor",
    "Receptionist",
    "Hostess",
    "Cashier",
    "Hospitality",
    "Guest Relations",
    "H&M",
    "Sharjah UAE",
    "UAE Jobs",
  ],
  authors: [
    {
      name: "Dove Aien Alinsasaguin",
    },
  ],
  creator: "Dove Aien Alinsasaguin",
  publisher: "Dove Aien Alinsasaguin",
  category: "Professional Profile",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dove-aien.vercel.app",
    siteName: "Dove Aien",
    title: "Dove Aien Alinsasaguin | Customer Service & Retail Professional",
    description:
      "Former H&M Sales Advisor based in Sharjah, UAE. Open to opportunities in retail sales, customer service, hospitality and guest relations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dove Aien Alinsasaguin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dove Aien Alinsasaguin | Customer Service & Retail Professional",
    description: "Former H&M Sales Advisor based in Sharjah, UAE.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

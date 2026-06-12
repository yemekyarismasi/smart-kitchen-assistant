import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://smartkitchenassistant.com'),
  title: "Smart Kitchen Assistant: Next-Gen Edge AI for Appliances",
  description: "The ultimate Smart Kitchen Assistant methodology. Zero-latency Edge AI, absolute privacy, and visual ground truth for connected hardware manufacturers.",
  keywords: ["Smart Kitchen Assistant", "Edge AI", "Kitchen AI", "Appliance Integration", "HFSCA", "Yemek AI"],
  openGraph: {
    title: "Smart Kitchen Assistant: Next-Gen Edge AI for Appliances",
    description: "The ultimate Smart Kitchen Assistant methodology. Zero-latency Edge AI, absolute privacy, and visual ground truth for connected hardware manufacturers.",
    url: 'https://smartkitchenassistant.com',
    siteName: 'Smart Kitchen Assistant',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Kitchen Assistant Edge AI Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Kitchen Assistant: Next-Gen Edge AI for Appliances",
    description: "The ultimate Smart Kitchen Assistant methodology. Zero-latency Edge AI, absolute privacy, and visual ground truth for connected hardware manufacturers.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://smartkitchenassistant.com',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart Kitchen Assistant",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Edge OS / Web",
    "description": "Edge AI and Vision AI methodology for connected appliance manufacturers, ensuring 100% privacy and zero latency.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Yemek AI"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}

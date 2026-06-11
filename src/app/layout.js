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
  title: "Smart Kitchen Assistant: Next-Gen Edge AI for Appliances",
  description: "The ultimate Smart Kitchen Assistant methodology. Zero-latency Edge AI, absolute privacy, and visual ground truth for connected hardware manufacturers.",
  keywords: ["Smart Kitchen Assistant", "Edge AI", "Kitchen AI", "Appliance Integration", "HFSCA", "Yemek AI"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}

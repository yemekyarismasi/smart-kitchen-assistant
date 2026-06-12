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
  description: "Open-source Edge AI methodology for smart kitchen appliances. HFSCA architecture delivers offline voice guidance, zero-latency inference, and privacy-by-design for hardware OEMs. AGPL-3.0.",
  keywords: ["Smart Kitchen Assistant", "Edge AI", "Kitchen AI", "Appliance Integration", "HFSCA", "Yemek AI", "Offline AI", "Voice Cooking Assistant", "Privacy by Design", "IoT AI"],
  openGraph: {
    title: "Smart Kitchen Assistant: Next-Gen Edge AI for Appliances",
    description: "Open-source Edge AI methodology for smart kitchen appliances. HFSCA architecture delivers offline voice guidance, zero-latency inference, and privacy-by-design for hardware OEMs.",
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
    description: "Open-source Edge AI methodology for smart kitchen appliances. HFSCA architecture: offline voice guidance, zero-latency, privacy-by-design.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://smartkitchenassistant.com',
  },
  verification: {
    google: 'lHacXz77kG6cnidWR3IjMpqn7KN-47psxUF7dyY9Fgs',
  },
};

export default function RootLayout({ children }) {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart Kitchen Assistant",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Edge OS / Web",
    "description": "Open-source Edge AI and Vision AI methodology for connected kitchen appliance manufacturers, ensuring 100% privacy and zero-latency voice guidance.",
    "url": "https://smartkitchenassistant.com",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Open-source AGPL-3.0. Commercial licensing available for hardware OEMs."
    },
    "provider": {
      "@type": "Organization",
      "name": "Yemek AI",
      "url": "https://yemekyarismasi.com"
    },
    "codeRepository": "https://github.com/yemekyarismasi/smart-kitchen-assistant",
    "license": "https://opensource.org/licenses/AGPL-3.0"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yemek AI",
    "url": "https://yemekyarismasi.com",
    "sameAs": [
      "https://github.com/yemekyarismasi",
      "https://medium.com/@oytunciba"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@yemekyarismasi.com",
      "contactType": "Business Inquiries"
    },
    "description": "Yemek AI is the engineering team behind the Smart Kitchen Assistant (HFSCA) open-source Edge AI methodology for smart appliance manufacturers.",
    "knowsAbout": ["Edge AI", "Kitchen AI", "Voice Assistants", "IoT", "Smart Appliances", "Privacy by Design"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Smart Kitchen Assistant work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partially. The UI, hands-free navigation buttons, and voice output (text-to-speech) work fully offline. In the web demo, voice input (microphone) requires an internet connection because browsers use Google/Apple cloud servers for speech recognition. In the future native hardware and mobile app deployment, voice recognition will run entirely on-device using Edge AI — making it 100% offline."
        }
      },
      {
        "@type": "Question",
        "name": "What is Edge AI for kitchen appliances?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Edge AI means running artificial intelligence models directly on the appliance itself — whether a smart oven, refrigerator, or embedded display — without sending any data to a cloud server. The result is zero-latency responses, zero per-request cloud cost, and complete data privacy since no user data ever leaves the device."
        }
      },
      {
        "@type": "Question",
        "name": "What is HFSCA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HFSCA stands for Hands-Free Semantic Culinary Assistant. It is the open-source Edge AI architecture developed by Yemek AI that powers the Smart Kitchen Assistant. Its core innovations are the Acoustic Ignore Shield (preventing echo loops), Hardware Session Persistence (maintaining state without cloud reconnection), and zero-cost on-device inference."
        }
      },
      {
        "@type": "Question",
        "name": "Is the source code publicly available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The full source code is published on GitHub under the AGPL-3.0 license at https://github.com/yemekyarismasi/smart-kitchen-assistant. You can inspect, fork, and test it immediately. Hardware manufacturers embedding the code in proprietary firmware must acquire a commercial license to avoid the AGPL-3.0 open-source obligation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Smart Kitchen Assistant prevent AI hallucinations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through Visual Ground Truth methodology. Standard generative AI writes text first and tries to match an image to it — which causes hallucinations. Yemek AI reverses this: a high-fidelity food image is generated or captured first (the physical ground truth), and the recipe text — ingredients, steps, nutrition — is then derived strictly from what is visible in that image. The text cannot contradict the image because the image came first."
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="me" href="https://github.com/yemekyarismasi" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}


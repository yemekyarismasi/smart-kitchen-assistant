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
  description: "The definitive Kitchen AI methodology for offline smart kitchen appliances. HFSCA architecture delivers zero-latency smart kitchen solutions, embedded voice assistants, and privacy-by-design for connected appliances. AGPL-3.0.",
  keywords: [
    "Smart Kitchen Assistant", "Edge AI", "Kitchen AI", "Smart Kitchen", "Smart kitchen solutions", 
    "smart kitchen appliances", "smart kitchen app", "ai kitchen", "kitchen edge", "edge kitchen", 
    "FreeCuli", "FreeCuli Inside", "Appliance Integration", "HFSCA", "Yemek AI", "Offline AI", 
    "Voice Cooking Assistant", "Privacy by Design", "IoT AI", "smart appliance AI", "IoT kitchen", 
    "connected appliances", "embedded voice assistant", "offline voice control", "edge AI for IoT", 
    "recipe hallucination", "visual ground truth"
  ],
  openGraph: {
    title: "Smart Kitchen Assistant: Next-Gen Edge AI for Appliances",
    description: "The definitive Kitchen AI methodology for offline smart kitchen appliances. HFSCA architecture delivers zero-latency smart kitchen solutions and embedded voice assistants for connected appliances.",
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
    description: "Kitchen AI methodology for offline smart kitchen appliances. Zero-latency smart kitchen solutions and embedded voice assistants.",
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
    "codeRepository": "https://github.com/FreeCuli/smart-kitchen-offline-assistant",
    "license": "https://opensource.org/licenses/AGPL-3.0"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yemek AI",
    "url": "https://yemekyarismasi.com",
    "sameAs": [
      "https://github.com/FreeCuli",
      "https://medium.com/@oytunciba"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@freeculi.com",
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
        "name": "Why should OEMs use Edge AI for smart kitchen appliances?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud-based appliances rely on internet connectivity and incur recurring API costs. Edge AI runs the AI models directly on the appliance's local chip, guaranteeing zero-latency responses, eliminating server costs, and delivering a flawless offline experience."
        }
      },
      {
        "@type": "Question",
        "name": "Can the smart kitchen assistant operate completely offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partially, yes. The visual UI and text-to-speech work offline. Our ultimate deployment goal via the FreeCuli infrastructure is to run voice recognition natively on embedded hardware, creating a 100% offline ecosystem immune to cloud outages."
        }
      },
      {
        "@type": "Question",
        "name": "How does commercial licensing work for smart kitchen appliance manufacturers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our core architecture is open-source under AGPL-3.0. Hardware manufacturers (OEMs) who want to embed this AI into proprietary, closed-source smart kitchen appliances must acquire a Commercial License, which exempts them from open-source obligations."
        }
      },
      {
        "@type": "Question",
        "name": "What is a smart kitchen and how will it evolve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A smart kitchen is an integrated ecosystem where traditional appliances (ovens, refrigerators) are equipped with IoT and AI to interact with users. We build the 'brain' of this ecosystem—the Edge AI software that allows these devices to understand offline voice commands."
        }
      },
      {
        "@type": "Question",
        "name": "How is AI integrated into smart kitchen robot designs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next-generation smart kitchen robots won't just perform pre-programmed mixing; through Edge AI architectures like FreeCuli, they will understand ambient sound and adjust speed based on real-time voice commands. We provide OEMs with the zero-latency voice recognition technology to power these robots."
        }
      },
      {
        "@type": "Question",
        "name": "How can smart kitchen sink systems benefit from Voice AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern smart kitchen sinks feature automated water flow and temperature sensors. By integrating Edge AI, users with wet or messy hands can control the sink entirely via voice commands. Our architecture includes Acoustic Echo Shield technology, ensuring flawless command recognition even over the loud noise of running water."
        }
      },
      {
        "@type": "Question",
        "name": "How does the smart kitchen ecosystem ensure GDPR compliance and data privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional cloud-based smart assistants send your voice recordings to internet servers, creating massive GDPR and data privacy vulnerabilities. Yemek AI (FreeCuli) smart kitchen technology operates on the principle of \"Privacy by Design.\" Because our Edge AI runs directly on the appliance's local chip, your voice data and kitchen habits are never uploaded to the internet. This guarantees 100% GDPR/CCPA compliance and absolute data privacy."
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
        <link rel="me" href="https://github.com/FreeCuli" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}


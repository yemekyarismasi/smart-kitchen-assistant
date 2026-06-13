# Smart Kitchen Assistant — Edge AI for Appliances

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-smartkitchenassistant.com-cyan?style=for-the-badge)](https://smartkitchenassistant.com)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue?style=for-the-badge)](https://opensource.org/licenses/AGPL-3.0)
[![Part of Yemek AI](https://img.shields.io/badge/Part_of-Yemek_AI_Ecosystem-orange?style=for-the-badge)](https://yemekyarismasi.com/yemek-ai)

> Open-source Edge AI methodology for connected kitchen appliance manufacturers.  
> Zero-latency. Zero cloud cost. Privacy by design.

---

## 🌐 Live Demo

**[https://smartkitchenassistant.com](https://smartkitchenassistant.com)**

Try the full interactive Kitchen Mode voice assistant directly in your browser — no installation required.

---

## What is This?

**Smart Kitchen Assistant (HFSCA — Hands-Free Semantic Culinary Assistant)** is an open-source Edge AI architecture and consulting methodology for hardware OEMs building smart kitchen appliances (ovens, refrigerators, embedded displays).

It is **not** a finished consumer product.  
It **is** a verifiable, open-source technical foundation for B2B licensing and co-development engagements.

---

## Core Innovations

| Feature | Description |
|---|---|
| 🔇 Acoustic Ignore Shield | Prevents echo loops in high-reflectivity kitchens via `isSpeakingRef` lock — no hardware interrupt required |
| 💾 Hardware Session Persistence | Bypasses browser GC via immutable `utteranceRef` boundaries — maintains state during prolonged listening gaps |
| ⚡ Zero-Cost Edge Inference | All AI runs on-device — zero GPU server, zero API calls, zero per-request billing |
| 🎙️ Voice-Guided Kitchen Mode | Hands-free step navigation: "Next", "Go Back", "Repeat", "Stop" |
| ⏱️ Voice-Controlled Timer | "Set a timer for 5 minutes" — countdown with spoken status updates |
| 🖥️ Screen Wake Lock | `navigator.wakeLock` API keeps screen on during active cooking sessions |
| 👁️ Vision-to-Recipe Pipeline | Multimodal image analysis → structured recipe with zero hallucination via Visual Ground Truth |
| 🔒 Privacy by Architecture | No voice, no image, no behavioral data ever leaves the device — GDPR/CCPA/KVKK compliant by design |
| 🌍 Multi-language Ready | 70+ languages via Web Speech API — no extra localization engineering required |

---

## Honest Offline Disclosure

The **web demo** uses the browser's Web Speech Recognition API, which requires internet for audio transcription (Google/Apple cloud).

- ✅ UI & buttons — fully offline  
- ✅ Voice output (TTS) — fully offline  
- ❌ Voice input (STT) — requires internet in browser context  

In the future **native app and hardware deployment**, voice recognition runs entirely on-device via embedded Edge AI — making it 100% offline.

---

## 🏷️ The Freeculi Commercial Framework & Licensing

To offer hardware manufacturers a viable path to proprietary integration, we employ a Dual-Licensing architecture coupled with a commercial ingredient brand:

- **HFSCA** is the open-source architectural methodology.
- **Freeculi** is the commercial "Ingredient Brand" (similar to *Intel Inside*) licensed to hardware OEMs who embed this technology into their appliances.

| License Type | Terms |
|---|---|
| **Open Source (AGPL-3.0)** | Free to use. Any embedding in proprietary software requires open-sourcing the full stack under AGPL-3.0. |
| **Commercial License** | Grants closed-source integration rights and a **Trademark License** to use the "Freeculi Inside™" seal on hardware, guaranteeing consumers absolute privacy and 100% offline functionality. |

📧 Contact: [info@yemekyarismasi.com](mailto:info@yemekyarismasi.com)

---

## Part of the Yemek AI Ecosystem

- 🍽️ [yemekyarismasi.com](https://yemekyarismasi.com) — Recipe competition platform
- 🤖 [YEMEK AI Assistant](https://yemekyarismasi.com/yemek-ai) — Flagship AI assistant
- 📄 [Whitepaper](https://github.com/yemekyarismasi/yemek-ai-whitepaper) — Technical research
- 📝 [Medium — Why Big Tech Fails at Smart Kitchen](https://medium.com/@oytunciba/why-big-tech-is-failing-at-the-smart-kitchen-and-how-we-solved-it-with-zero-cost-edge-ai-c471900da42e)

---

## Getting Started (Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo locally.

---

© Yemek AI Engineering — AGPL-3.0

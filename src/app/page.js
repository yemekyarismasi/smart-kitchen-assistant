import Link from "next/link";
import DemoSection from "@/components/DemoSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import StickyNav from "@/components/StickyNav";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="flex min-h-screen flex-col items-center px-4 pt-20 md:px-24 md:pt-20 pb-4 md:pb-6 overflow-x-hidden bg-black text-white">
      
      {/* ECOSYSTEM BANNER */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 py-3 px-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
          <span className="text-zinc-300 font-medium text-[15px] whitespace-nowrap">Part of the Yemek AI Smart Kitchen Ecosystem:</span>
          <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
            <a href="https://yemekyarismasi.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-medium">
              <span className="text-base">🍽️</span>
              <span>yemekyarismasi.com</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">·</span>
            <a href="https://yemekyarismasi.com/yemek-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              <span className="text-base">🤖</span>
              <span>YEMEK AI Assistant</span>
              <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 rounded-full">FLAGSHIP</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl text-center space-y-6 md:space-y-10 mt-2 md:mt-4 mb-6 md:mb-12 relative z-10 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        
        <h1 className="text-[1.8rem] min-[400px]:text-[2.2rem] sm:text-4xl md:text-[2.8rem] lg:text-6xl font-black tracking-tighter leading-[1.1] whitespace-nowrap flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-4">
          <span>Smart Kitchen Assistant</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-500 whitespace-nowrap">
            Next-Gen Edge AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 w-full mx-auto font-light leading-relaxed px-4">
          The definitive Kitchen AI methodology for offline smart kitchen appliances. Offering zero-latency smart kitchen solutions through Edge Kitchen computing, Acoustic Shields, and embedded voice assistant technology.
        </p>
      </section>

      {/* INTERACTIVE DEMO INJECTED RIGHT INTO THE MAIN PAGE */}
      <div id="demo" className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-end mt-4 md:mt-8 mb-2 md:mb-4 px-6">
        <div className="text-center lg:text-left">
          <h2 className="text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-3xl md:text-3xl font-black mb-2 tracking-tight whitespace-nowrap">
            Experience Live Kitchen Edge AI
          </h2>
          <p className="text-zinc-300 text-base md:text-lg">
            Select a scenario below to preview the live B2C experience.
          </p>
        </div>
        <div className="w-full">
          <a href="#licensing" className="block w-full py-4 rounded-xl bg-cyan-500 text-black font-extrabold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] text-center cursor-pointer">
            B2B Licensing
          </a>
        </div>
      </div>
      <DemoSection />

      {/* WHY OUR METHODOLOGY IS DIFFERENT */}
      <section className="w-full max-w-7xl mx-auto mb-20 px-4 pt-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-mono uppercase tracking-widest text-sm font-bold">Strategic Consulting</p>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-3 mb-4">Why Big Tech Fails at Smart Kitchen Appliances & IoT Kitchen AI</h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Amazon, Google, and Samsung all launched cloud-first kitchen AI. They all hit the same structural wall. We help your engineering team understand exactly where they failed — and how to avoid the same traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/30">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Their Problem: Cloud Dependency</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Every voice command travels to a data center and back. In a steamy kitchen with background noise, latency kills the experience. 800ms delay = burned food.</p>
          </div>
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/30">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Their Problem: Infinite Scaling Costs</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Each user request hits their GPU server. 1M users = 1M API calls per day. The economics of cloud-based kitchen AI are fundamentally broken for hardware OEMs.</p>
          </div>
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/30">
            <div className="text-3xl mb-4">🎙️</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Their Problem: Kitchen Acoustics</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Generic voice assistants were not designed for kitchens. The echo from tile walls, mixer noise, and extractor fans create a recognition failure rate exceeding 40%.</p>
          </div>
        </div>

        <div className="mt-6 p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 text-center">
          <p className="text-emerald-300 text-lg font-semibold">
            We provide your R&D team with the <strong className="text-white">architectural blueprints, acoustic processing patterns, and edge deployment methodology</strong> to avoid every one of these failure modes — and unlike Big Tech, our architecture guarantees <strong className="text-white">Privacy by Design</strong>: no voice, no image, no user data ever leaves the device.
          </p>
        </div>
      </section>

      {/* SECTION A: PROVEN ENGINEERING SOLUTIONS */}
      <section id="features" className="w-full max-w-7xl mx-auto mb-12 px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-mono uppercase tracking-widest text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            Verified & Open Source
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-3 mb-4">Kitchen AI & Edge Computing for Smart Appliances</h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Every embedded IoT capability below is <strong className="text-white">live in our open-source codebase</strong>. Inspect it, fork it, and test the offline voice control locally. This is our engineering credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Acoustic Ignore Shield</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Prevents the system from hearing its own voice output via <code className="text-cyan-400 bg-cyan-950 px-1 rounded">isSpeakingRef</code> lock. Solves the echo loop problem in high-reflectivity kitchens without any hardware interrupt.</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Kitchen Noise Segmentation</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Isolates human speech from mixer noise, running water, and extractor fans. The recognition pipeline is tuned specifically for kitchen acoustic profiles — not generic rooms.</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Hardware Session Persistence</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Bypasses native browser Garbage Collection via immutable <code className="text-emerald-400 bg-emerald-950 px-1 rounded">utteranceRef</code> boundaries. Session state survives prolonged listening gaps without reconnection.</p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Zero-Cost Edge Inference</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Every AI operation runs on the client device — no GPU server, no API calls, no per-request billing. The marginal cost of serving 1M users is identical to serving 1: zero.</p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-purple-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Vision-to-Recipe Pipeline</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">A multimodal image analysis pipeline that scans food visuals and generates a fully structured recipe — ingredients, steps, nutrition — with zero hallucination via Visual Ground Truth.</p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-purple-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M6.343 6.343a9 9 0 000 12.728M9.172 9.172a5 5 0 000 7.072"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Offline-First Architecture</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Designed from the ground up for offline operation. Disconnect Wi-Fi: the UI, voice output, and hands-free navigation remain fully functional. <span className="text-amber-400">(Browser voice input requires internet — a structural browser limitation addressed in native hardware deployment.)</span></p>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Privacy by Architecture</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">No voice recording, no image upload, no behavioral data leaves the device — ever. GDPR, CCPA, and KVKK compliance is guaranteed by design, not by policy. This is structurally auditable.</p>
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Multi-language Ready</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Built on Web Speech API which natively supports 70+ languages. No additional localization engineering required to deploy voice guidance in Turkish, English, German, Japanese, or Arabic.</p>
              </div>
            </div>
          </div>

          {/* 9 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Real-time Voice Navigation</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Hands-free step navigation via natural language commands: <em>"Next", "Back", "Repeat", "Stop"</em>. Designed for users with flour-covered hands — no touch input required at any point.</p>
              </div>
            </div>
          </div>

          {/* 10 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Voice-Controlled Kitchen Timer</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Say <em>"Set a timer for 5 minutes"</em> and a countdown begins immediately. Say <em>"How much time left?"</em> and the assistant reads the remaining time aloud. Runs in the background while navigating recipe steps — completely hands-free.</p>
              </div>
            </div>
          </div>

          {/* 11 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Screen Wake Lock</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Implements the browser <code className="text-emerald-400 bg-emerald-950 px-1 rounded">navigator.wakeLock</code> API to prevent the device display from sleeping during active cooking sessions. The screen stays on for the full duration of Kitchen Mode — zero configuration, zero touch required.</p>
              </div>
            </div>
          </div>

          {/* 12 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Mid-Sentence Pause & Resume</h3>
                <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Voice narration can be paused at any moment via <em>"Pause"</em> and resumed exactly where it left off via <em>"Resume"</em> — without restarting the step or losing session state. Built for real cooking interruptions: phone calls, oven alarms, unexpected moments.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION B: EXTENSIBLE BY DESIGN */}
      <section className="w-full max-w-7xl mx-auto mb-8 md:mb-12 px-4">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-mono uppercase tracking-widest text-sm font-bold">R&D Consulting</p>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-3 mb-4">Where This Smart Appliance AI Architecture Can Take You</h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            These are <strong className="text-white">natural extensions</strong> of the same proven patterns above — not features we have built, but engineering paths we can guide your team through. Each one uses the same architectural foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-sm md:text-xs uppercase tracking-widest mb-3">Extension of: Kitchen Noise Segmentation</div>
            <h3 className="text-lg font-bold text-white mb-2">Machine Acoustic Anomaly Detection</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">The same microphone isolation logic that filters out mixer noise can be redirected to monitor motor, fan, and bearing signatures — detecting failure patterns weeks before breakdown, with no extra hardware.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-sm md:text-xs uppercase tracking-widest mb-3">Extension of: Real-time Voice Navigation</div>
            <h3 className="text-lg font-bold text-white mb-2">Direct Firmware Control Bridge</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">The voice command pipeline that navigates recipe steps can be extended to emit firmware signals. "Preheat the oven" becomes a real <code className="text-amber-400 bg-amber-950 px-1 rounded text-sm md:text-xs">SET_TEMP=180°C</code> call to your appliance MCU.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-sm md:text-xs uppercase tracking-widest mb-3">Extension of: Vision-to-Recipe Pipeline</div>
            <h3 className="text-lg font-bold text-white mb-2">Smart Inventory Vision</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">The same vision pipeline that identifies plated food from an image can be applied to a fridge camera feed — detecting available ingredients and triggering intelligent substitution suggestions when items are missing.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-sm md:text-xs uppercase tracking-widest mb-3">Extension of: Offline-First Architecture</div>
            <h3 className="text-lg font-bold text-white mb-2">Hybrid Edge-Cloud Mode</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">When internet is available, complex tasks (personalized recipe generation, nutritional analysis) can optionally route to cloud. When offline, the edge layer handles everything. No degraded experience either way.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-sm md:text-xs uppercase tracking-widest mb-3">Extension of: Privacy by Architecture</div>
            <h3 className="text-lg font-bold text-white mb-2">On-Device User Profile Learning</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Because all data stays on-device, user preferences (dietary restrictions, favorite cuisines, portion habits) can be learned and stored locally — creating personalization without any privacy trade-off.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-sm md:text-xs uppercase tracking-widest mb-3">Extension of: Machine Acoustic Anomaly</div>
            <h3 className="text-lg font-bold text-white mb-2">Predictive Maintenance System</h3>
            <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">Acoustic anomaly patterns, once detected, can trigger automated service notifications — alerting your authorized technicians before a customer experiences a breakdown. Reduces warranty costs and increases brand trust.</p>
          </div>

        </div>

        <div className="mt-8 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
          <p className="text-zinc-300 text-base">
            Each extension above is a <strong className="text-white">consulting and co-development engagement</strong> — not a pre-built product. We bring the proven architectural foundation; your engineering team builds the integration.
            <a href="mailto:info@yemekyarismasi.com" className="text-cyan-400 hover:text-cyan-300 ml-2 underline underline-offset-4 transition-colors">Start a conversation →</a>
          </p>
        </div>
      </section>

      {/* 2. THE CORE METHODOLOGY: HFSCA & ACOUSTIC SHIELD */}
      <section className="w-full max-w-7xl mb-20 relative px-4">
        <div className="mb-8 md:mb-16 text-center md:text-left">
          <h2 className="text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-2xl md:text-3xl font-black mb-4 tracking-tight whitespace-nowrap">
            1. The HFSCA Architecture
          </h2>
          <p className="text-lg text-zinc-200 font-normal leading-relaxed mx-auto md:mx-0">
            Hands-Free Semantic Culinary Assistant methodology completely decouples intelligence from the cloud, eliminating latency and server costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-10 rounded-3xl border border-zinc-800 hover:border-cyan-500 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/20">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Acoustic Ignore Shield</h3>
            <p className="text-zinc-300 text-base leading-relaxed">
              Solves the "echo loop" in high-reflectivity kitchens without hardware interrupts. By locking the <code className="text-cyan-400 bg-cyan-950 px-2 py-1 rounded text-sm mx-1">isSpeakingRef</code>, the system safely ignores its own voice output.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-zinc-800 hover:border-emerald-500 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Hardware Persistence</h3>
            <p className="text-zinc-300 text-base leading-relaxed">
              Bypasses native Garbage Collection (GC) via immutable memory boundaries (<code className="text-emerald-400 bg-emerald-950 px-2 py-1 rounded text-sm mx-1">utteranceRef</code>), maintaining session state even during prolonged listening gaps.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-zinc-800 hover:border-purple-500 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">0 USD Inference Cost</h3>
            <p className="text-zinc-300 text-base leading-relaxed">
              Running entirely on the client-side appliance NPU or browser layer, preventing linear server scaling costs for manufacturers. Zero API dependencies.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MULTIMODAL REVERSE ENGINEERING */}
      <section id="architecture" className="w-full max-w-7xl mb-20 px-4">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 space-y-6 md:space-y-8">
            <p className="text-emerald-400 font-mono uppercase tracking-widest text-sm font-bold">Vision Pipeline</p>
            <h2 className="text-base min-[400px]:text-lg sm:text-xl md:text-2xl font-black tracking-tight">Visual Ground Truth: Reverse-Engineering Kitchen AI</h2>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              Standard AI hallucinates by generating text first, then trying to force an image to match. Yemek AI completely flips the generative hierarchy.
            </p>
            <ul className="space-y-8 pt-6">
              <li className="flex gap-6">
                <div className="mt-1 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm shrink-0 border border-cyan-500/30">1</div>
                <div>
                  <strong className="text-xl text-white block mb-2">Visual Ground Truth</strong>
                  <span className="text-zinc-300 text-base">The high-fidelity image is generated OR captured by the fridge camera first. It is the absolute physical reality.</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0 border border-emerald-500/30">2</div>
                <div>
                  <strong className="text-xl text-white block mb-2">Multimodal Scanning</strong>
                  <span className="text-zinc-300 text-base">The Vision-LLM scans the image pixel by pixel to deduce ingredients, textures, and plating techniques.</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0 border border-purple-500/30">3</div>
                <div>
                  <strong className="text-xl text-white block mb-2">Recipe Harmonization</strong>
                  <span className="text-zinc-300 text-base">The NLP engine writes instructions strictly based on the visual evidence. 100% Zero-Hallucination output.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full p-1 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <div className="bg-zinc-950 w-full h-full rounded-[23px] p-10 border border-zinc-800">
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm md:text-xs font-mono text-zinc-500">pipeline_execution.log</span>
              </div>
              <pre className="text-sm md:text-base text-emerald-400 overflow-x-auto font-mono leading-loose">
{`> INITIALIZING REVERSE PIPELINE...

graph TD
  A[Camera Input] --> B(Visual Ground Truth)
  B --> C{Vision Layer Analysis}
  
  C --> D[Identify: Pan-Seared Salmon]
  C --> E[Identify: Asparagus Base]
  
  D & E --> F[Recipe Harmonization]
  F --> G(Zero-Hallucination Output)

> PIPELINE COMPLETED. 0 ERRORS.`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full max-w-7xl mx-auto mb-20 px-4">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10 text-center">
          <span className="hidden sm:inline text-cyan-400 font-mono uppercase tracking-widest text-sm font-bold whitespace-nowrap">FAQ</span>
          <div className="h-px w-8 sm:w-auto sm:flex-1 bg-zinc-800"></div>
          <h2 className="text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight px-1">Frequently Asked Questions</h2>
          <div className="h-px w-8 sm:w-auto sm:flex-1 bg-zinc-800"></div>
        </div>
        <div className="space-y-4 w-full">

          <details className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-800/60 transition-colors">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-white font-semibold text-base md:text-lg pr-4">Does Smart Kitchen Assistant work offline?</h3>
              <span className="text-cyan-400 shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
            </summary>
            <div className="px-6 pb-6 text-zinc-300 text-[15px] md:text-sm leading-relaxed border-t border-zinc-800 pt-4">
              <p><strong className="text-emerald-400">Partially — and we are honest about it.</strong> The UI, hands-free navigation buttons, and voice output (text-to-speech) work fully offline. In the web demo, voice input via the microphone requires an internet connection because web browsers must send audio to Google or Apple cloud servers for transcription.</p>
              <p className="mt-3">In the future native hardware and mobile app deployment, voice recognition will run entirely on-device using embedded Edge AI — making the full system 100% offline.</p>
            </div>
          </details>

          <details className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-800/60 transition-colors">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-white font-semibold text-base md:text-lg pr-4">What is Edge AI for kitchen appliances?</h3>
              <span className="text-cyan-400 shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
            </summary>
            <div className="px-6 pb-6 text-zinc-300 text-[15px] md:text-sm leading-relaxed border-t border-zinc-800 pt-4">
              <p>Edge AI means running AI models directly on the appliance itself — whether a smart oven, refrigerator, or embedded display — without sending any data to a cloud server. The results: zero-latency responses, zero per-request cloud cost, and complete data privacy since no user data ever leaves the device.</p>
            </div>
          </details>

          <details className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-800/60 transition-colors">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-white font-semibold text-base md:text-lg pr-4">What is HFSCA?</h3>
              <span className="text-cyan-400 shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
            </summary>
            <div className="px-6 pb-6 text-zinc-300 text-[15px] md:text-sm leading-relaxed border-t border-zinc-800 pt-4">
              <p><strong className="text-white">Hands-Free Semantic Culinary Assistant.</strong> It is the open-source Edge AI architecture developed by Yemek AI. Its core innovations are the Acoustic Ignore Shield (preventing echo loops without hardware interrupts), Hardware Session Persistence (maintaining state without cloud reconnection), and zero-cost on-device inference.</p>
            </div>
          </details>

          <details className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-800/60 transition-colors">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-white font-semibold text-base md:text-lg pr-4">What is Freeculi?</h3>
              <span className="text-cyan-400 shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
            </summary>
            <div className="px-6 pb-6 text-zinc-300 text-[15px] md:text-sm leading-relaxed border-t border-zinc-800 pt-4 space-y-3">
              <p>Freeculi is the commercial <strong className="text-white">ingredient brand</strong> for the HFSCA methodology. While HFSCA represents the open-source architectural foundation, Freeculi serves as the trademarked seal of quality and "zero-cloud dependency" for hardware manufacturers.</p>
              <p>For appliance OEMs, embedding Freeculi means integrating three core innovations out-of-the-box: <strong className="text-cyan-400">Acoustic Ignore Shield</strong> (noise/echo cancellation), <strong className="text-cyan-400">Hardware Session Persistence</strong> (offline state management), and <strong className="text-cyan-400">Zero-Cost Inference</strong>.</p>
              <p>When consumers see the <em className="text-amber-400">"Freeculi Inside"</em> badge on a smart oven or refrigerator, they are guaranteed absolute data privacy, zero-latency responses, and 100% offline functionality.</p>
            </div>
          </details>

          <details className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-800/60 transition-colors">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-white font-semibold text-base md:text-lg pr-4">Is the source code publicly available?</h3>
              <span className="text-cyan-400 shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
            </summary>
            <div className="px-6 pb-6 text-zinc-300 text-[15px] md:text-sm leading-relaxed border-t border-zinc-800 pt-4">
              <p>Yes. The full source code is on GitHub under <strong className="text-white">AGPL-3.0</strong>. You can inspect, fork, and test it right now. Hardware manufacturers embedding the code in proprietary firmware must acquire a commercial license to avoid the AGPL-3.0 open-source obligation.</p>
              <a href="https://github.com/yemekyarismasi/smart-kitchen-assistant" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors">View on GitHub →</a>
            </div>
          </details>

          <details className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-800/60 transition-colors">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-white font-semibold text-base md:text-lg pr-4">How does Smart Kitchen Assistant prevent AI hallucinations?</h3>
              <span className="text-cyan-400 shrink-0 transition-transform group-open:rotate-45 text-2xl font-light">+</span>
            </summary>
            <div className="px-6 pb-6 text-zinc-300 text-[15px] md:text-sm leading-relaxed border-t border-zinc-800 pt-4">
              <p>Through <strong className="text-white">Visual Ground Truth</strong> methodology. Standard generative AI writes text first then forces an image to match — causing hallucinations. Yemek AI reverses this: the food image is generated or captured first as the absolute physical reality, and the recipe text is then derived strictly from what is visible. The text cannot contradict the image because the image came first.</p>
            </div>
          </details>

        </div>
      </section>

      {/* OPEN SOURCE & RESEARCH */}
      <OpenSourceSection />

      {/* 5. B2B LICENSING & HARDWARE OS INTEGRATION */}
      <section id="licensing" className="w-full max-w-7xl mx-auto text-center space-y-4 md:space-y-6 mb-2 md:mb-6 p-6 md:p-8 glass-panel rounded-3xl border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px]"></div>
        
        <h2 className="text-[1.1rem] min-[400px]:text-[1.2rem] sm:text-2xl md:text-2xl font-black relative z-10 leading-snug">Freeculi Commercial Framework & <br className="md:hidden" />Dual-Licensing</h2>
        <p className="text-sm md:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed relative z-10">
          Our core architecture is open-source under <strong className="text-white">AGPL-3.0</strong>. This mandates that any enterprise embedding our system in proprietary smart appliances must open-source their entire stack.
        </p>
        <div className="bg-black/50 p-6 md:p-8 rounded-2xl border border-zinc-800 inline-block text-left max-w-3xl relative z-10 w-full shadow-2xl">
          <h3 className="text-[1.1rem] min-[400px]:text-[1.2rem] sm:text-2xl font-bold text-white mb-3 md:mb-4 whitespace-nowrap">Enterprise / Commercial SDK</h3>
          <p className="text-zinc-300 text-sm md:text-lg mb-5 md:mb-6 leading-relaxed">
            To bypass the AGPL-3.0 mandate and securely integrate the Smart Kitchen Assistant into closed-source IoT firmware (e.g., Oven MCU, Smart Fridge OS), tech manufacturers must acquire a B2B Commercial License.
          </p>
          <a href="mailto:info@yemekyarismasi.com" className="block text-center w-full py-3.5 md:py-4 rounded-xl bg-white text-black font-extrabold text-lg md:text-xl hover:bg-gray-200 transition-colors">
            Contact Yemek AI Engineering
          </a>
        </div>
      </section>

    </main>

    <footer className="w-full border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Col 1: About */}
          <div>
            <h3 className="text-white font-bold mb-4">Smart Kitchen Assistant</h3>
            <p className="text-zinc-500 text-[15px] md:text-sm leading-relaxed">
              Open-source Edge AI methodology for smart appliance manufacturers. Built and maintained by the Yemek AI engineering team.
            </p>
          </div>

          {/* Col 2: Yemek AI Ecosystem */}
          <div>
            <h3 className="text-white font-bold mb-4">Yemek AI Ecosystem</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://yemekyarismasi.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <span>🍽️</span> yemekyarismasi.com
                </a>
              </li>
              <li>
                <a href="https://yemekyarismasi.com/yemek-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors flex items-center gap-2 font-medium">
                  <span>🤖</span> YEMEK AI — Flagship Assistant
                </a>
              </li>
              <li>
                <a href="mailto:info@yemekyarismasi.com" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <span>✉️</span> info@yemekyarismasi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Open Source & Research */}
          <div>
            <h3 className="text-white font-bold mb-4">Open Source & Research</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/yemekyarismasi/smart-kitchen-assistant" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  smart-kitchen-assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/yemekyarismasi/smart-kitchen-voice-assistant" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  smart-kitchen-voice-assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/yemekyarismasi/yemek-ai-whitepaper" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  yemek-ai-whitepaper
                </a>
              </li>
              <li>
                <a href="https://medium.com/@oytunciba/why-big-tech-is-failing-at-the-smart-kitchen-and-how-we-solved-it-with-zero-cost-edge-ai-c471900da42e" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                  Medium — Why Big Tech Fails
                </a>
              </li>
              <li>
                <a href="https://medium.com/@oytunciba/how-we-solved-multimodal-ai-hallucinations-by-reverse-engineering-the-generative-pipeline-c4c68c2aa813" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                  Medium — Solving AI Hallucinations
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-[15px] md:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Yemek AI. Smart Kitchen Assistant is open-source under <a href="https://github.com/yemekyarismasi/smart-kitchen-assistant/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white underline transition-colors font-medium">AGPL-3.0</a>.
          </p>
          <p className="text-zinc-400 text-[15px] md:text-sm text-center sm:text-right">
            Built by <a href="https://yemekyarismasi.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white transition-colors font-medium">Yemek AI Engineering</a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

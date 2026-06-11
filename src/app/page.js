import Link from "next/link";
import DemoSection from "@/components/DemoSection";
import OpenSourceSection from "@/components/OpenSourceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 md:px-24 md:py-12 overflow-x-hidden bg-black text-white">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl text-center space-y-6 md:space-y-10 mt-2 md:mt-4 mb-12 relative z-10 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        
        <h1 className="text-[1.8rem] min-[400px]:text-[2.2rem] sm:text-4xl md:text-[2.8rem] lg:text-6xl font-black tracking-tighter leading-[1.1] whitespace-nowrap flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-4">
          <span>Smart Kitchen Assistant</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-500 whitespace-nowrap">
            Next-Gen Edge AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 w-full mx-auto font-light leading-relaxed px-4">
          The definitive open-source methodology for offline appliance intelligence. Featuring Acoustic Shields, 100% Visual Ground Truth, and Zero-Latency Hardware Integration.
        </p>
      </section>

      {/* INTERACTIVE DEMO INJECTED RIGHT INTO THE MAIN PAGE */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-end mt-8 mb-2 md:mb-4 px-6">
        <div className="text-center lg:text-left">
          <h2 className="text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-3xl md:text-4xl font-black mb-2 tracking-tight whitespace-nowrap">
            Experience Live Edge AI
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
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
          <span className="text-amber-400 font-mono uppercase tracking-widest text-sm font-bold">Strategic Consulting</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">Why Big Tech Fails at the Smart Kitchen</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Amazon, Google, and Samsung all launched cloud-first kitchen AI. They all hit the same structural wall. We help your engineering team understand exactly where they failed — and how to avoid the same traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/30">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Their Problem: Cloud Dependency</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Every voice command travels to a data center and back. In a steamy kitchen with background noise, latency kills the experience. 800ms delay = burned food.</p>
          </div>
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/30">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Their Problem: Infinite Scaling Costs</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Each user request hits their GPU server. 1M users = 1M API calls per day. The economics of cloud-based kitchen AI are fundamentally broken for hardware OEMs.</p>
          </div>
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-900/30">
            <div className="text-3xl mb-4">🎙️</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Their Problem: Kitchen Acoustics</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Generic voice assistants were not designed for kitchens. The echo from tile walls, mixer noise, and extractor fans create a recognition failure rate exceeding 40%.</p>
          </div>
        </div>

        <div className="mt-6 p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 text-center">
          <p className="text-emerald-300 text-lg font-semibold">
            We provide your R&D team with the <strong className="text-white">architectural blueprints, acoustic processing patterns, and edge deployment methodology</strong> to avoid every one of these failure modes — and unlike Big Tech, our architecture guarantees <strong className="text-white">Privacy by Design</strong>: no voice, no image, no user data ever leaves the device.
          </p>
        </div>
      </section>

      {/* SECTION A: PROVEN ENGINEERING SOLUTIONS */}
      <section className="w-full max-w-7xl mx-auto mb-12 px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-mono uppercase tracking-widest text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            Verified & Open Source
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">What We Have Actually Built</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Every capability below is <strong className="text-white">live in our open-source codebase</strong>. Inspect it, fork it, test it offline — right now. This is our engineering credibility.
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
                <p className="text-zinc-400 text-sm leading-relaxed">Prevents the system from hearing its own voice output via <code className="text-cyan-400 bg-cyan-950 px-1 rounded">isSpeakingRef</code> lock. Solves the echo loop problem in high-reflectivity kitchens without any hardware interrupt.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">Isolates human speech from mixer noise, running water, and extractor fans. The recognition pipeline is tuned specifically for kitchen acoustic profiles — not generic rooms.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">Bypasses native browser Garbage Collection via immutable <code className="text-emerald-400 bg-emerald-950 px-1 rounded">utteranceRef</code> boundaries. Session state survives prolonged listening gaps without reconnection.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">Every AI operation runs on the client device — no GPU server, no API calls, no per-request billing. The marginal cost of serving 1M users is identical to serving 1: zero.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">A multimodal image analysis pipeline that scans food visuals and generates a fully structured recipe — ingredients, steps, nutrition — with zero hallucination via Visual Ground Truth.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">The system is designed from the ground up to operate without any internet connection. Disconnect your Wi-Fi and all features remain fully functional. Zero cloud dependency in the critical path.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">No voice recording, no image upload, no behavioral data leaves the device — ever. GDPR, CCPA, and KVKK compliance is guaranteed by design, not by policy. This is structurally auditable.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">Built on Web Speech API which natively supports 70+ languages. No additional localization engineering required to deploy voice guidance in Turkish, English, German, Japanese, or Arabic.</p>
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
                <p className="text-zinc-400 text-sm leading-relaxed">Hands-free step navigation via natural language commands: <em>"Next", "Back", "Repeat", "Stop"</em>. Designed for users with flour-covered hands — no touch input required at any point.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION B: EXTENSIBLE BY DESIGN */}
      <section className="w-full max-w-7xl mx-auto mb-20 px-4">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-mono uppercase tracking-widest text-sm font-bold">R&D Consulting</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">Where This Architecture Can Take You</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            These are <strong className="text-white">natural extensions</strong> of the same proven patterns above — not features we have built, but engineering paths we can guide your team through. Each one uses the same architectural foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Extension of: Kitchen Noise Segmentation</div>
            <h3 className="text-lg font-bold text-white mb-2">Machine Acoustic Anomaly Detection</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">The same microphone isolation logic that filters out mixer noise can be redirected to monitor motor, fan, and bearing signatures — detecting failure patterns weeks before breakdown, with no extra hardware.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Extension of: Real-time Voice Navigation</div>
            <h3 className="text-lg font-bold text-white mb-2">Direct Firmware Control Bridge</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">The voice command pipeline that navigates recipe steps can be extended to emit firmware signals. "Preheat the oven" becomes a real <code className="text-amber-400 bg-amber-950 px-1 rounded text-xs">SET_TEMP=180°C</code> call to your appliance MCU.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Extension of: Vision-to-Recipe Pipeline</div>
            <h3 className="text-lg font-bold text-white mb-2">Smart Inventory Vision</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">The same vision pipeline that identifies plated food from an image can be applied to a fridge camera feed — detecting available ingredients and triggering intelligent substitution suggestions when items are missing.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Extension of: Offline-First Architecture</div>
            <h3 className="text-lg font-bold text-white mb-2">Hybrid Edge-Cloud Mode</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">When internet is available, complex tasks (personalized recipe generation, nutritional analysis) can optionally route to cloud. When offline, the edge layer handles everything. No degraded experience either way.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Extension of: Privacy by Architecture</div>
            <h3 className="text-lg font-bold text-white mb-2">On-Device User Profile Learning</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Because all data stays on-device, user preferences (dietary restrictions, favorite cuisines, portion habits) can be learned and stored locally — creating personalization without any privacy trade-off.</p>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-amber-800/50 bg-amber-950/5 hover:border-amber-600/50 transition-all duration-300">
            <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Extension of: Machine Acoustic Anomaly</div>
            <h3 className="text-lg font-bold text-white mb-2">Predictive Maintenance System</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Acoustic anomaly patterns, once detected, can trigger automated service notifications — alerting your authorized technicians before a customer experiences a breakdown. Reduces warranty costs and increases brand trust.</p>
          </div>

        </div>

        <div className="mt-8 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
          <p className="text-zinc-400 text-base">
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
            <p className="text-zinc-400 text-base leading-relaxed">
              Solves the "echo loop" in high-reflectivity kitchens without hardware interrupts. By locking the <code className="text-cyan-400 bg-cyan-950 px-2 py-1 rounded text-sm mx-1">isSpeakingRef</code>, the system safely ignores its own voice output.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-zinc-800 hover:border-emerald-500 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Hardware Persistence</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Bypasses native Garbage Collection (GC) via immutable memory boundaries (<code className="text-emerald-400 bg-emerald-950 px-2 py-1 rounded text-sm mx-1">utteranceRef</code>), maintaining session state even during prolonged listening gaps.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-zinc-800 hover:border-purple-500 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">0 USD Inference Cost</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Running entirely on the client-side appliance NPU or browser layer, preventing linear server scaling costs for manufacturers. Zero API dependencies.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MULTIMODAL REVERSE ENGINEERING */}
      <section className="w-full max-w-7xl mb-20 px-4">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 space-y-6 md:space-y-8">
            <span className="text-emerald-400 font-mono uppercase tracking-widest text-sm font-bold">Vision Pipeline</span>
            <h2 className="text-[1.2rem] min-[400px]:text-[1.4rem] sm:text-4xl md:text-5xl font-black tracking-tight whitespace-nowrap">Reverse-Engineering Reality</h2>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              Standard AI hallucinates by generating text first, then trying to force an image to match. Yemek AI completely flips the generative hierarchy.
            </p>
            <ul className="space-y-8 pt-6">
              <li className="flex gap-6">
                <div className="mt-1 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm shrink-0 border border-cyan-500/30">1</div>
                <div>
                  <strong className="text-xl text-white block mb-2">Visual Ground Truth</strong>
                  <span className="text-zinc-400 text-base">The high-fidelity image is generated OR captured by the fridge camera first. It is the absolute physical reality.</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0 border border-emerald-500/30">2</div>
                <div>
                  <strong className="text-xl text-white block mb-2">Multimodal Scanning</strong>
                  <span className="text-zinc-400 text-base">The Vision-LLM scans the image pixel by pixel to deduce ingredients, textures, and plating techniques.</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0 border border-purple-500/30">3</div>
                <div>
                  <strong className="text-xl text-white block mb-2">Recipe Harmonization</strong>
                  <span className="text-zinc-400 text-base">The NLP engine writes instructions strictly based on the visual evidence. 100% Zero-Hallucination output.</span>
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
                <span className="ml-4 text-xs font-mono text-zinc-500">pipeline_execution.log</span>
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

      {/* 5. B2B LICENSING & HARDWARE OS INTEGRATION */}
      <section id="licensing" className="w-full max-w-7xl mx-auto text-center space-y-6 md:space-y-10 mb-20 p-6 md:p-12 glass-panel rounded-3xl border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px]"></div>
        
        <h2 className="text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-4xl md:text-5xl font-black relative z-10 whitespace-nowrap">Dual-Licensing Strategy</h2>
        <p className="text-sm md:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed relative z-10">
          Our core architecture is open-source under <strong className="text-white">AGPL-3.0</strong>. This mandates that any enterprise embedding our system in proprietary smart appliances must open-source their entire stack.
        </p>
        <div className="bg-black/50 p-6 md:p-10 rounded-2xl border border-zinc-800 inline-block text-left mt-6 md:mt-10 max-w-3xl relative z-10 w-full shadow-2xl">
          <h3 className="text-[1.1rem] min-[400px]:text-[1.2rem] sm:text-2xl font-bold text-white mb-4 whitespace-nowrap">Enterprise / Commercial SDK</h3>
          <p className="text-zinc-300 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
            To bypass the AGPL-3.0 mandate and securely integrate the Smart Kitchen Assistant into closed-source IoT firmware (e.g., Oven MCU, Smart Fridge OS), tech manufacturers must acquire a B2B Commercial License.
          </p>
          <a href="mailto:info@yemekyarismasi.com" className="block text-center w-full py-4 md:py-5 rounded-xl bg-white text-black font-extrabold text-lg md:text-xl hover:bg-gray-200 transition-colors">
            Contact Yemek AI Engineering
          </a>
        </div>
      </section>

    </main>
  );
}

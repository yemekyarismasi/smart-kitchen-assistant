import Link from "next/link";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 md:px-24 md:py-12 overflow-x-hidden bg-black text-white">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-5xl text-center space-y-6 md:space-y-10 mt-2 md:mt-4 mb-12 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="inline-block px-5 py-2 rounded-full border border-cyan-900 bg-cyan-950/30 mb-6 backdrop-blur-md">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
            B2B Enterprise Framework
          </span>
        </div>
        
        <h1 className="text-[1.5rem] min-[400px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight flex flex-col gap-2 md:gap-4 items-center justify-center">
          <span className="whitespace-nowrap">Smart Kitchen Assistant</span>
          <span className="neon-text-gradient whitespace-nowrap">Next-Gen Edge AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
          The definitive open-source methodology for offline appliance intelligence. Featuring Acoustic Shields, 100% Visual Ground Truth, and Zero-Latency Hardware Integration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 relative z-50">
          <a href="#licensing" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-cyan-500 text-black font-extrabold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] text-center cursor-pointer">
            B2B Licensing
          </a>
        </div>
      </section>

      {/* INTERACTIVE DEMO INJECTED RIGHT INTO THE MAIN PAGE */}
      <div className="w-full max-w-7xl text-center mt-0 mb-2">
        <h2 className="text-[1.6rem] min-[400px]:text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 whitespace-nowrap">
          Experience Live Edge AI
        </h2>
        <p className="text-zinc-400 mt-2 text-base md:text-xl">Select a scenario below to see the exact B2C user experience in real-time.</p>
      </div>
      <DemoSection />

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

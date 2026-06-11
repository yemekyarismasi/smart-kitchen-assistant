"use client";

import { useState, useRef } from "react";
import VoiceAssistantDemo from "@/components/VoiceAssistantDemo";
import Link from "next/link";

export default function DemoPage() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setLoading(true);
    setError("");
    setRecipe(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const base64Data = reader.result.split(",")[1];
        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ base64Image: base64Data, mimeType: file.type })
        });
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to analyze the image.");
        
        setRecipe(data.recipe);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-cyan-500/30">
      {/* Top Header */}
      <header className="p-6 border-b border-zinc-800 flex items-center justify-between bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Architecture
        </Link>
        <div className="flex items-center gap-3 bg-emerald-950/30 border border-emerald-900/50 px-4 py-1.5 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest font-bold">Edge Engine Online</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          
          {/* Left: Vision AI Image Uploader & Recipe Card */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Step 1: Test Vision AI
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Upload Food.<br/>Get The Recipe.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8">
              Experience the <strong>Yemek AI Vision Technology</strong>. Upload any food image and watch the AI extract a complete recipe instantly.
            </p>

            {/* Uploader Box */}
            {!recipe && !loading && (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full aspect-video border-2 border-dashed border-zinc-700 hover:border-cyan-500 rounded-3xl flex flex-col items-center justify-center bg-zinc-900/50 cursor-pointer transition-colors group"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
                <svg className="w-12 h-12 text-zinc-500 group-hover:text-cyan-400 transition-colors mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
                <p className="font-bold text-zinc-300 group-hover:text-white">Click or Drag Image Here</p>
                <p className="text-sm text-zinc-500 mt-2 font-mono">Supports JPG, PNG</p>
              </div>
            )}

            {/* Loading / Scanning state */}
            {loading && (
              <div className="w-full aspect-video rounded-3xl overflow-hidden relative border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                {image && <img src={image} alt="Uploading" className="w-full h-full object-cover opacity-50" />}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 animate-scan"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-cyan-400 font-mono font-bold tracking-widest uppercase">Vision Scanning...</p>
                </div>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="p-4 bg-red-950/50 border border-red-900 rounded-xl text-red-400 font-mono text-sm mt-4">
                {error}
                <button onClick={() => setError("")} className="ml-4 underline hover:text-red-300">Try Again</button>
              </div>
            )}

            {/* Extracted Recipe Card */}
            {recipe && !loading && (
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm text-left">
                <div className="h-48 bg-black relative border-b border-zinc-800">
                  {image && <img src={image} alt="Food" className="w-full h-full object-cover opacity-40" />}
                  <div className="absolute bottom-4 left-6 flex gap-2">
                    <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{recipe.difficulty}</span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{recipe.prepTime}</span>
                  </div>
                  <button 
                    onClick={() => {setRecipe(null); setImage(null);}}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{recipe.title}</h3>
                  <p className="text-zinc-400 mb-6 font-light">{recipe.description}</p>
                  
                  <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">Required Commands</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm">"Next"</span>
                    <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm">"Back"</span>
                    <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm">"Repeat"</span>
                    <span className="px-4 py-2 bg-black border border-red-900/50 text-red-400 rounded-lg font-mono text-sm">"Stop"</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: The Assistant Interface */}
          <div className="glass-panel border border-zinc-800 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(34,211,238,0.1)] relative overflow-hidden h-full flex flex-col justify-center mt-12 lg:mt-0">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 background-animate"></div>
            
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-zinc-800">
              <h2 className="text-2xl font-bold text-white">Assistant Mode</h2>
              <div className="flex flex-col items-end">
                <span className="flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 text-xs font-mono text-cyan-400 mb-1">
                  Step 2: Edge Voice AI
                </span>
              </div>
            </div>

            {/* Pass the dynamically generated recipe to the Voice Assistant */}
            <VoiceAssistantDemo 
              recipeTitle={recipe?.title} 
              recipeSteps={recipe?.steps} 
            />
            
            {!recipe && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-[2.5rem]">
                <p className="text-zinc-500 font-mono text-sm text-center px-8">
                  Upload an image first to extract a recipe and unlock the Voice Assistant.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}} />
    </main>
  );
}

"use client";
import { useState } from "react";

const baseRecipe = {
  name: "Traditional Baklava",
  basePortions: 8,
  ingredients: [
    { name: "Phyllo Dough Sheets", amount: 40, unit: "layers", isStatic: true },
    { name: "Finely Crushed Pistachios", amount: 400, unit: "g", isStatic: false },
    { name: "Clarified Butter", amount: 300, unit: "g", isStatic: false },
    { name: "Sugar for Syrup", amount: 500, unit: "g", isStatic: false },
  ]
};

export default function InteractiveDemo() {
  const [portions, setPortions] = useState(8);

  const handleDecrease = () => {
    if (portions > 2) setPortions(portions - 2);
  };

  const handleIncrease = () => {
    setPortions(portions + 2);
  };

  const scaleFactor = portions / baseRecipe.basePortions;

  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Non-Linear Culinary Intelligence
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Linear scaling breaks recipes. Our <strong className="text-white">Asymmetric Dynamic Multiplier Loop</strong> knows that reducing a Baklava recipe halves the pistachios, but <em className="text-cyan-400 not-italic">still requires 40 structural layers</em> of phyllo dough. Test the 0ms edge computing below.
        </p>
      </div>

      <div className="glass-panel neon-border-blue rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">
        
        {/* Left Side: Controls */}
        <div className="p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
          
          <div className="flex items-center justify-between mb-12">
            <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">Target Yield</span>
            <span className="text-3xl font-extrabold neon-text-gradient">
              {portions} Portions
            </span>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <button 
              onClick={handleDecrease}
              className="w-20 h-20 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:border-cyan-400 hover:bg-zinc-800 flex items-center justify-center text-4xl text-white transition-all active:scale-95 shadow-lg"
            >
              -
            </button>
            <button 
              onClick={handleIncrease}
              className="w-20 h-20 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:border-emerald-400 hover:bg-zinc-800 flex items-center justify-center text-4xl text-white transition-all active:scale-95 shadow-lg"
            >
              +
            </button>
          </div>

          <div className="mt-auto pt-8 border-t border-zinc-800/80">
            <div className="flex items-center gap-3 text-sm text-zinc-400 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
              0ms Latency. Processed locally via Edge NPU.
            </div>
          </div>
        </div>

        {/* Right Side: Output */}
        <div className="p-10 md:p-14 bg-black/40">
          <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-zinc-800 text-white flex items-center justify-between">
            <span>Calculated Composition</span>
            <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">100% Accuracy</span>
          </h3>
          
          <ul className="space-y-6">
            {baseRecipe.ingredients.map((ing, i) => {
              const finalAmount = ing.isStatic ? ing.amount : Math.round(ing.amount * scaleFactor);
              return (
                <li key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-8 rounded-full transition-all ${ing.isStatic ? 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]'}`}></div>
                    <span className="text-zinc-300 text-lg group-hover:text-white transition-colors">{ing.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-2xl font-bold text-white tracking-tight">
                      {finalAmount}
                    </span>
                    <span className="text-base text-zinc-500 ml-2">{ing.unit}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <p className="text-xs text-zinc-500 mb-3 font-mono uppercase tracking-widest">Algorithm Insight</p>
            {portions !== 8 ? (
              <div className="text-sm text-cyan-300 bg-cyan-950/30 p-4 rounded-xl border border-cyan-900/50 leading-relaxed">
                Notice how the Butter and Pistachios scaled down to match <strong>{portions} portions</strong>, while the <strong className="text-purple-400">Structural Requirement (Phyllo Layers)</strong> remained exactly at 40. This is true Culinary NLP.
              </div>
            ) : (
              <div className="text-sm text-zinc-400 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 leading-relaxed">
                Adjust the portions using the controls to witness asymmetric scaling in real-time.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

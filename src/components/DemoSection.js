"use client";

import { useState } from "react";
import KitchenMode from "@/components/KitchenMode";

export default function DemoSection() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [showKitchenMode, setShowKitchenMode] = useState(false);
  const SCENARIOS = [
    {
      id: "eggs",
      name: "Heart-Shaped Eggs",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
      recipe: {
        title: "Heart-Shaped Sunny-Side Up Eggs",
        description: "A visually appealing breakfast classic formed perfectly using a silicone heart mold.",
        difficulty: "Easy",
        prepTime: "5 mins",
        ingredients: ["2 large eggs", "1 tbsp butter", "Salt and pepper (to taste)"],
        nutrition: { calories: 250, protein: 14, fat: 20, carbs: 1 },
        chefTouch: "Make sure the pan is not too hot, otherwise the bottom will burn before the whites set.",
        steps: [
          "Place a heart-shaped silicone mold in the center of your pan over medium heat.",
          "Add half a tablespoon of butter inside the mold and let it melt.",
          "Gently crack an egg directly into the heart shape.",
          "Cook for 3 minutes until the whites are firm."
        ]
      }
    },
    {
      id: "pasta",
      name: "Spaghetti Bolognese",
      image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=800&auto=format&fit=crop",
      recipe: {
        title: "Classic Spaghetti Bolognese",
        description: "Rich tomato and ground beef sauce served over al dente spaghetti.",
        difficulty: "Medium",
        prepTime: "45 mins",
        ingredients: ["400g spaghetti", "500g ground beef", "1 chopped onion", "2 diced carrots", "400g crushed tomatoes"],
        nutrition: { calories: 650, protein: 35, fat: 25, carbs: 70 },
        chefTouch: "Simmer the sauce on the lowest heat possible for an hour to develop deep flavors.",
        steps: [
          "Heat olive oil in a large pot and sauté finely chopped onions, carrots, and celery until soft.",
          "Add the ground beef and cook until browned, breaking it apart with a spoon.",
          "Stir in tomato paste, crushed tomatoes, and a pinch of salt. Let it simmer for 30 minutes.",
          "Boil the spaghetti in salted water until al dente, then toss it with the sauce."
        ]
      }
    },
    {
      id: "kebab",
      name: "Turkish Adana Kebab",
      image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?q=80&w=800&auto=format&fit=crop",
      recipe: {
        title: "Traditional Adana Kebab",
        description: "Spicy minced lamb skewers grilled over charcoal.",
        difficulty: "Hard",
        prepTime: "60 mins",
        ingredients: ["500g ground lamb", "1 finely chopped red bell pepper", "1 tsp salt", "1 tbsp spicy paprika flakes"],
        nutrition: { calories: 450, protein: 30, fat: 35, carbs: 5 },
        chefTouch: "Kneading the meat is crucial. Knead until the mixture gets sticky, otherwise it will fall off the skewers.",
        steps: [
          "Mix ground lamb with finely chopped red bell peppers, salt, and spicy paprika.",
          "Knead the mixture thoroughly for 10 minutes to release the proteins.",
          "Mold the meat around wide, flat metal skewers.",
          "Grill over hot charcoal, turning frequently until completely cooked and charred."
        ]
      }
    }
  ];

  const handleScenarioClick = (scenario) => {
    setImage(scenario.image);
    setRecipe(scenario.recipe);
  };

  return (
    <div className="w-full relative py-20" id="interactive-demo">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10 px-6">
        
        {/* Left: Vision AI Image Uploader & Recipe Card */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Step 1: Test Vision AI
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Upload Food.<br/>Get The Recipe.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8">
            Experience the <strong>Yemek AI Vision Technology</strong>. Upload any food image and watch the AI extract a complete recipe instantly.
          </p>

          {/* Scenario Selection */}
          {!recipe && !loading && (
            <div className="flex flex-col gap-4">
              <p className="text-zinc-500 font-mono text-sm mb-2">Select a scenario to run Vision AI simulation:</p>
              {SCENARIOS.map((s) => (
                <div 
                  key={s.id}
                  onClick={() => handleScenarioClick(s)}
                  className="w-full flex items-center gap-6 p-4 rounded-2xl border border-zinc-800 hover:border-cyan-500 hover:bg-cyan-950/20 cursor-pointer transition-all group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{s.name}</h3>
                    <p className="text-sm text-zinc-500 font-mono mt-1">Run Extraction Simulation →</p>
                  </div>
                </div>
              ))}
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

          {recipe ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 z-10">
              <div className="w-32 h-32 bg-emerald-500/20 border-4 border-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-pulse">
                <span className="text-5xl">👨‍🍳</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Kitchen Mode Ready</h3>
              <p className="text-zinc-400 mb-8">
                Launch the exact 1-to-1 Voice Assistant UI used in the B2C App.
              </p>
              <button 
                onClick={() => setShowKitchenMode(true)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xl py-4 rounded-xl transition-all shadow-xl active:scale-95"
              >
                LAUNCH KITCHEN MODE
              </button>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-[2.5rem]">
              <p className="text-zinc-500 font-mono text-sm text-center px-8">
                Select a simulation scenario on the left to extract a recipe and unlock the Voice Assistant.
              </p>
            </div>
          )}
        </div>

      </div>
      
      {showKitchenMode && recipe && (
        <KitchenMode recipe={recipe} onClose={() => setShowKitchenMode(false)} />
      )}
    </div>
  );
}

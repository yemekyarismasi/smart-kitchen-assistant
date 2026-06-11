"use client";

import { useState } from "react";
import KitchenMode from "@/components/KitchenMode";

export default function DemoSection() {
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

  const [recipe, setRecipe] = useState(SCENARIOS[0].recipe);
  const [image, setImage] = useState(SCENARIOS[0].image);
  const [showKitchenMode, setShowKitchenMode] = useState(false);

  const handleScenarioClick = (scenario) => {
    setImage(scenario.image);
    setRecipe(scenario.recipe);
  };

  return (
    <div className="w-full relative py-6 md:py-16" id="interactive-demo">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start relative z-10 px-6">
        
        {/* Left: Scenario Selection (Always Visible) */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Step 1: Test Vision AI
          </div>
          
          <h2 className="text-[1.2rem] min-[400px]:text-[1.3rem] sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight leading-tight text-white whitespace-nowrap">
            Upload Food. Get The Recipe.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8">
            Experience the <strong>Yemek AI Vision Technology</strong>. Upload any food image and watch the AI extract a complete recipe instantly.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-zinc-500 font-mono text-sm mb-2">Select a scenario to run Vision AI simulation:</p>
            {SCENARIOS.map((s) => {
              const isSelected = recipe?.title === s.recipe.title;
              return (
                <div 
                  key={s.id}
                  onClick={() => handleScenarioClick(s)}
                  className={`w-full flex items-center gap-6 p-4 rounded-2xl border cursor-pointer transition-all group ${isSelected ? 'border-cyan-500 bg-cyan-950/30' : 'border-zinc-800 hover:border-cyan-500 hover:bg-cyan-950/20'}`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${isSelected ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}`}>{s.name}</h3>
                    <p className="text-sm text-zinc-500 font-mono mt-1">{isSelected ? 'Currently Selected' : 'Run Extraction Simulation →'}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Extracted Recipe Details & Launch Button */}
        <div className="glass-panel border border-zinc-800 rounded-[2.5rem] shadow-[0_0_50px_rgba(34,211,238,0.1)] relative overflow-hidden h-full flex flex-col mt-8 lg:mt-0">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 background-animate z-20"></div>
          
          {recipe ? (
            <div className="flex flex-col h-full relative z-10">
              
              {/* Badge Area Above Image */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-zinc-900/90 px-4 py-2 rounded-full border border-cyan-500/50 backdrop-blur-md z-30 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">Step 2: Edge Voice AI</span>
              </div>

              {/* Image Header */}
              <div className="h-56 bg-black relative border-b border-zinc-800 shrink-0">
                {image && <img src={image} alt="Food" className="w-full h-full object-cover opacity-100" />}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>

                <div className="absolute bottom-4 left-6 flex gap-2">
                  <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">{recipe.difficulty}</span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">{recipe.prepTime}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[1.2rem] min-[400px]:text-[1.3rem] sm:text-xl md:text-[1.6rem] font-black text-white mb-3 whitespace-nowrap overflow-hidden text-ellipsis">{recipe.title}</h3>
                <p className="text-zinc-400 mb-8 font-light text-base md:text-lg leading-relaxed">{recipe.description}</p>
                
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">Required Commands</h4>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm shadow-inner">"Next"</span>
                  <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm shadow-inner">"Back"</span>
                  <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm shadow-inner">"Repeat"</span>
                  <span className="px-4 py-2 bg-black border border-red-900/30 text-red-400 rounded-lg font-mono text-sm shadow-inner">"Stop"</span>
                </div>

                <div className="mt-auto pt-6 border-t border-zinc-800">
                  <button 
                    onClick={() => setShowKitchenMode(true)}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-[1.1rem] sm:text-lg md:text-xl py-3 md:py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3"
                  >
                    <span className="text-2xl md:text-3xl">👨‍🍳</span>
                    <span className="whitespace-nowrap">LAUNCH KITCHEN MODE</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-12 text-center bg-black/80 backdrop-blur-sm z-50">
              <p className="text-zinc-500 font-mono text-sm">
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

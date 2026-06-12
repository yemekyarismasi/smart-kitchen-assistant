"use client";

import { useState } from "react";
import KitchenMode from "@/components/KitchenMode";

export default function DemoSection() {
  const SCENARIOS = [
    {
      id: "krep-durum",
      name: "Beef Crepe Wrap",
      image: "https://lofxbrwkmufhniwetjtf.supabase.co/storage/v1/object/public/recipe_images/a24104a9-d8e4-4138-a389-c092ef500e80/1780667490027-etli-krep-d-r-m.jpg",
      sourceLink: "https://yemekyarismasi.com/profil/apspha/tarif/etli-krep-durum",
      recipe: {
        title: "Beef Crepe Wrap",
        description: "A satisfying and delicious main dish where thin crepes meet a slow-cooked, pulled beef filling. It offers both a practical and elegant presentation to impress your guests.",
        difficulty: "Medium",
        prepTime: "40 mins",
        cookTime: "2.5 hours",
        portions: "4-6 servings",
        ingredients: [
          "--For the Crepes--",
          "1 cup all-purpose flour",
          "1.5 cups milk",
          "2 large eggs",
          "Half a teaspoon of salt",
          "1 tablespoon vegetable oil or melted butter",
          "--For the Beef Filling--",
          "500g beef (brisket, shank, or round)",
          "1 large onion",
          "2 cloves of garlic",
          "1 tablespoon tomato paste",
          "Half a cup of beef broth or water",
          "2 tablespoons olive oil",
          "Salt, black pepper, thyme, cumin",
          "Red pepper flakes and 50g grated cheddar cheese (optional)"
        ],
        nutrition: { calories: 380, protein: 30, fat: 18, carbs: 30 },
        chefTouch: "You can balance the flavor by serving it with yogurt, tzatziki, or a fresh seasonal salad. Sprinkle finely chopped parsley or dill on top for an elegant visual touch.",
        steps: [
          "Preparing the Beef Filling: Cut the beef into cubes. Heat olive oil in a large pot. Dice the onion and sauté until pink. Add the garlic and sauté for 1 more minute.",
          "Add the beef to the pot and cook over high heat until it releases and reabsorbs its juices. Add the tomato paste and spices.",
          "Add the beef broth, cover the pot, and cook over low heat until the meat is incredibly tender (about 2-2.5 hours), then shred it with a fork.",
          "Preparing the Crepe Batter: Whisk the eggs with salt. Add the milk and oil. Gradually whisk in the flour until you get a smooth, pourable batter.",
          "Cooking the Crepes: Lightly oil a non-stick pan over medium heat. Pour a ladle of batter, spread evenly, and cook both sides until golden.",
          "Serving: Place the beef filling inside each crepe and roll them up to serve."
        ]
      }
    },
    {
      id: "kalpli-yumurta",
      name: "Heart-Shaped Eggs",
      image: "https://lofxbrwkmufhniwetjtf.supabase.co/storage/v1/object/public/recipe_images/b39e2102-3ed3-4022-9f54-ab21f282c274/1780666083614-kalpli-sahanda-yumurta.jpg",
      sourceLink: "https://yemekyarismasi.com/profil/ajiba/tarif/kalpli-sahanda-yumurta",
      recipe: {
        title: "Heart-Shaped Fried Eggs",
        description: "A practical and eye-catching breakfast recipe for those who want to start the day with love. A heart-shaped egg yolk is served surrounded by fresh green onions.",
        difficulty: "Easy",
        prepTime: "5 mins",
        cookTime: "3-5 mins",
        portions: "1 serving",
        ingredients: [
          "1 large egg",
          "2-3 stalks of fresh green onions",
          "1 tablespoon olive oil or butter",
          "Salt",
          "Black pepper or red pepper flakes",
          "1 metal heart-shaped mold (optional)"
        ],
        nutrition: { calories: 190, protein: 6, fat: 13, carbs: 2 },
        chefTouch: "To make the egg even more special, you can sprinkle a little red pepper flakes or paprika over the cooked yolk.",
        steps: [
          "Heat a non-stick pan over medium heat. Once hot, add the olive oil or butter.",
          "If using, place the heart-shaped mold in the center of the pan.",
          "Carefully crack the egg into the mold. Be careful not to let the egg white overflow outside the mold.",
          "Cook until the egg white is completely set and the yolk reaches your desired consistency.",
          "Gently remove the mold and decorate around the egg with washed green onion stalks to emphasize the heart shape.",
          "Sprinkle with salt and spices, and serve hot."
        ]
      }
    },
    {
      id: "sosisli-sis",
      name: "Sausage Skewers",
      image: "https://lofxbrwkmufhniwetjtf.supabase.co/storage/v1/object/public/recipe_images/ccdcc281-54b4-4b5e-b342-acf378f80c0e/1780667175581-sosisli-peynirli--i-ler.jpg",
      sourceLink: "https://yemekyarismasi.com/profil/ceylan/tarif/sosisli-peynirli-sisler",
      recipe: {
        title: "Sausage and Cheese Skewers",
        description: "A practical and delicious snack that you can prepare in a short time with just two main ingredients. A lifesaver for party tables or quick dinners.",
        difficulty: "Easy",
        prepTime: "10 mins",
        cookTime: "10 mins",
        portions: "4 servings",
        ingredients: [
          "4 large hot dog sausages",
          "8-12 slices of cheddar or mozzarella cheese",
          "4 wooden skewers",
          "1 tablespoon vegetable oil (optional, for cooking)"
        ],
        nutrition: { calories: 450, protein: 25, fat: 40, carbs: 5 },
        chefTouch: "You can serve these skewers with ketchup, mustard, or your favorite hot sauce. Accompanied by french fries, it can become a hearty meal.",
        steps: [
          "Wash and dry the sausages, then cut each one into bite-sized pieces about 3-4 cm long.",
          "Cut the cheese slices large enough to wrap around the sausage pieces.",
          "Tightly wrap each sausage piece with a slice of cheese.",
          "Carefully thread the cheese-wrapped sausage pieces onto the wooden skewers.",
          "Heat a non-stick pan over medium heat and optionally add a tiny amount of oil.",
          "Place the skewers in the pan and cook for about 5-8 minutes, turning them so all sides are lightly browned and the cheese melts.",
          "Serve hot."
        ]
      }
    }
  ];

  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
  const [recipe, setRecipe] = useState(SCENARIOS[0].recipe);
  const [image, setImage] = useState(SCENARIOS[0].image);
  const [showKitchenMode, setShowKitchenMode] = useState(false);

  const handleScenarioClick = (scenario) => {
    setActiveScenario(scenario);
    setImage(scenario.image);
    setRecipe(scenario.recipe);
  };

  return (
    <div className="w-full relative pt-2 md:pt-4 pb-6 md:pb-16" id="interactive-demo">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start relative z-10 px-6">
        
        {/* Left: Scenario Selection (Always Visible) */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Step 1: Test Vision AI
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight text-white">
            Select Scenario. Extract Recipe.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8">
            Experience the <strong>Yemek AI Vision Technology</strong>. Select any food scenario below and watch the AI extract a complete recipe instantly.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-zinc-500 font-mono text-sm md:text-base mb-2 text-center lg:text-left">Select a scenario to run Vision AI simulation:</p>
            {SCENARIOS.map((s) => {
              const isB2B = !!s.badge;
              const isSelected = recipe?.title === s.recipe.title;
              return (
                <div 
                  key={s.id}
                  onClick={() => handleScenarioClick(s)}
                  className={`w-full flex items-center gap-6 p-4 rounded-2xl border cursor-pointer transition-all group ${isSelected ? (isB2B ? 'border-amber-500 bg-amber-950/20' : 'border-cyan-500 bg-cyan-950/30') : (isB2B ? 'border-amber-900/50 hover:border-amber-500 hover:bg-amber-950/20' : 'border-zinc-800 hover:border-cyan-500 hover:bg-cyan-950/20')}`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {isSelected && (
                      <div className={`absolute inset-0 flex items-center justify-center ${isB2B ? 'bg-amber-500/20' : 'bg-cyan-500/20'}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isB2B ? 'bg-amber-500' : 'bg-cyan-500'}`}>
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-lg md:text-xl font-bold transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${isSelected ? (isB2B ? 'text-amber-400' : 'text-cyan-400') : (isB2B ? 'text-white group-hover:text-amber-400' : 'text-white group-hover:text-cyan-400')}`}>{s.name}</h3>
                      {isB2B && <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-widest shrink-0">B2B</span>}
                    </div>
                    <p className={`text-sm font-mono mt-1 ${isB2B ? 'text-amber-600' : 'text-zinc-500'}`}>{isSelected ? 'Currently Selected' : (isB2B ? 'Hardware Integration Demo →' : 'Run Extraction Simulation →')}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Offline Test Promo Box */}
          <div className="mt-4 p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/50">
            <p className="text-xs sm:text-sm text-emerald-400 font-mono text-center leading-relaxed">
              <span className="block font-bold mb-1 animate-pulse">⚡ No Cloud Required</span>
              Select a recipe above, disconnect your Wi-Fi, and launch Kitchen Mode to test it offline!
            </p>
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

                <div className="absolute bottom-4 left-6 flex flex-wrap gap-2 pr-6">
                  <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">{recipe.difficulty}</span>
                  <span className="bg-zinc-800 border border-zinc-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">⏱️ Prep: {recipe.prepTime}</span>
                  <span className="bg-zinc-800 border border-zinc-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">🔥 Cook: {recipe.cookTime}</span>
                  <span className="bg-zinc-800 border border-zinc-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">🍽️ {recipe.portions}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[1.2rem] min-[400px]:text-[1.3rem] sm:text-xl md:text-[1.6rem] font-black text-white mb-3 whitespace-nowrap overflow-hidden text-ellipsis">{recipe.title}</h3>
                <p className="text-zinc-400 mb-6 font-light text-base md:text-sm leading-relaxed">{recipe.description}</p>
                
                {/* AI Creation Footnote */}
                <div className="bg-cyan-950/20 border border-cyan-900/40 rounded-xl p-4 mb-8">
                  <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                    <span className="text-cyan-400 font-bold uppercase">🤖 AI Generated:</span> This recipe was generated by a user using YEMEK AI and added to their personal recipe library. You can view the original link on the attached page:{' '}
                    <a href={activeScenario?.sourceLink} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                      Source Page ↗
                    </a>
                  </p>
                </div>
                
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4 text-center">Required Commands</h4>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm shadow-inner">"Next"</span>
                  <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm shadow-inner">"Go Back"</span>
                  <span className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white font-mono text-sm shadow-inner">"Repeat"</span>
                  <span className="px-4 py-2 bg-black border border-red-900/30 text-red-400 rounded-lg font-mono text-sm shadow-inner">"Stop"</span>
                </div>

                <div className="mt-auto">
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

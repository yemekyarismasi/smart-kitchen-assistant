'use client';

import React, { useEffect, useState, useRef } from 'react';

// Tarayıcı uyumluluğu için
const SpeechRecognition = typeof window !== 'undefined' && ((window).SpeechRecognition || (window).webkitSpeechRecognition);

export default function KitchenMode({ recipe, onClose }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const isListeningRef = useRef(false);
  const isSpeakingRef = useRef(false);
  const utteranceRef = useRef(null);
  const [transcript, setTranscript] = useState('');
  const [showIntro, setShowIntro] = useState(true); // Başlangıç bilgilendirmesi
  const [isPaused, setIsPaused] = useState(false);
  const recognitionRef = useRef(null);
  const hasPromptedMeasurementRef = useRef(false);
  const wakeLockRef = useRef(null);
  const timerRef = useRef(null);

  const [measurementMode, setMeasurementMode] = useState('grams');
  const [householdIngredients, setHouseholdIngredients] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(null);

  useEffect(() => {
    // Mutfak Modu açıldığında Body scroll'u kapat
    document.body.style.overflow = 'hidden';
    
    // Screen Wake Lock API (Ekranın kapanmasını engelle)
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLockRef.current = await navigator.wakeLock.request('screen');
        }
      } catch (err) {
        console.warn('Wake Lock error:', err.name, err.message);
      }
    };
    requestWakeLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') requestWakeLock();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US'; // English Speech Recognition

      recognition.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const command = event.results[lastResultIndex][0].transcript.toLowerCase().trim();
        
        // Eğer asistan konuşuyorsa, kendi sesini veya ortamı komut olarak algılamasın
        if (isSpeakingRef.current) return;

        setTranscript(command);
        handleVoiceCommand(command);
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error !== 'no-speech') {
          setIsListening(false);
        }
      };

      recognition.onend = () => {
        // Eğer kullanıcı kapatmadıysa ve ASİSTAN KONUŞMUYORSA mikrofonu yeniden başlat
        if (isListeningRef.current && !isSpeakingRef.current) {
          setTimeout(() => {
            try {
              recognition.start();
            } catch (e) {
              console.warn("Speech API restart error:", e);
            }
          }, 400); // 400ms gecikme
        } else {
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
      
      const startMic = async () => {
        try {
          // Force native prompt
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach(track => track.stop());
        } catch(e) {
          console.warn("Mic permission blocked", e);
        }
        try {
          recognition.start();
          setIsListening(true);
          isListeningRef.current = true;
        } catch (e) {
          console.error("Speech API start error:", e);
        }
      };
      startMic();

    } else {
      console.warn("This browser does not support Web Speech API.");
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      window.speechSynthesis.cancel();
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const formatIngredientForSpeech = (ing) => {
    if (ing.startsWith('--') && ing.endsWith('--')) {
      return ing.replace(/--/g, '').trim() + ' Malzemeleri:';
    }
    const match = ing.match(/\(([^)]+)\)/);
    if (match) {
      let extra = match[1].trim();
      const mainText = ing.replace(match[0], '').trim();
      if (extra.toLowerCase() === 'isteğe bağlı') {
        extra = 'İsteğe bağlı olarak';
      } else {
        extra = extra.charAt(0).toUpperCase() + extra.slice(1);
      }
      return `${extra}, ${mainText}`;
    }
    return ing;
  };

  // Dinamik Oynatma Listesi (Playlist) Oluşturma
  const playList = [];

  if (recipe.description) {
    playList.push({
      title: 'STORY',
      content: <p className="text-2xl md:text-4xl text-slate-200 leading-relaxed font-medium">{recipe.description}</p>,
      speakText: `Welcome to Kitchen Mode, Chef. The story of ${recipe.title}: ${recipe.description}. If you're ready, say 'next' to move to the ingredients.`
    });
  }

  const activeIngredients = measurementMode === 'household' && householdIngredients.length > 0
    ? householdIngredients
    : (recipe.ingredients || []);

  let ingredientsSpeakText = ``;
  if (!recipe.description) {
      ingredientsSpeakText += `Welcome to Kitchen Mode, Chef. For ${recipe.title}, `;
  }
  ingredientsSpeakText += `Ingredients: ${activeIngredients.map(formatIngredientForSpeech).join('. ')}. If you're ready, say 'next' to proceed to the first step.`;
  
  if (!hasPromptedMeasurementRef.current && measurementMode === 'grams' && (recipe.ingredients || []).some(i => i.toLowerCase().includes('g ') || i.toLowerCase().includes('gram') || i.toLowerCase().includes('gr '))) {
    ingredientsSpeakText = "I am reading the ingredients in original grams. You can switch to household measurements by saying 'Household measurements' or using the button on screen. " + ingredientsSpeakText;
  }

  playList.push({
    title: 'INGREDIENTS',
    content: (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => handleMeasurementToggle('grams')}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold transition-all ${measurementMode === 'grams' ? 'bg-amber-500 text-black shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            📏 Grams
          </button>
          <button 
            onClick={() => handleMeasurementToggle('household')}
            disabled={isConverting}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${measurementMode === 'household' ? 'bg-amber-500 text-black shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            🥄 Cups & Spoons
            {isConverting && <div className="w-4 h-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />}
          </button>
        </div>
        <ul className="text-2xl md:text-4xl text-slate-200 leading-relaxed space-y-4 font-medium text-left bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 w-full pointer-events-auto">
          {activeIngredients.map((ing, idx) => {
            if (ing.startsWith('--') && ing.endsWith('--')) {
              return (
                <li key={idx} className="font-black text-amber-500 mt-6 mb-2 border-b border-slate-600 pb-2">
                  {ing.replace(/--/g, '').trim()}
                </li>
              );
            }
            return (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-blue-500">•</span>
                <span className={ing.includes('(~') ? 'text-amber-400 font-bold' : ''}>{ing}</span>
              </li>
            );
          })}
        </ul>
      </div>
    ),
    speakText: ingredientsSpeakText
  });

  (recipe.steps || []).forEach((step, idx) => {
    playList.push({
      title: `STEP ${idx + 1}`,
      content: (
        <div className="bg-slate-800/80 p-8 md:p-12 rounded-[3rem] border border-slate-700 shadow-2xl">
          <p className="text-3xl md:text-5xl font-medium text-white leading-tight">
            {step}
          </p>
        </div>
      ),
      speakText: `Step ${idx + 1}: ${step}`
    });
  });

  if (recipe.chefTouch) {
    playList.push({
      title: "CHEF'S TOUCH",
      content: <p className="text-3xl md:text-5xl text-amber-300 italic leading-tight">"{recipe.chefTouch}"</p>,
      speakText: `Chef's Touch: ${recipe.chefTouch}`
    });
  }

  if (recipe.nutrition) {
    playList.push({
      title: 'NUTRITION VALUES',
      content: (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl text-center min-w-[120px] shadow-lg border border-slate-700"><span className="block text-slate-400 mb-2">Calories</span><span className="text-2xl md:text-4xl font-black text-amber-400">{recipe.nutrition.calories} kcal</span></div>
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl text-center min-w-[120px] shadow-lg border border-slate-700"><span className="block text-slate-400 mb-2">Protein</span><span className="text-2xl md:text-4xl font-black text-blue-400">{recipe.nutrition.protein}g</span></div>
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl text-center min-w-[120px] shadow-lg border border-slate-700"><span className="block text-slate-400 mb-2">Fat</span><span className="text-2xl md:text-4xl font-black text-rose-400">{recipe.nutrition.fat}g</span></div>
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl text-center min-w-[120px] shadow-lg border border-slate-700"><span className="block text-slate-400 mb-2">Carbs</span><span className="text-2xl md:text-4xl font-black text-emerald-400">{recipe.nutrition.carbs}g</span></div>
        </div>
      ),
      speakText: `Nutrition Values: ${recipe.nutrition.calories || 0} calories, ${recipe.nutrition.protein || 0} grams of protein, ${recipe.nutrition.fat || 0} grams of fat, and ${recipe.nutrition.carbs || 0} grams of carbs.`
    });
  }

  playList.push({
    title: 'CONGRATULATIONS! 🎉',
    content: <p className="text-3xl md:text-5xl text-slate-300 leading-tight">Your meal is ready. Bon appétit.</p>,
    speakText: "The recipe is complete. Great job, bon appétit!"
  });

  const startKitchenMode = () => {
    setShowIntro(false);
    speak(playList[0].speakText);
  };

  const handleVoiceCommand = (command) => {
    if (command.includes('next') || command.includes('forward')) {
      handleNext();
    } else if (command.includes('back') || command.includes('previous')) {
      handlePrev();
    } else if (command.includes('repeat') || command.includes('again')) {
      readCurrent();
    } else if (command.includes('ingredients') || command.includes('what do i need')) {
      const ingIndex = playList.findIndex(p => p.title === 'INGREDIENTS');
      if (ingIndex !== -1) {
        setCurrentStepIndex(ingIndex);
        speak(playList[ingIndex].speakText);
      }
    } else if (command.includes('cups') || command.includes('spoons') || command.includes('household')) {
      const ingIndex = playList.findIndex(p => p.title === 'INGREDIENTS');
      if (ingIndex !== -1) setCurrentStepIndex(ingIndex);
      handleMeasurementToggle('household', true);
    } else if (command.includes('grams') || command.includes('original') || command.includes('weight')) {
      const ingIndex = playList.findIndex(p => p.title === 'INGREDIENTS');
      if (ingIndex !== -1) setCurrentStepIndex(ingIndex);
      handleMeasurementToggle('grams', true);
    } else if (command.includes('how much time') || command.includes('how long') || command.includes('time left') || command.includes('timer status')) {
      if (timerSeconds !== null && timerSeconds > 0) {
        const mins = Math.floor(timerSeconds / 60);
        const secs = timerSeconds % 60;
        let response = "You have ";
        if (mins > 0) response += `${mins} minutes and `;
        if (secs > 0) response += `${secs} seconds `;
        response += "left, Chef.";
        speak(response, () => {
        });
      } else {
        speak("There is no active timer right now, Chef.");
      }
    } else if (command.includes('set a timer') || command.includes('timer') || command.includes('minute timer') || command.includes('minutes timer')) {
      const matchMin = command.match(/(\d+)\s*minute/);
      const matchSec = command.match(/(\d+)\s*second/);
      
      let totalSeconds = 0;
      if (matchMin) totalSeconds += parseInt(matchMin[1]) * 60;
      if (matchSec) totalSeconds += parseInt(matchSec[1]);
      
      if (totalSeconds === 0) {
        const enNumbers = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'fifteen': 15, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60 };
        for (const [key, val] of Object.entries(enNumbers)) {
           if (command.includes(`${key} minute`)) totalSeconds += val * 60;
           else if (command.includes(`${key} second`)) totalSeconds += val;
        }
      }

      if (totalSeconds === 0) {
        speak("Please specify a number. For example: Set a timer for 5 minutes.");
        return;
      }

      setTimerSeconds(totalSeconds);
      speak(`Timer started for ${totalSeconds >= 60 ? Math.floor(totalSeconds / 60) + ' minutes' : totalSeconds + ' seconds'}.`);
      
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev === null || prev <= 1) {
             if (timerRef.current) clearInterval(timerRef.current);
             speak("Your timer is up! Please check your food.", () => {
                readCurrent();
             });
             return null;
          }
          return prev - 1;
        });
      }, 1000);

    } else if (command.includes('pause') || command.includes('wait')) {
      pauseSpeech();
    } else if (command.includes('resume') || command.includes('continue')) {
      resumeSpeech();
    } else if (command.includes('close') || command.includes('exit') || command.includes('stop') || command.includes('done')) {
      onClose();
    }
  };

  const handleMeasurementToggle = async (mode, triggerSpeech = false) => {
    setMeasurementMode(mode);
    hasPromptedMeasurementRef.current = true;
    
    if (mode === 'household' && householdIngredients.length === 0) {
      setIsConverting(true);
      if (triggerSpeech) {
         speak("Converting to cups and spoons, please wait...");
      }
      try {
        // B2B Demo Fake Conversion
        await new Promise(r => setTimeout(r, 1000));
        const enriched = (recipe.ingredients || []).map(i => i + " (Cup/Spoon)");
        setHouseholdIngredients(enriched);
        
        if (triggerSpeech) {
          const newSpeakText = `Switched to household measurements. Ingredients: ${enriched.map(formatIngredientForSpeech).join('. ')}. Say 'next' when ready.`;
          speak(newSpeakText);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsConverting(false);
      }
    } else if (triggerSpeech) {
      const activeList = mode === 'household' ? householdIngredients : recipe.ingredients;
      const prefix = mode === 'household' ? "Switched to household measurements. " : "Reverted to original grams. ";
      const newSpeakText = `${prefix} Ingredients: ${activeList.map(formatIngredientForSpeech).join('. ')}. Say 'next' when ready.`;
      speak(newSpeakText);
    }
  };

  const pauseSpeech = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const resumeSpeech = () => {
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const speak = (text, onEndCallback) => {
    window.speechSynthesis.cancel(); 
    setIsPaused(false);
    
    if (text.includes("Malzemeleri orijinal gramajıyla okuyorum")) {
      hasPromptedMeasurementRef.current = true;
    }

    isSpeakingRef.current = true;

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance; 
    
    utterance.lang = 'en-US';
    utterance.rate = 1.05; 
    
    const onSpeechEnd = () => {
      isSpeakingRef.current = false;
      if (isListeningRef.current && recognitionRef.current) {
        setTimeout(() => {
          try {
            recognitionRef.current.start();
          } catch (e) {}
        }, 400);
      }
      if (onEndCallback) onEndCallback();
    };

    utterance.onend = onSpeechEnd;
    utterance.onerror = onSpeechEnd;

    window.speechSynthesis.speak(utterance);
  };

  const readCurrent = () => {
    speak(playList[currentStepIndex].speakText);
  };

  const handleNext = () => {
    setCurrentStepIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex < playList.length) {
        speak(playList[nextIndex].speakText);
        return nextIndex;
      }
      return prev;
    });
  };

  const handlePrev = () => {
    setCurrentStepIndex((prev) => {
      const prevIndex = prev > 0 ? prev - 1 : 0;
      speak(playList[prevIndex].speakText);
      return prevIndex;
    });
  };

  const toggleListening = () => {
    if (isListeningRef.current) {
      recognitionRef.current?.stop();
      setIsListening(false);
      isListeningRef.current = false;
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
        isListeningRef.current = true;
      } catch (e) {
        console.error("Mic start error", e);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900 text-white flex flex-col p-6 overflow-hidden">
      
      {/* Başlangıç Bilgilendirme Ekranı */}
      {showIntro && (
        <div className="absolute inset-0 z-50 bg-slate-900/95 backdrop-blur-md overflow-y-auto flex flex-col items-center p-4 sm:p-8 text-center animate-fade-in">
          <div className="bg-slate-800 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-slate-700 shadow-2xl max-w-2xl w-full my-auto">
            <span className="text-6xl mb-6 block">👨‍🍳</span>
            <h2 className="text-3xl md:text-5xl font-black text-amber-400 mb-6">Kitchen Mode</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              No need to touch the screen while your hands are covered in dough! Control the assistant using voice commands.
            </p>
            <div className="bg-slate-900 rounded-3xl p-6 mb-8 text-left border border-slate-700">
              <h3 className="font-bold text-emerald-400 mb-4 text-lg">Voice Commands:</h3>
              <ul className="space-y-3 text-slate-300">
                <li><span className="text-amber-400 font-bold">"Next"</span> - Proceeds to the next step</li>
                <li><span className="text-amber-400 font-bold">"Back"</span> - Returns to the previous step</li>
                <li><span className="text-amber-400 font-bold">"Repeat"</span> - Repeats the current step</li>
                <li><span className="text-amber-400 font-bold">"Set a 5 minute timer"</span> - Starts a timer</li>
                <li><span className="text-amber-400 font-bold">"Stop"</span> or <span className="text-amber-400 font-bold">"Close"</span> - Exits the mode</li>
              </ul>
            </div>
            <button 
              onClick={startKitchenMode}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-black text-2xl py-5 rounded-2xl shadow-xl transition-transform active:scale-95"
            >
              Got it, Start! 🚀
            </button>
          </div>
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-400 leading-tight">👨‍🍳 Kitchen Mode</h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-300 mt-2">{recipe.title}</h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button 
            onClick={onClose}
            className="bg-red-500/20 text-red-400 p-4 rounded-2xl hover:bg-red-500/30 transition text-lg font-bold"
          >
            Close (X)
          </button>
          {/* Debug Panel */}
          <div className="text-xs font-mono text-right bg-black/50 p-2 rounded-xl border border-zinc-800">
             <div className={isListening ? "text-emerald-400" : "text-red-400"}>
               Mic: {isListening ? "ON" : "OFF"}
             </div>
             <div className="text-cyan-400">
               Shield: {isSpeakingRef.current ? "ACTIVE" : "INACTIVE"}
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center items-center w-full min-h-[50vh] p-4 relative z-10 transition-all duration-500 overflow-y-auto">
          
          {timerSeconds !== null && (
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full border-2 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.6)] flex items-center gap-4 animate-pulse backdrop-blur-xl bg-black/40">
              <span className="text-amber-500 animate-spin text-xl">⏳</span>
              <span className="text-3xl md:text-4xl font-black text-amber-500 tracking-widest drop-shadow-md" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {Math.floor(timerSeconds / 60).toString().padStart(2, '0')}:{(timerSeconds % 60).toString().padStart(2, '0')}
              </span>
              <button 
                onClick={() => { if(timerRef.current) clearInterval(timerRef.current); setTimerSeconds(null); }} 
                className="ml-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform shadow-lg"
              >
                X
              </button>
            </div>
          )}

          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-8 uppercase tracking-widest">{playList[currentStepIndex].title}</h3>
            {playList[currentStepIndex].content}
          </div>
          </div>
        </div>
        
      {/* Footer / Controls */}
      <div className="mt-auto border-t border-slate-800 pt-6 flex flex-col items-center">
        
        {/* Sesli Asistan Durumu */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <button 
            onClick={toggleListening}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl transition-all ${
              isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-700'
            }`}
          >
            🎙️
          </button>
          <span className={`font-bold text-lg ${isListening ? 'text-red-400' : 'text-slate-500'}`}>
            {isListening ? 'Listening...' : 'Mic Off'}
          </span>
          {transcript && (
             <span className="text-slate-400 text-sm mt-1">Last command: "{transcript}"</span>
          )}
        </div>

        {/* Dokunmatik Kontroller */}
        <div className="flex flex-col w-full gap-3 mt-2 max-w-4xl">
          <div className="flex gap-3 w-full">
            <button 
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="flex-1 bg-slate-800 p-4 md:p-6 rounded-2xl text-lg md:text-2xl font-bold disabled:opacity-50 hover:bg-slate-700 active:scale-95 transition shadow-lg"
            >
              👆 PREV (BACK)
            </button>
            <button 
              onClick={readCurrent}
              className="flex-1 bg-blue-600 p-4 md:p-6 rounded-2xl text-lg md:text-2xl font-bold hover:bg-blue-500 active:scale-95 transition shadow-lg"
            >
              🔊 REPEAT
            </button>
          </div>

          <button 
            onClick={handleNext}
            disabled={currentStepIndex >= playList.length - 1}
            className="w-full bg-emerald-600 p-6 md:p-8 rounded-3xl text-2xl md:text-4xl font-black disabled:opacity-50 hover:bg-emerald-500 active:scale-95 transition shadow-xl border-b-4 border-emerald-800"
          >
            👇 NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
}

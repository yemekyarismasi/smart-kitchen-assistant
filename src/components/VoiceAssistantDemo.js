"use client";

import { useState, useEffect, useRef } from 'react';

export default function VoiceAssistantDemo({ recipeTitle, recipeSteps }) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakingUI, setIsSpeakingUI] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const isSpeakingRef = useRef(false);
  const isListeningRef = useRef(false);
  const utteranceRef = useRef(null);
  const recognitionRef = useRef(null);

  const defaultSteps = [
    "Welcome. Let's make something delicious. Say 'next' when you are ready.",
    "Step 1: Gather your ingredients and prepare your workspace.",
    "Step 2: Follow the first instruction carefully.",
    "Step 3: Combine everything and cook.",
    "Step 4: Plate your dish beautifully. Enjoy!"
  ];

  const steps = recipeSteps && recipeSteps.length > 0 
    ? [`Welcome. Let's make ${recipeTitle || 'this recipe'}. Say 'next' when you are ready.`, ...recipeSteps, "Recipe complete. Enjoy your meal! Say 'stop' to end."] 
    : defaultSteps;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setErrorMsg("Your browser does not support Voice AI. Try Chrome.");
        return;
      }
      
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false; 
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const result = event.results[last][0].transcript.toLowerCase().trim();
        
        if (isSpeakingRef.current) return;
        
        setTranscript(result);

        const intentNext = ["next", "necks", "text", "nets", "max", "continue", "go", "ready", "done", "yes", "ok", "okay", "yeah", "yep", "forward", "let's go", "devam", "ileri"];
        const intentBack = ["back", "previous", "before", "geri", "geriye"];
        const intentRepeat = ["repeat", "again", "what", "pardon", "sorry", "tekrar"];
        const intentStop = ["stop", "cancel", "end", "quit", "finish", "dur", "kapat"];

        const isIntent = (transcript, intentArray) => intentArray.some(word => transcript.includes(word));

        if (isIntent(result, intentNext)) {
          setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
          setTranscript("");
        } else if (result.includes("back") || isIntent(result, intentBack)) {
          setCurrentStep(prev => Math.max(prev - 1, 0));
          setTranscript("");
        } else if (isIntent(result, intentRepeat)) {
          speakText(steps[currentStep]);
          setTranscript("");
        } else if (isIntent(result, intentStop)) {
          setIsActive(false);
          setTranscript("");
          window.speechSynthesis.cancel();
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        if (event.error !== 'no-speech') {
          setIsListening(false);
        }
      };

      recognition.onstart = () => {
        setIsListening(true);
        setErrorMsg("");
      };
      
      recognition.onend = () => {
        // Eğer kullanıcı kapatmadıysa ve ASİSTAN KONUŞMUYORSA mikrofonu yeniden başlat
        if (isListeningRef.current && !isSpeakingRef.current) {
          setTimeout(() => {
            try { recognition.start(); } catch (e) {}
          }, 400);
        } else {
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onend = null;
        try { recognitionRef.current.stop(); } catch(e) {}
      }
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
    };
  }, [isActive, currentStep, steps]);

  const speakText = (text) => {
    if (typeof window === "undefined" || !isActive) return;
    
    window.speechSynthesis.cancel(); 

    isSpeakingRef.current = true;
    setIsSpeakingUI(true);

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance; // Garbage collection bug fix
    
    utterance.lang = "en-US";
    utterance.rate = 1.0;
    
    const onSpeechEnd = () => {
      isSpeakingRef.current = false;
      setIsSpeakingUI(false);
      if (isListeningRef.current && recognitionRef.current) {
        setTimeout(() => {
          try { recognitionRef.current.start(); } catch (e) {}
        }, 400);
      }
    };

    utterance.onend = onSpeechEnd;
    utterance.onerror = onSpeechEnd;
    utterance.oncancel = () => {};

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (isActive) {
      speakText(steps[currentStep]);
    }
  }, [currentStep, isActive, steps]);

  const toggleSession = () => {
    if (!isActive) {
      setIsActive(true);
      setCurrentStep(0);
      setErrorMsg("");
      setTranscript("");
      
      try {
        if (recognitionRef.current) {
          recognitionRef.current.start();
          setIsListening(true);
          isListeningRef.current = true;
        }
      } catch (e) {
        console.error("Mic start error:", e);
      }
    } else {
      setIsActive(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        setIsListening(false);
        isListeningRef.current = false;
      }
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 relative z-10">
      
      {/* State Indicators */}
      <div className="flex gap-4 mb-8">
        <div className={`px-4 py-1.5 rounded-full text-sm md:text-xs font-mono border transition-colors ${isActive && isSpeakingUI ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
          Output: SPEAKING
        </div>
        <div className={`px-4 py-1.5 rounded-full text-sm md:text-xs font-mono border transition-colors ${isActive && !isSpeakingUI && isListening ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
          Input: LISTENING
        </div>
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center mb-8">
        {isActive && (
          <>
            <div className={`absolute inset-0 rounded-full border-4 ${isSpeakingUI ? 'border-cyan-400 scale-110 opacity-50' : 'border-emerald-500 scale-125 opacity-20'} animate-ping transition-all duration-500`}></div>
            <div className={`absolute inset-2 rounded-full border-2 ${isSpeakingUI ? 'border-cyan-400 opacity-70' : 'border-emerald-500 opacity-40'} animate-pulse`}></div>
          </>
        )}
        <button 
          onClick={toggleSession}
          className={`w-36 h-36 rounded-full flex flex-col items-center justify-center relative z-10 transition-all shadow-2xl ${
            isActive 
              ? isSpeakingUI
                ? 'bg-cyan-500 text-black shadow-[0_0_40px_rgba(34,211,238,0.6)] border-4 border-cyan-300' 
                : 'bg-emerald-500 text-black shadow-[0_0_40px_rgba(16,185,129,0.6)] border-4 border-emerald-300'
              : 'bg-zinc-900 border-2 border-zinc-700 text-white hover:border-cyan-400 hover:bg-zinc-800'
          }`}
        >
          <svg className={`w-12 h-12 mb-2 transition-colors ${isActive ? (isSpeakingUI ? 'text-cyan-900' : 'text-emerald-900') : 'text-zinc-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>
          <span className={`font-bold tracking-widest uppercase text-sm ${isActive ? 'text-black' : 'text-white'}`}>
            {isActive ? 'Turn Off' : 'Activate'}
          </span>
        </button>
      </div>

      {errorMsg && (
        <div className="mb-6 p-3 bg-red-950/50 border border-red-900 rounded-lg text-red-400 text-sm md:text-xs font-mono text-center">
          {errorMsg}
        </div>
      )}

      {isActive && (
        <div className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center shadow-xl backdrop-blur-md">
          <p className="text-xl font-light text-zinc-200 leading-relaxed">
            {steps[currentStep]}
          </p>
        </div>
      )}

      {isActive && transcript && (
        <div className="mt-6 w-full max-w-md bg-black border border-emerald-900/30 rounded-xl p-4 text-left">
          <p className="text-zinc-500 font-mono text-sm md:text-xs mb-1">System heard:</p>
          <p className="text-emerald-400 font-mono text-sm">"{transcript}"</p>
        </div>
      )}
    </div>
  );
}

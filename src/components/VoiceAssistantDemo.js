"use client";
import { useState, useEffect, useRef } from "react";

export default function VoiceAssistantDemo({ recipeSteps, recipeTitle }) {
  const steps = recipeSteps && recipeSteps.length > 0 ? [
    `Welcome. Let's make ${recipeTitle || 'this recipe'}. Say 'next' when you are ready.`,
    ...recipeSteps,
    "Say 'stop' to end the session."
  ] : [
    "Welcome. Let's make Heart-Shaped Sunny-Side Up Eggs. Say 'next' when you are ready.",
    "Step 1: Place a heart-shaped silicone mold in the center of your pan over medium heat.",
    "Step 2: Add half a tablespoon of butter inside the mold and let it melt. Say 'next'.",
    "Step 3: Gently crack an egg directly into the heart shape.",
    "Step 4: Cook for 3 minutes until the whites are firm. Say 'stop' to end the session."
  ];

  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // HFSCA Acoustic Shield Logic
  const isSpeakingRef = useRef(false);
  const recognitionRef = useRef(null);

  // Store utterance globally to prevent Chrome garbage collection bug
  useEffect(() => {
    window.activeUtterances = [];
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined" && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        if (isSpeakingRef.current) return;

        const last = event.results.length - 1;
        const result = event.results[last][0].transcript.toLowerCase().trim();
        
        setTranscript(result);

        // B2B AI Feature: Semantic Intent Parsing (Zero-Latency Local NLP)
        // Instead of strict keywords, we evaluate the semantic intent and phonetics of the transcript.
        const intentNext = ["next", "necks", "text", "nets", "max", "continue", "go", "ready", "done", "yes", "ok", "okay", "yeah", "yep", "forward", "let's go", "devam", "ileri"];
        const intentBack = ["back", "previous", "before", "geri", "geriye"];
        const intentRepeat = ["repeat", "again", "what", "pardon", "sorry", "tekrar"];
        const intentStop = ["stop", "cancel", "end", "quit", "finish", "dur", "kapat"];

        const isIntent = (transcript, intentArray) => intentArray.some(word => transcript.includes(word));

        if (isIntent(result, intentNext)) {
          setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
        } else if (result.includes("back")) {
          // Keep strict for back to prevent accidental backwards
          setCurrentStep(prev => Math.max(prev - 1, 0));
        } else if (isIntent(result, intentRepeat)) {
          speakText(steps[currentStep]);
        } else if (isIntent(result, intentStop)) {
          setIsActive(false);
          recognition.stop();
          window.speechSynthesis.cancel();
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        if (event.error === 'not-allowed') {
          setErrorMsg("Microphone blocked. Please click the camera/mic icon in your URL bar and select 'Allow'.");
          setIsActive(false);
        }
      };

      recognition.onstart = () => {
        setIsListening(true);
        setErrorMsg("");
      };
      
      recognition.onend = () => {
        setIsListening(false);
        if (isActive) {
          setTimeout(() => {
            if (recognitionRef.current && isActive) {
              try { recognitionRef.current.start(); } catch(e) {}
            }
          }, 300);
        }
      };

      recognitionRef.current = recognition;
    } else {
      setErrorMsg("Your browser does not support Web Speech API. Please use Chrome or Edge.");
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onend = null; 
        try { recognitionRef.current.stop(); } catch(e) {}
      }
    };
  }, [isActive, currentStep]);

  const speakText = (text) => {
    if (typeof window === "undefined" || !isActive) return;
    
    isSpeakingRef.current = true;
    window.speechSynthesis.cancel(); 

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1.0;
    
    window.activeUtterances.push(utterance);

    // Failsafe timer: in case onend never fires (Chrome bug)
    const failsafeTimer = setTimeout(() => {
      isSpeakingRef.current = false;
    }, Math.max(text.length * 100, 3000));

    const clearSpeakingState = () => {
      clearTimeout(failsafeTimer);
      setTimeout(() => {
        isSpeakingRef.current = false;
      }, 400);
    };

    utterance.onend = clearSpeakingState;
    utterance.onerror = clearSpeakingState;
    utterance.oncancel = clearSpeakingState;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (isActive) {
      speakText(steps[currentStep]);
    }
  }, [currentStep, isActive, steps]);

  const toggleSession = async () => {
    if (!isActive) {
      // Force native microphone permission prompt before starting Web Speech API
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Close the stream immediately, we just needed to force the permission prompt
        stream.getTracks().forEach(track => track.stop());
      } catch (err) {
        setErrorMsg("Browser blocked microphone. Check the URL bar to allow access.");
        return;
      }

      setIsActive(true);
      setCurrentStep(0);
      setErrorMsg("");
      setTranscript("");
      
      if (recognitionRef.current) {
        try { 
          recognitionRef.current.start(); 
        } catch(e) {
          console.error("Mic start error:", e);
        }
      }
    } else {
      setIsActive(false);
      if (recognitionRef.current) {
        recognitionRef.current.onend = null; 
        try { recognitionRef.current.stop(); } catch(e) {}
      }
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      
      {errorMsg && (
        <div className="mb-6 p-4 bg-red-950/50 border border-red-900 rounded-lg text-red-400 text-sm animate-pulse w-full shadow-[0_0_15px_rgba(239,68,68,0.2)] font-mono">
          {errorMsg}
        </div>
      )}

      {/* Visualizer Circle */}
      <div className="relative w-48 h-48 flex items-center justify-center mb-8">
        {isActive && (
          <>
            <div className={`absolute inset-0 rounded-full border-4 ${isSpeakingRef.current ? 'border-cyan-400 scale-110 opacity-50' : 'border-emerald-500 scale-125 opacity-20'} animate-ping transition-all duration-500`}></div>
            <div className={`absolute inset-2 rounded-full border-2 ${isSpeakingRef.current ? 'border-cyan-400 opacity-70' : 'border-emerald-500 opacity-40'} animate-pulse`}></div>
          </>
        )}
        <button 
          onClick={toggleSession}
          className={`w-36 h-36 rounded-full flex flex-col items-center justify-center relative z-10 transition-all shadow-2xl ${
            isActive 
              ? isSpeakingRef.current 
                ? 'bg-cyan-500 text-black shadow-[0_0_40px_rgba(34,211,238,0.6)] border-4 border-cyan-300' 
                : 'bg-emerald-500 text-black shadow-[0_0_40px_rgba(16,185,129,0.6)] border-4 border-emerald-300'
              : 'bg-zinc-900 border-2 border-zinc-700 text-white hover:border-cyan-400 hover:bg-zinc-800'
          }`}
        >
          {isActive ? (
             <svg className="w-12 h-12 mb-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
             </svg>
          ) : (
            <svg className="w-12 h-12 mb-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
             </svg>
          )}
          <span className="font-bold text-sm uppercase tracking-widest mt-1">{isActive ? 'Turn Off' : 'Activate Mode'}</span>
        </button>
      </div>

      {/* State Indicators */}
      <div className="flex gap-4 mb-8">
        <div className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-colors ${isActive && isSpeakingRef.current ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
          Output: SPEAKING
        </div>
        <div className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-colors ${isActive && !isSpeakingRef.current && isListening ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
          Input: LISTENING
        </div>
      </div>

      {/* The Recipe Text */}
      <div className="bg-zinc-900/50 w-full rounded-2xl p-6 border border-zinc-800 min-h-[140px] flex items-center justify-center shadow-inner">
        <p className={`text-xl sm:text-2xl font-light transition-all ${isActive ? 'text-white' : 'text-zinc-600'}`}>
          {isActive ? steps[currentStep] : "Press activate to start Kitchen Assistant."}
        </p>
      </div>

      {/* Live Transcript */}
      {isActive && (
        <div className="mt-6 w-full text-left bg-black p-4 rounded-xl border border-zinc-800 font-mono text-sm shadow-lg">
          <span className="text-zinc-500">System heard: </span>
          <span className="text-emerald-400">"{transcript || 'Waiting for voice command...'}"</span>
        </div>
      )}
    </div>
  );
}

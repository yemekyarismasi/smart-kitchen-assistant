import React from 'react';

export default function OpenSourceSection() {
  const githubRepos = [
    {
      title: "Smart Kitchen Assistant",
      desc: "The core Edge AI web interface and offline simulation environment.",
      link: "https://github.com/yemekyarismasi/smart-kitchen-assistant"
    },
    {
      title: "Smart Kitchen Voice Assistant",
      desc: "Acoustic shielding and offline voice recognition models.",
      link: "https://github.com/yemekyarismasi/smart-kitchen-voice-assistant"
    },
    {
      title: "Yemek AI Whitepaper",
      desc: "The foundational research paper detailing the HFSCA architecture.",
      link: "https://github.com/yemekyarismasi/yemek-ai-whitepaper"
    }
  ];

  const mediumArticles = [
    {
      title: "Why Big Tech is Failing at the Smart Kitchen",
      desc: "And how we solved it with zero-cost edge AI.",
      link: "https://medium.com/@oytunciba/why-big-tech-is-failing-at-the-smart-kitchen-and-how-we-solved-it-with-zero-cost-edge-ai-c471900da42e",
      readTime: "5 min read",
      author: "Yemek AI Engineering"
    },
    {
      title: "How We Solved Multimodal AI Hallucinations",
      desc: "Reverse engineering the generative pipeline for 100% Visual Ground Truth.",
      link: "https://medium.com/@oytunciba/how-we-solved-multimodal-ai-hallucinations-by-reverse-engineering-the-generative-pipeline-c4c68c2aa813",
      readTime: "8 min read",
      author: "Yemek AI Engineering"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto pb-16 md:pb-24 pt-4 md:pt-8 px-6 relative z-10" id="resources">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          Open Source & Research
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          We believe in transparent, verifiable architecture. Explore our open-source repositories or dive into the technical methodology behind our engineering decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* GitHub Column */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6 px-2">
            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <h3 className="text-xl md:text-2xl font-bold text-white">Repositories</h3>
          </div>
          {githubRepos.map((repo, i) => (
            <a key={i} href={repo.link} target="_blank" rel="noopener noreferrer" className="block p-5 md:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900 transition-all group backdrop-blur-sm">
              <h4 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 mb-2 flex items-center justify-between">
                {repo.title}
                <span className="text-zinc-700 group-hover:text-cyan-400 transition-colors">↗</span>
              </h4>
              <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed">{repo.desc}</p>
            </a>
          ))}
        </div>

        {/* Medium Column */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6 px-2">
            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            <h3 className="text-xl md:text-2xl font-bold text-white">Publications</h3>
          </div>
          {mediumArticles.map((article, i) => (
            <a key={i} href={article.link} target="_blank" rel="noopener noreferrer" className="flex flex-col p-5 md:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Article</span>
                <span className="text-[11px] text-zinc-300 font-medium">{article.author}</span>
                <span className="text-[11px] text-zinc-600 hidden min-[400px]:inline">•</span>
                <span className="text-[11px] text-zinc-500">{article.readTime}</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 mb-2 flex items-center justify-between transition-colors">
                {article.title}
                <span className="text-zinc-700 group-hover:text-emerald-400 transition-colors">↗</span>
              </h4>
              <p className="text-zinc-300 text-[15px] md:text-sm leading-relaxed mb-1 flex-1">{article.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

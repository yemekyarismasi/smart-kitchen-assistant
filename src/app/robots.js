export default function robots() {
  return {
    rules: [
      {
        // All standard search engine crawlers
        userAgent: '*',
        allow: '/',
      },
      {
        // OpenAI / ChatGPT
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // Google Gemini (training & AI Overviews)
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Anthropic Claude
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        // Anthropic Claude (alternate agent name)
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        // Perplexity AI
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // xAI Grok
        userAgent: 'Grok',
        allow: '/',
      },
      {
        // Meta AI
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        // Apple
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        // Cohere AI
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://smartkitchenassistant.com/sitemap.xml',
  };
}

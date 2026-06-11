import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  try {
    const body = await request.json();
    const { base64Image, mimeType } = body;

    if (!base64Image) {
      return NextResponse.json({ error: 'No image provided.' }, { status: 400 });
    }

    // Try keys in sequence
    const apiKeys = [
      process.env.GEMINI_API_KEY,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
    }

    const photoPrompt = `Analyze this food image and extract an English recipe for it.
It must be a real, structured recipe. If there is no food in the image, return an error.

Return EXACTLY this JSON format and nothing else:
{
  "title": "Name of the dish",
  "description": "Short delicious description",
  "prepTime": "e.g., 15 mins",
  "cookTime": "e.g., 30 mins",
  "difficulty": "Easy / Medium / Hard",
  "servings": "e.g., 4 servings",
  "ingredients": ["Ingredient 1 with amount", "Ingredient 2 with amount"],
  "steps": ["Step 1: do this", "Step 2: do that"],
  "chefTouch": "A professional plating or cooking tip"
}`;

    let resultText = null;

    for (const apiKey of apiKeys) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        
        const result = await model.generateContent([
          { inlineData: { data: base64Image, mimeType: mimeType || 'image/jpeg' } },
          photoPrompt
        ]);

        if (result && result.response) {
          resultText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
          break; // Success
        }
      } catch (err) {
        console.warn('Gemini API Error with one key:', err.message);
        // Continue to next key
      }
    }

    if (!resultText) {
      return NextResponse.json({ error: 'Failed to analyze the image.' }, { status: 500 });
    }

    try {
      const parsed = JSON.parse(resultText);
      return NextResponse.json({ recipe: parsed });
    } catch (parseError) {
      console.error('JSON Parse Error:', resultText);
      return NextResponse.json({ error: 'AI returned invalid format.' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

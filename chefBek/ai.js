import { GoogleGenAI } from '@google/genai'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients
and suggests a recipe they could make.

You don't need to use every ingredient.
Try not to include too many extra ingredients.
Format your response in markdown.
`

const ai = new GoogleGenAI({
	apiKey: import.meta.env.VITE_GEMINI_API_KEY,
})

export async function getRecipeFromGemini(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(', ')

	try {
		const response = await ai.models.generateContent({
			model: 'gemini-3.8-flash',
			contents: `
                ${SYSTEM_PROMPT}

                I have ${ingredientsString}.
                Please give me a recipe you'd recommend I make!
            `,
			config: {
				maxOutputTokens: 1024,
			},
		})

		return response.text
	} catch (err) {
		console.error('Gemini API error:', err)
		throw err
	}
}

import { GoogleGenAI } from '@google/genai'
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const ai = new GoogleGenAI({
	apiKey: import.meta.env.VITE_GEMINI_API_KEY,
})

export async function getRecipeFromGemini(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(', ')

	try {
		const response = await ai.models.generateContent({
			model: 'gemini-3-flash-preview',
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

// Make sure you set an environment variable in Scrimba
// for HF_ACCESS_TOKEN
const hf = new HfInference(process.env.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)

export async function getRecipeFromMistral(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(', ')
	try {
		const response = await hf.chatCompletion({
			model: 'mistralai/Mistral-7B-Instruct-v0.1',
			messages: [
				{ role: 'system', content: SYSTEM_PROMPT },
				{
					role: 'user',
					content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
				},
			],
			max_tokens: 1024,
		})
		return response.choices[0].message.content
	} catch (err) {
		console.error(err.message)
	}
}

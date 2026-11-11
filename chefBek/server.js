import { GoogleGenAI } from '@google/genai'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

if (!process.env.GEMINI_API_KEY) {
	throw new Error('GEMINI_API_KEY is missing from .env')
}

const ai = new GoogleGenAI({
	apiKey: process.env.GEMINI_API_KEY,
})

app.get('/', (req, res) => {
	res.send('Chef-Bek Gemini backend is running!')
})

app.post('/api/recipe', async (req, res) => {
	try {
		const { ingredients } = req.body

		if (
			!Array.isArray(ingredients) ||
			ingredients.length === 0 ||
			!ingredients.every(item => typeof item === 'string' && item.trim())
		) {
			return res.status(400).json({
				error: 'Please provide valid ingredients.',
			})
		}

		const response = await ai.models.generateContent({
			model: 'gemini-3.8-flash',
			contents: `I have these ingredients: ${ingredients.join(', ')}.
      Suggest a delicious and practical recipe.`,
			config: {
				systemInstruction: `
          You are Chef-Bek, a helpful cooking assistant.
          Create practical recipes using the user's ingredients.
          Include:
          1. Recipe name
          2. Short description
          3. Preparation and cooking time
          4. Ingredients with quantities
          5. Clear step-by-step instructions
          Format your answer in Markdown.
        `,
				temperature: 0.7,
				maxOutputTokens: 3000,
			},
		})

		res.json({
			recipe: response.text,
		})
	} catch (error) {
		console.error('GEMINI ERROR:', error)

		res.status(500).json({
			error: error.message || 'Failed to generate recipe.',
		})
	}
})

app.listen(PORT, () => {
	console.log(`Chef-Bek Gemini backend running on port ${PORT}`)
})

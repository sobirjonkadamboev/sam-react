import { InferenceClient } from '@huggingface/inference'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

if (!process.env.HF_ACCESS_TOKEN) {
	throw new Error('HF_ACCESS_TOKEN is missing from .env')
}

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN)

const SYSTEM_PROMPT = `
You are Chef-Bek, a helpful cooking assistant.

You receive a list of ingredients and suggest a delicious recipe
that the user can prepare with some or all of those ingredients.

You may include a few additional ingredients if necessary.
Keep the recipe practical and easy to follow.

Format your response in Markdown.
Include:
- Recipe name
- Short description
- Preparation time
- Ingredients
- Step-by-step instructions
`

app.get('/', (req, res) => {
	res.send('Chef-Bek Mistral backend is running!')
})

app.post('/api/recipe', async (req, res) => {
	try {
		const { ingredients } = req.body

		if (!Array.isArray(ingredients) || ingredients.length === 0) {
			return res.status(400).json({
				error: 'Please provide some ingredients.',
			})
		}

		const ingredientsString = ingredients.join(', ')

		const response = await hf.chatCompletion({
			model: 'mistralai/Mistral-7B-Instruct-v0.3',
			messages: [
				{
					role: 'system',
					content: SYSTEM_PROMPT,
				},
				{
					role: 'user',
					content: `I have these ingredients: ${ingredientsString}. Suggest a recipe.`,
				},
			],
			max_tokens: 1024,
			temperature: 0.7,
		})

		const recipe = response.choices[0].message.content

		res.json({ recipe })
	} catch (error) {
		console.error('Mistral API error:', {
			message: error.message,
			status: error.status,
		})

		res.status(error.status || 500).json({
			error: error.message || 'Failed to generate recipe.',
		})
	}
})

app.listen(PORT, () => {
	console.log(`Chef-Bek Mistral backend running on port ${PORT}`)
})

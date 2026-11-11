import Anthropic from '@anthropic-ai/sdk'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const anthropic = new Anthropic({
	apiKey: process.env.ANTHROPIC_API_KEY,
})

app.get('/', (req, res) => {
	res.send('Chef-Bek backend is running!')
})

app.post('/api/recipe', async (req, res) => {
	try {
		const { ingredients } = req.body

		if (!Array.isArray(ingredients) || ingredients.length === 0) {
			return res.status(400).json({
				error: 'Please provide ingredients.',
			})
		}

		const message = await anthropic.messages.create({
			model: 'claude-haiku-4-5-20251001',
			max_tokens: 1024,
			system:
				"You are Chef Claude. Suggest a delicious recipe using the user's ingredients. Format your answer in Markdown.",
			messages: [
				{
					role: 'user',
					content: `My ingredients are: ${ingredients.join(', ')}. Suggest a recipe.`,
				},
			],
		})

		const recipe = message.content
			.filter(block => block.type === 'text')
			.map(block => block.text)
			.join('\n')

		res.json({ recipe })
	} catch (error) {
		console.error('Recipe error:', {
			message: error.message,
			status: error.status,
			type: error.error?.type,
		})

		res.status(error.status || 500).json({
			error: error.message || 'Recipe generation failed',
		})
	}
})

app.listen(PORT, () => {
	console.log(`Chef-Bek backend running on port ${PORT}`)
})

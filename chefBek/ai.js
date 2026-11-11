const SYSTEM_PROMPT = `
You are Chef-Bek, a helpful cooking assistant.
You receive a list of ingredients and suggest a recipe
that the user can make with some or all of them.

You can include a few additional ingredients if needed,
but avoid adding too many.

Format your response in Markdown.
Include a recipe name, description, preparation time,
ingredients, and step-by-step instructions.
`

export async function getRecipeFromGemini(ingredientsArr) {
	try {
		const response = await fetch('/api/recipe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				ingredients: ingredientsArr,
			}),
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'Recipe generation failed')
		}

		return data.recipe
	} catch (error) {
		console.error('Gemini recipe error:', error)
		throw error
	}
}

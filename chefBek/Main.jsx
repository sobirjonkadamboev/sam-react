import React from 'react'
import { getRecipeFromGemini } from './ai'
import ClaudeRecipe from './components/ClaudeRecipe'
import IngredientsList from './components/IngredientsList'

export default function Main() {
	const [ingredients, setIngredients] = React.useState([])
	const [recipe, setRecipe] = React.useState('')
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState('')

	async function getRecipe() {
		if (ingredients.length === 0 || isLoading) return

		setIsLoading(true)
		setError('')
		setRecipe('')

		try {
			const recipeMarkdown = await getRecipeFromGemini(ingredients)
			setRecipe(recipeMarkdown)
		} catch (err) {
			setError(err.message || 'Something went wrong. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	function addIngredient(formData) {
		const newIngredient = formData.get('ingredient').trim()

		if (!newIngredient) return

		setIngredients(prevIngredients => [...prevIngredients, newIngredient])
	}

	return (
		<main>
			<form action={addIngredient} className='add-ingredient-form'>
				<input
					type='text'
					placeholder='e.g. oregano'
					aria-label='Add ingredient'
					name='ingredient'
					required
				/>
				<button type='submit'>Add ingredient</button>
			</form>

			{ingredients.length > 0 && (
				<IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
			)}

			{isLoading && (
				<div className='loading-message'>
					<h2>👨‍🍳 Chef-Bek is cooking...</h2>
					<p>Finding the perfect recipe for your ingredients.</p>
				</div>
			)}

			{error && <p className='error-message'>{error}</p>}

			{recipe && <ClaudeRecipe recipe={recipe} />}
		</main>
	)
}

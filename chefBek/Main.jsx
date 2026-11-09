import React from 'react'
import { getRecipeFromGemini } from './ai'
import IngredientsList from './components/IngredientsList'
export default function Main() {
	const [ingredients, setIngredients] = React.useState([
		'all the main spices',
		'pasta',
		'ground beef',
		'tomato paste',
	])
	const [recipeShown, setRecipeShown] = React.useState(false)

	const [recipe, setRecipe] = React.useState('')

	async function getRecipe() {
		const recipeMarkdown = await getRecipeFromGemini(ingredients)
		setRecipe(recipeMarkdown)
	}

	async function handleGetRecipeClick() {
		setRecipeShown(true)
		await getRecipe()
	}

	function toggleRecipeShown() {
		setRecipeShown(prevShown => !prevShown)
	}

	function addIngredient(formData) {
		const newIngredient = formData.get('ingredient')
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
				/>
				<button>Add ingredient</button>
			</form>

			{ingredients.length > 0 && (
				<IngredientsList
					ingredients={ingredients}
					toggleRecipeShown={toggleRecipeShown}
				/>
			)}

			{recipeShown && <ClaudeRecipe recipe={recipe} />}
		</main>
	)
}

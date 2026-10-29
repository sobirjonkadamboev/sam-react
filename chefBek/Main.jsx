import React from 'react'
export default function Main() {
	const [ingredients, setIngredients] = React.useState([])

	const ingredientsListItems = ingredients.map(ingredients => (
		<li key={ingredients}>{ingredients}</li>
	))

	function addIngredient(formData) {
		const newIngredient = formData.get('ingredient')

		setIngredients(prevIngredients => [...prevIngredients, newIngredient])
	}
	return (
		<main>
			<form action={addIngredient} className='add-ingredient-form'>
				<input
					type='text'
					aria-label='Add ingredients'
					placeholder='e.g. chicken soup'
					name='ingredient'
				/>
				<button>Add ingredients</button>
			</form>
			<ul>{ingredientsListItems}</ul>
			<textarea></textarea>
		</main>
	)
}

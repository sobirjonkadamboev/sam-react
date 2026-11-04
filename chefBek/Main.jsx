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
			{ingredients.length > 0 && (
				<section>
					<h2>Ingredients on hand:</h2>
					<ul className='ingredients-list' aria-live='polite'>
						{ingredientsListItems}
					</ul>
					<div className='get-recipe-container'>
						<div>
							<h3>Ready for a recipe?</h3>
							<p>Generate a recipe from your list of ingredients.</p>
						</div>
						<button>Get a recipe</button>
					</div>
				</section>
			)}
		</main>
	)
}

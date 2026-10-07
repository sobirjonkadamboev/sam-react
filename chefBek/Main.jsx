export default function Main() {
	const ingredients = ['Chicken', 'Oregano', 'Tomato']

	const ingredientsListItems = ingredients.map(ingredients => (
		<li key={ingredients}>{ingredients}</li>
	))

	function submitForm() {
		console.log('Form Submitted')
	}
	return (
		<main>
			<form className='add-ingredient-form'>
				<input
					type='text'
					aria-label='Add ingredients'
					placeholder='e.g. chicken soup'
				/>
				<button>Add ingredients</button>
			</form>
			<ul>{ingredientsListItems}</ul>
		</main>
	)
}

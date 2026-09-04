import './App.css'

const HeaderFunction = () => {
	//har doim komponentlar katta harfda yoziladi
	return <h2>Heading 2 Component</h2>
}

const Submit = () => {
	;<input type='text' placeholder='Enter...'></input>
}

function App() {
	return (
		<div>
			<HeaderFunction />
			<Submit />
		</div>
	)
}

export default App

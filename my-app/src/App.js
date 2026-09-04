import './App.css'

const HeaderFunction = () => {
	//har doim komponentlar katta harfda yoziladi
	return <h2>Heading 2 Component</h2>
}

const SubmitBtn = () => {
	return <input type='text' placeholder='Enter...' />
}

function App() {
	return (
		<div>
			<HeaderFunction />
			<SubmitBtn />
		</div>
	)
}

export default App

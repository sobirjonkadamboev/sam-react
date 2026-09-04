import './App.css'

const HeaderFunction = () => {
	const text = 'Heading 2'
	//har doim komponentlar katta harfda yoziladi
	return <h2>{text}</h2>
}

const SubmitBtn = () => {
	return <input type='text' placeholder='Enter...' />
}

const ClickBTN = () => {
	return <button>Click</button>
}

function App() {
	return (
		<div className='App'>
			<HeaderFunction />
			<SubmitBtn />
			<ClickBTN />
		</div>
	)
}

export default App

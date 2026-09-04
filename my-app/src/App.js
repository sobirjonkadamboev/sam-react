import './App.css'

const HeaderFunction = () => {
	const text = 'Heading 2'
	//har doim komponentlar katta harfda yoziladi
	return (
	<h2>{text}</h2>
	<p>
	</p>
)
}

const SubmitBtn = () => {
	return <input type='text' placeholder='Enter...' />
}

const ClickBTN = () => {
	const user = true
	const log = 'login'
	return <button>{user ? 'logout' : log}</button>
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

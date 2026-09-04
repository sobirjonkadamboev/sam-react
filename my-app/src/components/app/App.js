import './App.css'

//har doim komponentlar katta harfda yoziladi
//funksiyalar kichkina harfda yoziladi

const HeaderFunction = () => {
	const getText = text => {
		return (
			<div>
				<h2>{text}</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
					velit?
				</p>
			</div>
		)
	}
	return <div>{getText('Sobirjon')}</div>
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

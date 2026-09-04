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

function App() {
	return (
		<div className='App'>
			<HeaderFunction />
		</div>
	)
}

export default App

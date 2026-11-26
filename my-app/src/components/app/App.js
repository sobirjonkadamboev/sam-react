import ClickBTN from '../button/button'
import HeaderFunction from '../header/header'
import SubmitBtn from '../submitField/submit'

import './App.css'

//har doim komponentlar katta harfda yoziladi
//funksiyalar kichkina harfda yoziladi

;<div>
	<h1>slaom</h1>
</div>
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

import ReactDOM from 'react-dom/client'
import './index.css'

//const element = <h1>Heading Element</h1>

const text = 'Hi, AI'

const el = (
	<div>
		<h1 className='heading'>Heading 1</h1>
		<h2>{text}</h2>
		<input type='text' />
		<button>Click</button>
	</div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(el)

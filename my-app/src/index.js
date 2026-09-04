import ReactDOM from 'react-dom/client'
import './index.css'

const element = <h1>Heading Element</h1>

const el = (
	<div>
		<h1>Heading 1</h1>
		<input type='text' />
		<button>Button</button>
	</div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(el)

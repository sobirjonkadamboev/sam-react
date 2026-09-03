import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const el = <h1>Heading element</h1>
console.dir(el)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)

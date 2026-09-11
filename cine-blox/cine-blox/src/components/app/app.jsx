const User = props => {
	console.log(props)
	return (
		<div>
			<h1>My name is Sobirjon</h1>
			<a href='youtube.com'>YouTube channel</a>
		</div>
	)
}
const App = () => {
	return (
		<div>
			<User firstname='Sobirjon' lastname='Kadamboev' link='youtube.com' />
		</div>
	)
}

export default App

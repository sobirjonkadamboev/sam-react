const User = props => {
	console.log(props)
	return (
		<div>
			<h1>
				My full name is {props.firstname} {props.lastname}
			</h1>
			<a href={props.link}>YouTube channel</a>
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

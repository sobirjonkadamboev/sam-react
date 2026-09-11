const User = props => {
	console.log(props)
	return (
		<div>
			<h1>
				My full name is {props.firstname} {props.lastname}
			</h1>
			<a href={props.link}>Social Media</a>
		</div>
	)
}
const App = () => {
	return (
		<div>
			<User
				firstname='Sobirjon'
				lastname='Kadamboev'
				link='https://youtube.com'
			/>
			<User
				firstname='Ali'
				lastname='Akhmedov'
				link='https://t.me/sobirjon_kadamboev'
			/>
		</div>
	)
}

export default App

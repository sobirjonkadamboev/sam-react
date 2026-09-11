import './movie-list-item.css'

const MovieListItem = ({ name, viewers }) => {
	console.log(name, viewers)

	return (
		<li className='list-group-item d-flex justify-content-between'>
			<span className='list-group-item-label'>Spiderman: Brand-new Day</span>
			<input
				type='number'
				className='list-group-item-input'
				defaultValue='247'
			/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' className='btn-cookie btn-sm'>
					<i className='fa-solid fa-cookie'></i>
				</button>
				<button type='button' className='btn-trash btn-sm'>
					<i className='fa-solid fa-trash'></i>
				</button>
				<i className='fa-solid fa-star'></i>
			</div>
		</li>
	)
}

export default MovieListItem

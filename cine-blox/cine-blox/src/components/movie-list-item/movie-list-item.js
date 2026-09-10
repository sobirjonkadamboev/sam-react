const MovieListItem = () => {
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
					<i className='fas fa-cookie'></i>
				</button>
			</div>
		</li>
	)
}

export default MovieListItem

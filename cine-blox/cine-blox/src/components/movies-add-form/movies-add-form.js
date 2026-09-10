import './movies-add-form.css'

const MoviesAddForm = () => {
	return (
		<div className='movies-add-form'>
			<h3>Add New Movie</h3>
			<form className='add-form d-flex'>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='Movie Name?'
				/>
				<input
					type='number'
					className='form-control new-post-label'
					placeholder='Watched?'
				/>
				<button type='submit' className='btn btn-outline-dark'></button>
			</form>
		</div>
	)
}

export default MoviesAddForm

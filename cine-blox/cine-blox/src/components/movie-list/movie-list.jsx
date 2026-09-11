import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'

const MovieList = () => {
	return (
		<div className='movie-list'>
			<MovieListItem name={data[0].name} viewers={107} />
			<MovieListItem name='Avengers: Dooms Day' viewers={357} />
			<MovieListItem name='Dune Series' viewers={1448} />
			<MovieListItem name='Interstellar' viewers={32505} />
		</div>
	)
}

export default MovieList

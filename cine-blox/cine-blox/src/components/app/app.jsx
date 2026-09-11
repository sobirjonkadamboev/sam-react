//jsx'da object qo'shilmaydi

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import '../app/app.css'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'

const App = () => {
	const data = [
		{ name: 'Spiderman: Brand-new Day', viewers: 107, favourite: false },
		{ name: 'Avengers: Dooms Day', viewers: 357, favourite: false },
		{ name: 'Dune Series', viewers: 1448, favourite: false },
		{ name: 'Interstellar', viewers: 32505, favourite: false },
	]
	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App

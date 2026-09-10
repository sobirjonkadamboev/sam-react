import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import '../app/app.css'
import MovieList from '../movie-list/movie-list'
import SearchPanel from '../search-panel/search-panel'

const App = () => {
	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList />
			</div>
		</div>
	)
}

export default App

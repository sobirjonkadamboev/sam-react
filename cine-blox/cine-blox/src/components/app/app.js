import '../app/app.css'

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'

export const App = () => {
	return (
		<div className='app'>
			<div className='content'>
				<AppInfo />

				<SearchPanel />
				<AppFilter />
			</div>
		</div>
	)
}

export default App

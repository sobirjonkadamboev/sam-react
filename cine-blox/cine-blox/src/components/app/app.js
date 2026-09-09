import { AppInfo } from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'

export const app = () => {
	return (
		<div>
			<div>
				<AppInfo />
				<div>
					<SearchPanel />
				</div>
			</div>
		</div>
	)
}

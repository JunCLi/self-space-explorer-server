import { createStackNavigator } from 'react-navigation-stack'

import Find from '../../screens/app/find/Find'
import Filter from '../../screens/app/find/filter/FilterFind'
import ViewCaregiver from '../../screens/app/viewCaregiver/ViewCaregiver'

const FindStack = createStackNavigator({
	Find: {
		screen: Find,
		navigationOptions: () => ({
			title: 'Find'
		})
	},

	Filter: {
		screen: Filter,
		navigationOptions: () => ({
			title: 'Filter'
		})
	},

	ViewCaregiver: {
		screen: ViewCaregiver,
		navigationOptions: ({ navigation }) => ({
			title: `${navigation.state.params.userDetails.firstName} ${navigation.state.params.userDetails.lastName}`,
			
		})
	}
}, {
	initialRouteName: 'Find',
})

export default FindStack
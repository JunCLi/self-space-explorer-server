import { createStackNavigator } from 'react-navigation-stack'

import FindJob from '../../screens/app/find/findJob/FindJob'
import Filter from '../../screens/app/find/filter/FilterFind'
import ViewCaregiver from '../../screens/app/viewCaregiver/ViewCaregiver'
import Conversation from '../../screens/app/messages/conversation/Conversation'

const FindJobStack = createStackNavigator({
	Find: {
		screen: FindJob,
		navigationOptions: () => ({
			title: 'Find'
		})
	},

	// Filter: {
	// 	screen: Filter,
	// 	navigationOptions: () => ({
	// 		title: 'Filter'
	// 	})
	// },

	// ViewCaregiver: {
	// 	screen: ViewCaregiver,
	// 	navigationOptions: ({ navigation }) => ({
	// 		title: `${navigation.state.params.userDetails.firstName} ${navigation.state.params.userDetails.lastName}`,
			
	// 	})
	// },

	// InFindConversation: {
	// 	screen: Conversation,
	// 	navigationOptions: ({ navigation }) => ({
	// 		title: navigation.state.params
	// 			? `${navigation.state.params.recipient.firstName} ${navigation.state.params.recipient.lastName}`
	// 			: 'Chat',
	// 	})
	// }
}, {
	initialRouteName: 'Find',
})

export default FindJobStack
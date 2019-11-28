import { createStackNavigator } from 'react-navigation-stack'

import JobBoard from '../../screens/app/jobBoard/JobBoard'
import Overview from '../../screens/app/createJob/Overview'
import BasicInformation from '../../screens/app/createJob/basicInformation/BasicInformation'

const FindStack = createStackNavigator({
	JobBoard: {
		screen: JobBoard,
		navigationOptions: () => ({
			title: 'Job Board'
		})
	},

	CreateJobOverview: {
		screen: Overview,
		navigationOptions: () => ({
			title: 'Overview'
		})
	},

	BasicInformation: {
		screen: BasicInformation,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},
}, {
	initialRouteName: 'JobBoard',
})

export default FindStack
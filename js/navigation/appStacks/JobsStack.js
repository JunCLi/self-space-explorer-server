import { createStackNavigator } from 'react-navigation-stack'

import JobBoard from '../../screens/app/jobBoard/JobBoard'
import Overview from '../../screens/app/createJob/Overview'
import BasicInformation from '../../screens/app/createJob/basicInformation/BasicInformation'
import ServiceDetails from '../../screens/app/createJob/serviceDetails/ServiceDetails'
import SeniorDetails from '../../screens/app/createJob/seniorDetails/SeniorDetails'
import HouseDetails from '../../screens/app/createJob/houseDetails/HouseDetails'
import CaregiverPreferences from '../../screens/app/createJob/caregiverPreference/CaregiverPreferences'

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

	ServiceDetails: {
		screen: ServiceDetails,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	SeniorDetails: {
		screen: SeniorDetails,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	HouseDetails: {
		screen: HouseDetails,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	CaregiverPreferences: {
		screen: CaregiverPreferences,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},


}, {
	initialRouteName: 'JobBoard',
})

export default FindStack
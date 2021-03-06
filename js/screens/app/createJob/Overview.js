import React, { useState, useEffect } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM_TITLE, GET_JOB_FORM_POSITION, GET_JOB_FORM } from '../../../graphql/queries/createJobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Icon, Image, ListItem } from 'react-native-elements'
import { styles } from './styles'

const Overview = props => {
	const { data } = useQuery(GET_JOB_FORM_POSITION)
	const { data: testData } = useQuery(GET_JOB_FORM)
	const { data: jobTitleData } = useQuery(GET_JOB_FORM_TITLE)
	const { title } = jobTitleData.getJobForm.basicInformation
	const { getJobForm } = data
	const navParams = props.navigation.state.params

	const [refresh, setRefresh ] = useState(false)
	
	const sections = [
		{
			title: 'Basic Information',
			value: 'basicInformation',
			path: 'BasicInformation',
		},
		{
			title: 'Service Details',
			value: 'serviceDetails',
			path: 'ServiceDetails',
		},
		{
			title: 'Senior Details',
			value: 'seniorDetails',
			path: 'SelectSeniorProfile',
		},
		{
			title: 'House Details',
			value: 'houseDetails',
			path: 'HouseDetails',
		},
		{
			title: 'Caregiver Preferences',
			value: 'caregiverPreferences',
			path: 'CaregiverPreferences',
		},
	]

	const handleNextSection = () => {
		const uncompletedSections = sections.filter(section => !getJobForm[section.value].position.completed)

		uncompletedSections.length
			? goToStep(uncompletedSections[0].path)
			: goToStep('SubmitJobOverview', { title: title })
	}

	const goToStep = (destination, stateParams) => {
		props.navigation.navigate(destination, stateParams)
	}

	useEffect(() => {
		if (navParams && navParams.refetch) {
			setRefresh(!refresh)
		}
	}, [navParams])

	return (
		<>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<View style={styles.introContainer}>
						<Text style={styles.title}>Let's create a job post</Text>
						<Text style={styles.description}>A great connection is important to finding a good fit. To help us find the best care for your loved one, we’ll ask a series of questions to understand your family’s needs.</Text>
					</View>

					<View style={styles.stepsContainer}>
						{sections.map((section, index) => (
							<TouchableOpacity key={index} onPress={() => goToStep(section.path)}>
								<View style={styles.stepContainer}>
									{getJobForm[section.value].position.completed 
										? <Avatar
												size={35}
												icon={{ type:'font-awesome-5', name:'check', size: 25}}
												overlayContainerStyle={styles.stepCompletedCircle}
												rounded
											/>
										: <Avatar
												size={35}
												title={`${index + 1}`}
												overlayContainerStyle={styles.stepNumberCircle}
												titleStyle={styles.stepNumber}
												rounded
											/>
									}
									<Text style={styles.stepText}>{section.title}</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
			<Button
				title={getJobForm.formStarted ? 'Continue' : 'Get started'}
				onPress={handleNextSection}
				buttonStyle={styles.submitButton}
				titleStyle={styles.submitButtonText}
			/>
		</>
	)
}

export default Overview
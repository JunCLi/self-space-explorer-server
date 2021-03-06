// export default createjobStore = {
// 	getJobForm: {
// 		formStarted: false,
// 		basicInformation: {
// 			position: {
// 				completed: false,
// 				step: 1,
// 				totalSteps: 4,
// 				__typename: 'JobPosition',
// 			},
// 			title: '',
// 			startDate: new Date().toISOString(),
// 			endDate: null,
// 			location: {
// 				address: '',
// 				city: '',
// 				province: '',
// 				postalCode: '',
// 				__typename: 'Location',
// 			},
// 			hourlyRate: 14,
// 			__typename: 'BasicInformation',
// 		},

// 		serviceDetails: {
// 			position: {
// 				completed: false,
// 				step: 1,
// 				totalSteps: 2,
// 				__typename: 'JobPosition',
// 			},
// 			services: [],
// 			householdNeeds: [],
// 			__typename: 'ServiceDetails',
// 		},

// 		seniorDetails: {
// 			position: {
// 				completed: false,
// 				step: 1,
// 				totalSteps: 8,
// 				__typename: 'JobPosition',
// 			},
// 			seniorId: '',
// 			name: '',
// 			gender: '',
// 			birthdate: new Date('1960-01-01T23:35:16.000Z').toISOString(),
// 			relation: '',
// 			bio: '',
// 			medicalConditions: '',
// 			language: ['English'],
// 			picture: '',
// 			__typename: 'SeniorDetails',
// 		},

// 		houseDetails: {
// 			position: {
// 				completed: false,
// 				step: 1,
// 				totalSteps: 1,
// 				__typename: 'JobPosition',
// 			},
// 			cigarette: null,
// 			pets: null,
// 			cannabis: null,
// 			__typename: 'HouseDetails',
// 		},

// 		caregiverPreferences: {
// 			position: {
// 				completed: false,
// 				step: 1,
// 				totalSteps: 2,
// 				__typename: 'JobPosition',
// 			},
// 			availability: null,
// 			genderPref: null,
// 			driversLicense: null,
// 			__typename: 'CaregiverPreferences',
// 		},
// 		additionalInformation: '',
// 		__typename: 'JobForm'
// 	}
// }

// completed form for testing purposes
export default createjobStore = {
	getJobForm: {
		formStarted: true,
		basicInformation: {
			position: {
				completed: true,
				step: 1,
				totalSteps: 4,
				__typename: 'JobPosition',
			},
			title: 'Neighbor caretaking',
			startDate: '2019-12-05',
			endDate: '2019-12-22',
			location: {
				address: '1234 Avocado Way',
				city: 'Toronto',
				province: 'Ontario',
				postalCode: 'A1B 2C3',
				__typename: 'Location',
			},
			hourlyRate: 21,
			__typename: 'BasicInformation',
		},

		serviceDetails: {
			position: {
				completed: true,
				step: 1,
				totalSteps: 2,
				__typename: 'JobPosition',
			},
			services: ['companionship', 'dressing', 'grooming', 'mobility'],
			householdNeeds: ['housekeeping', 'mealPrep'],
			__typename: 'ServiceDetails',
		},

		seniorDetails: {
			position: {
				completed: true,
				step: 1,
				totalSteps: 8,
				__typename: 'JobPosition',
			},
			seniorId: null,
			name: 'Margaret',
			gender: 'female',
			birthdate: '1945-07-22T22:35:16.000Z',
			relation: 'Neighbor',
			bio: 'some bio stuff',
			medicalConditions: 'High blood pressure',
			language: ['English', 'French', 'Japanese'],
			picture: '',
			__typename: 'SeniorDetails',
		},

		houseDetails: {
			position: {
				completed: true,
				step: 1,
				totalSteps: 1,
				__typename: 'JobPosition',
			},
			cigarette: false,
			pets: true,
			cannabis: false,
			__typename: 'HouseDetails',
		},

		caregiverPreferences: {
			position: {
				completed: true,
				step: 1,
				totalSteps: 2,
				__typename: 'JobPosition',
			},
			availability: 'liveout',
			genderPref: 'nopref',
			driversLicense: true,
			__typename: 'CaregiverPreferences',
		},
		additionalInformation: '',
		__typename: 'JobForm'
	}
}
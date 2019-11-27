import gql from 'graphql-tag'

export default jobSchema = gql`

	enum FormDirection {
		next
		back
	}

	enum Section {
		basicInformation
		serviceDetails
		seniorDetails
		houseDetails
		caregiverPreferences
	}

	enum Services {
		bathing
		dressing
		companionship
		appointments
		grooming
		feeding
		driving
		mobility
	}

	enum HouseholdNeeds {
		errands
		housekeeping
		shoppping
		mealPrep
		laundry
	}

	extend type Query {
		getJobForm: JobForm
	}

	type JobForm {
		basicInformation: BasicInformation
		serviceDetails: ServiceDetails
		seniorDetails: SeniorDetails
		houseDetails: HouseDetails
		caregiverPreferences: CaregiverPreferences
		additionalInformation: String
	}

	type Position {
		completed: Boolean
		step: Int
		totalSteps: Int
	}

	type BasicInformation {
		position: Position
		title: String
		startDate: Date
		endDate: Date,
		location: Location
		hourlyRate: Int
	}

	type Location {
		address: String
		city: String
		province: String
		postalCode: String
	}

	type ServiceDetails {
		position: Position
		services: Services
		householdNeeds: HouseholdNeeds
	}

	type SeniorDetails {
		position: Position
		name: String
		gender: Gender
		birthdate: Date
		relation: String
		bio: String
		medicalConditions: String
		language: String
		picture: String
	}

	type HouseDetails {
		position: Position
		cigarette: Boolean
		pets: Boolean
		cannabis: Boolean
	}

	type CaregiverPreferences {
		position: Position
		availability: Availability
		gender: Gender
		driversLicense: Boolean
		additionalInformation: String
	}

	extend type Mutaion {
		changeFormPosition(input: ChangeFormPositionObject): Placeholder
	}

	input ChangeFormPositionObject {
		section: Section
		direction: FormDirection!
		completed: Boolean
	}
	
	type Placeholder {
		Message: String
	}
`
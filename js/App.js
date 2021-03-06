import React from 'react'

import { ApolloProvider } from '@apollo/react-hooks'
import apolloclient from './graphql/apolloclient'

import AppNavigator from './navigation/AppNavigator'

const App = () => {
	return (
		<ApolloProvider client={apolloclient}>
			<AppNavigator />
		</ApolloProvider>
	)
}

export default App
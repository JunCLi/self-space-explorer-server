import { StyleSheet } from 'react-native'

import { margin, baseFont, screenHeight, screenWidth } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'

const fontStyles = StyleSheet.create({
	question: {
		color: font.blue,
		fontFamily: fontType.gothamBold,
		fontSize: baseFont * 1.25,
	},

	input: {
		color: font.darkerGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.4,
	},
})

export const sharedStyles = StyleSheet.create({
	questionContainer: {
		marginVertical: margin.vertical * 1.5,
	},

	question: {
		...fontStyles.question
	},

	inputContainer: {
		paddingHorizontal: 0,
	},

	input: {
		...fontStyles.input,
	}
})
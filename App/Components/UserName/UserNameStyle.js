import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  regular: {
    ...ApplicationStyles.screen.contents,
    fontSize: Fonts.size.regular,
    color: Colors.text,
  },
  small: {
    ...ApplicationStyles.screen.contents,
    fontSize: Fonts.size.small,
    color: Colors.subText,
  },
  link: {
    fontSize: Fonts.size.small,
    color: Colors.primary,
  },
  nameInputs: {
    ...ApplicationStyles.screen.contents,
  }
})

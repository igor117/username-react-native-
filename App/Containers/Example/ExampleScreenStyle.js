import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingTop: 38,
    flex: 1,    
    position: 'relative'
  },
  keyboardContainer: {
    ...ApplicationStyles.screen.container,
  },
  scrollContainer: {
    ...ApplicationStyles.screen.scrollContainer,
  }
})

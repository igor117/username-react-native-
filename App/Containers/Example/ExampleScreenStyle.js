import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: responsiveWidth(5),
    flex: 1,
    alignItems: 'flex-start',    
  },
})

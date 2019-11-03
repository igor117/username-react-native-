import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  closeContainer: {
    ...ApplicationStyles.screen.contents,
    width: '100%',
  },
  close: {
    marginLeft: 'auto',    
  },
  closeIcon: {
     width: Fonts.size.small,
     height: Fonts.size.small,
  }
})

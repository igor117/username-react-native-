import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  closeContainer: {
    width: '100%',    
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
  },

  close: {
    marginLeft: 'auto',    
  },

  closeIcon: {
     width: Fonts.size.small,
     height: Fonts.size.small,
  }
})

import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  inputFields: {
    height: responsiveHeight(6),
    borderBottomColor: Colors.placeHolder,
    borderBottomWidth: responsiveHeight(0.2),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
    fontSize: Fonts.size.medium,
    marginBottom: responsiveHeight(2)
  },
})

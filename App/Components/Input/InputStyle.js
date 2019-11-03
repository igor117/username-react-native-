import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  inputFields: {
    height: 49,
    borderBottomColor: Colors.placeHolder,
    borderBottomWidth: 1,
    paddingLeft: 7,
    paddingRight: 34,
    paddingTop: 8,
    paddingBottom: 13,
    fontSize: Fonts.size.medium,
    marginBottom: 12,
  },
})

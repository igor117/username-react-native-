import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    marginRight: 18,
    marginLeft: 18,
  },
  bold: {
    ...Fonts.style.title,
    marginBottom: 8,    
  },
  small: {
    ...Fonts.style.subTitle,
    marginBottom: 16,    
  },
  link: {
    ...Fonts.style.subTitle,
    color: Colors.primary,
    fontFamily: 'NunitoSans-Bold',
  },
  nameInputs: {    
  }
})

import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  NavBtnContainer: {
    width: '100%',
    padding: responsiveHeight(2),    
  },
  prevBtn: {
    ...ApplicationStyles.screen.NavBtn,
    backgroundColor: Colors.flour,
    marginRight: responsiveWidth(2)
  },
  prevBtnIcon: {
    ...Fonts.style.icon,
    color: Colors.primary
  },
  nextBtn: {
    ...ApplicationStyles.screen.NavBtn,
    backgroundColor: Colors.primary,        
  },
  nextBtnIcon: {
    ...Fonts.style.icon,
    color: Colors.flour       
  },
  NavBtnRight: {
    marginLeft: 'auto',
    flexDirection: 'row'
  }
})

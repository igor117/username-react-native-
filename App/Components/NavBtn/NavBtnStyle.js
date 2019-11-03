import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  NavBtnContainer: {    
    paddingRight: 18,
    position: 'absolute',
    top: -66,
    right: 0,    
  },
  prevBtn: {
    ...ApplicationStyles.screen.NavBtn,
    backgroundColor: Colors.flour,
    marginRight: 8
  },
  prevBtnIcon: {
    ...Fonts.style.icon,
    color: Colors.primary
  },
  nextBtn: {
    ...ApplicationStyles.screen.NavBtn,
    backgroundColor: Colors.primary,
    opacity: 0.5, 
  },
  nextBtnIcon: {
    ...Fonts.style.icon,
    color: Colors.flour       
  },
  NavBtnRight: {    
    flexDirection: 'row',
  }
})

import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  NavBtnContainer: {
    width: '100%',
    paddingTop: 16,    
    paddingBottom: 16,
    paddingRight: 18,
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
    marginLeft: 'auto',
    flexDirection: 'row'
  }
})

import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Helpers from '../../Theme/Helpers'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection : 'row',
    height : responsiveHeight(1),    
  },
  tabBar: {
    ...Helpers.fillRowMain
  },
  tabCircle: {
    width: responsiveWidth(7), 
    height: responsiveWidth(7), 
    borderRadius: responsiveWidth(3.5), 
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallTabCircle: {
    width: responsiveWidth(3), 
    height: responsiveWidth(3), 
    borderRadius: responsiveWidth(1.5), 
    backgroundColor: Colors.subPrimary,
  },
  userIcon: {
    ...Fonts.style.icon,
    color: Colors.flour
  }
})

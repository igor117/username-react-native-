import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import Helpers from '../../Theme/Helpers'

export default StyleSheet.create({
  container: {        
    flex: 1,    
  },
  tabsContainer: {
  },
  tabBar: {
    ...Helpers.fillRowMain
  },
  tabBarcontainer: {
    height: 46,
    position: 'absolute',
  },
  tabCircle: {
    width: 34, 
    height: 34, 
    borderRadius: 17, 
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userIcon: {
    ...Fonts.style.icon,
    color: Colors.flour
  }
})

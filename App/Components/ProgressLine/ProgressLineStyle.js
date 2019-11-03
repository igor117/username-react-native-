import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import Helpers from '../../Theme/Helpers'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

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
    ...ApplicationStyles.screen.icon,
    backgroundColor: Colors.primary,
  },
  userIcon: {
    ...Fonts.style.icon,
    color: Colors.flour
  }
})

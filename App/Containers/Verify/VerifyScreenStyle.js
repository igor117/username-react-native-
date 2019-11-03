import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingTop: 38,
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    ...ApplicationStyles.screen.scrollContainer,
    width: '100%',
    flex: 1,    
  },
  verifyBottomContainer: {
    ...ApplicationStyles.screen.contents,   
    width: '100%',
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  completeButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  completeText: {
    fontFamily: 'NunitoSans-Bold',
    color: Colors.flour,
    fontSize: Fonts.size.regular
  },
  laterButton: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 23,    
    backgroundColor: Colors.flour,
    alignItems: 'center',
    justifyContent: 'center'
  },
  laterText: {
    fontFamily: 'NunitoSans-Bold',
    color: Colors.primary,
    fontSize: Fonts.size.xSmall
  },
})

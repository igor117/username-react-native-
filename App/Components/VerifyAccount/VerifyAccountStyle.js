import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.contents,    
    width: '100%',
    flex: 1,        
  },
  verifyItemContainer: {
    ...ApplicationStyles.verify.itemContainer,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,    
  },
  itemHeaderContainer: {
    ...ApplicationStyles.verify.itemHeaderContainer,
  },
  personalItemContainer: {
    ...ApplicationStyles.verify.itemContainer,    
  },
  disabledItemContainer: {
    ...ApplicationStyles.verify.itemContainer,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  verifyHeadText: {
    ...Fonts.style.headTitle,
  },
  disabledHeadText: {
    ...Fonts.style.headTitle,
    color: Colors.disable,
  },
  verifyIconContainer: {
    ...ApplicationStyles.screen.icon,
    backgroundColor: Colors.primary,
  },
  userIconContainer: {
    ...ApplicationStyles.screen.icon,    
    backgroundColor: Colors.flour,
    borderWidth: 1,
    borderColor: Colors.primary
  },
  disabledIconContainer: {
    ...ApplicationStyles.screen.icon,    
    backgroundColor: Colors.flour,
    borderWidth: 1,
    borderColor: Colors.disable
  },
  shiledIcon: {
    ...Fonts.style.icon,
    color: Colors.flour,
  },
  userIcon: {
    ...Fonts.style.icon,
    color: Colors.primary,
  },
  checkIcon: {
    ...Fonts.style.icon,
    color: Colors.primary,
    fontSize: 12
  },
  disabledIcon: {
    ...Fonts.style.icon,
    color: Colors.disable,    
  },
  labelContainer: {
    ...ApplicationStyles.verify.labelContainer,
  },
  next: {
    color: Colors.primary
  },
  personalText: {
    ...Fonts.style.subTitle,
    paddingTop: 12,
    paddingBottom: 8
  },
  duration: {
    ...Fonts.style.durationTitle,        
  },
})

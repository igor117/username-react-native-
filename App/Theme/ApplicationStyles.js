/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors';

export default {
  screen: {
    container: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1, 
      flexDirection: 'column',
      height: '100%',width: '100%',
    },
    contents: {
      paddingRight: 18,
      paddingLeft: 18,
    },
    icon: {
      width: 34, 
      height: 34, 
      borderRadius: 17, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    NavBtn : {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: Colors.shadow,
      shadowOffset: { width: 1, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    }
  },
  verify: {
    itemContainer: {
      paddingTop: 15.5,
      paddingBottom: 15.5,        
    },
    itemHeaderContainer: {
      flexDirection: 'row',
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 8,
      flex: 1
    }
  }
}

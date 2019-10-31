/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
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
      paddingTop: responsiveHeight(2),
      paddingBottom: responsiveHeight(2),
    },
    NavBtn : {
      width: responsiveWidth(12),
      height: responsiveWidth(12),
      borderRadius: responsiveWidth(6),
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: Colors.normal,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    }
  },
}

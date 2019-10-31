import { responsiveFontSize } from 'react-native-responsive-dimensions'

const size = {
  input: 18,
  regular: responsiveFontSize(5),
  medium: responsiveFontSize(3),
  small: responsiveFontSize(2),
}

const style = {
  icon: {
    fontSize: size.small,
  }
}

export default {
  size,
  style,
}

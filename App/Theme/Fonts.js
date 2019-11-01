import Colors from './Colors'

const size = {
  input: 18,
  regular: 14,
  bold: 28,
  // regular: responsiveFontSize(5),
  medium: 24,
  small: 18,
}

const style = {
  icon: {
    fontSize: size.regular,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: size.bold,
    color: Colors.text,
  },
  subTitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: size.regular,
    color: Colors.subText,
  }
}

export default {
  size,
  style,
}

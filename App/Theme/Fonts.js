import Colors from './Colors'

const size = {
  bold: 28,
  medium: 24,
  small: 18,
  regularBold: 16,
  regular: 14,
  xSmall: 12
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
  headTitle: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: size.regularBold,
    color: Colors.subText,
  },
  durationTitle: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: size.regular,
    color: Colors.subText,
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

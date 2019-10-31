import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Style from './ExampleScreenStyle'
import Close from '../../Components/Close/Close'
import ProgressLine from '../../Components/ProgressLine/ProgressLine'
import NavBtn from '../../Components/NavBtn/NavBtn'


class ExampleScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>        
        <Close />
        <ProgressLine />
        <NavBtn />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)

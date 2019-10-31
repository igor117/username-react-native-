import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Style from './ExampleScreenStyle'
import Close from '../../Components/Close/Close'
import ProgressLine from '../../Components/ProgressLine/ProgressLine'
import NavBtn from '../../Components/NavBtn/NavBtn'


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class ExampleScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={Style.container}>        
        <Close />
        <ProgressLine />
        <NavBtn />
      </View>
    )
  }
  
  onClose = () => {
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

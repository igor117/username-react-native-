import React from 'react'
import { TextInput} from 'react-native'
import { connect } from 'react-redux'
import Style from './InputStyle'

class Input extends React.Component {

  render() {
    const {placeholder, value} = this.props
    return (
      <TextInput
          style={Style.inputFields}
          onChangeText={(text) => this.props.onChangeText(text)}
          value={value}
          placeholder={placeholder}
      />
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
)(Input)

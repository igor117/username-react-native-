import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import close from '../../Assets/Images/close.png'
import { connect } from 'react-redux'
import Style from './CloseStyle'

class Close extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={Style.closeContainer}>
       <TouchableOpacity 
          style={Style.close}
          onPress={this.onClose}
        >
            <Image 
              source={close}
              style={Style.closeIcon}/>
        </TouchableOpacity>
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
)(Close)

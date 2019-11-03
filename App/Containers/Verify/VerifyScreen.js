import React from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Style from './VerifyScreenStyle'
import Close from '../../Components/Close/Close'
import VerifyAccount from '../../Components/VerifyAccount/VerifyAccount'

const VerifyBottom = (
        <View style={Style.verifyBottomContainer}>        
          <TouchableOpacity 
            style={Style.completeButton}            
          >
              <Text style={Style.completeText}> Complete account </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={Style.laterButton}            
          >
              <Text style={Style.laterText}> I’ll do this later </Text>
          </TouchableOpacity>
        </View>
)

class VerifyScreen extends React.Component {
  render() {

    return (
      <View style={Style.container}>        
        <Close />
        <ScrollView 
                  vertical={true} 
                  contentContainerStyle={Style.scrollContainer}
                  > 
          <VerifyAccount />
        </ScrollView>
        {VerifyBottom}
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
)(VerifyScreen)

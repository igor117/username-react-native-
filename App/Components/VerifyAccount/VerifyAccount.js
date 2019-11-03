import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Style from './VerifyAccountStyle'

export default class ProgressLine extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      activeTab : 0
    }
  }
  
  render() {
    return (
      <View style={Style.container}>
        
        <View style={Style.verifyItemContainer}>
          <View style= {Style.itemHeaderContainer}>
            <View style={Style.verifyIconContainer}>
              <Icon name="shield" style={Style.shiledIcon} />
            </View>
            <View style={Style.labelContainer}>
              <Text style={Style.verifyHeadText}> Verify account </Text>
              <Icon name="check" style={Style.checkIcon} />
            </View>
          </View>
        </View>

        <View style={Style.personalItemContainer}>
          <View style= {Style.itemHeaderContainer}>
            <View style={Style.userIconContainer}>
              <Icon name="user" style={Style.userIcon} />
            </View>
            <View style={Style.labelContainer}>
              <Text style={Style.verifyHeadText}> 
                <Text style={Style.next}> Next: </Text>
                Personal info 
              </Text>
            </View>
          </View>
          <View style={Style.personalItemContent}>
            <Text style={Style.personalText}> 
              Now let’s find out a bit about yourself to create & verify your account. Don’t worry it only takes. 
            </Text>
            <Text style={Style.duration}>
              Duration: 2miuns
            </Text>
          </View>
        </View>

        <View style={Style.disabledItemContainer}>
          <View style= {Style.itemHeaderContainer}>
            <View style={Style.disabledIconContainer}>
              <EvilIcon name="location" style={Style.disabledIcon} />
            </View>
            <View style={Style.labelContainer}>
              <Text style={Style.disabledHeadText}> Business info </Text>
            </View>
          </View>
        </View>

        <View style={Style.disabledItemContainer}>
          <View style= {Style.itemHeaderContainer}>
            <View style={Style.disabledIconContainer}>
              <EvilIcon name="location" style={Style.disabledIcon} />
            </View>
            <View style={Style.labelContainer}>
              <Text style={Style.disabledHeadText}> Confirm your Identity </Text>
            </View>
          </View>
        </View>

        <View style={Style.disabledItemContainer}>
          <View style= {Style.itemHeaderContainer}>
            <View style={Style.disabledIconContainer}>
              <EvilIcon name="credit-card" style={Style.disabledIcon} />
            </View>
            <View style={Style.labelContainer}>
              <Text style={Style.disabledHeadText}> Add a bank Account </Text>
            </View>
          </View>
        </View> 
      </View>
    )
  }
}

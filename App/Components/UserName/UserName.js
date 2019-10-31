import React from 'react'
import { Dimensions, Text, View  } from 'react-native'
import { connect } from 'react-redux'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import Style from './UserNameStyle'
import Input from '../Input/Input'


const SCREEN_WIDTH = Dimensions.get('window').width - responsiveWidth(10);

class UserName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName : '',
      lastName : '',
    }
  }

  render() {
    return (
      <View style={[Style.container, {width: SCREEN_WIDTH}]}>
        <View>
          <Text style={Style.regular}>What's your {"\n"}name?</Text>
          <View>
            <Text style={Style.small}>
              Your name will not be shared with your customers.
              <Text style={Style.link}> Why? </Text>              
            </Text>            
          </View>
        </View>

        <View style={Style.nameInputs}>
          <Input 
            onChangeText={(text) => this.setState({firstName: text})}
            value={this.state.firstName}
            placeholder='First name (required)'
            />
          <Input 
            onChangeText={(text) =>  this.setState({lastName: text})}
            value={this.state.lastName}
            placeholder='Last name'
            />
        </View>
      </View>
    )
  }
}

UserName.propTypes = {
}

const mapStateToProps = (state) => ({ 
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserName)

import React from 'react'
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native'
import { connect } from 'react-redux'
import Style from './ExampleScreenStyle'
import Close from '../../Components/Close/Close'
import ProgressLine from '../../Components/ProgressLine/ProgressLine'
import NavBtn from '../../Components/NavBtn/NavBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ExampleScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>        
        <Close />
        <KeyboardAwareScrollView              
              resetScrollToCoords={{ x: 0, y: 0 }}
              contentContainerStyle={Style.keyboardContainer}
              scrollEnabled={false}
              >
          <ScrollView 
                    vertical={true} 
                    contentContainerStyle={Style.scrollContainer}
                    > 
            <ProgressLine />
          </ScrollView>
        </KeyboardAwareScrollView>
        <KeyboardAvoidingView
            behavior={'position'}
            keyboardVerticalOffset={0}
            style={{flex: 1, width: '100%'}}
            >
            <NavBtn />
          </KeyboardAvoidingView>
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

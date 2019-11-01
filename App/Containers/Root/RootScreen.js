import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { ScrollView } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup()
  }

  render() {
    return (
      <KeyboardAwareScrollView              
              resetScrollToCoords={{ x: 0, y: 0 }}
              contentContainerStyle={styles.container}
              scrollEnabled={false}
              >
              <ScrollView 
                  vertical={true} 
                  contentContainerStyle={styles.scrollContainer}
                  > 
                  <AppNavigator                    
                    ref={(navigatorRef) => {
                      NavigationService.setTopLevelNavigator(navigatorRef)
                    }}
                  />
              </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)

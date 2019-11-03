import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
import Style from './NavBtnStyle'

class Close extends React.Component {

  render() {
    return (
      <View style={Style.NavBtnContainer}>
        <View style={Style.NavBtnRight}>
          <TouchableOpacity 
              style={Style.prevBtn}
              onPress={this.onNext}
          >
                <Icon name="arrow-left"  style={Style.prevBtnIcon}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={Style.nextBtn}
              onPress={this.onPrev}
            >
                <Icon name="arrow-right" style={Style.nextBtnIcon}/>
            </TouchableOpacity>
        </View>
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

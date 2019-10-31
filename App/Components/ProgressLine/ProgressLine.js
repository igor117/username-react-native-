import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome'
import UserName from '../UserName/UserName'
import Style from './ProgressLineStyle'

const SCREEN_WIDTH = Dimensions.get('window').width - responsiveWidth(10);

const SCREENS = [
  <UserName />,
  <></>,
  <></>
]

const ActiveItem = () => (
  <View style={Style.tabCircle}>
    <Icon name="user" style={Style.userIcon} />
  </View>
)

const InActiveItem = () => (
  <View style={Style.smallTabCircle}></View>
)

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
        <View>
          <Pagination
            containerStyle={[Style.tabsContainer, {width: responsiveWidth(10 * SCREENS.length)}]}
            renderDots={ activeIndex => (
              SCREENS.map((screen, i) => (
                <TouchableOpacity
                  style={Style.tabBar}
                  key={ i }
                  onPress={() => {
                    this.carouselRef._snapToItem(this.carouselRef._getPositionIndex(i));
                  }}
                >
                  {
                    activeIndex === i ?
                      <ActiveItem /> 
                      : <InActiveItem />
                  }                  
                </TouchableOpacity>
              ))
            )}
            activeDotIndex={ this.state.activeTab }
            dotsLength={ SCREENS.length }
          />
        </View>

        <Carousel
          ref={ ref => this.carouselRef = ref }
          data={ SCREENS }
          renderItem={ ({ item }) => item }          
          onSnapToItem={ i => this.setState({ activeTab : i }) }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH }
          slideStyle={{ width : SCREEN_WIDTH }}
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }        
        />
      </View>
    )
  }
}
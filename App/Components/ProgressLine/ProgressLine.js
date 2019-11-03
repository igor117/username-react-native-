import React, { Component } from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Feather'
import UserName from '../UserName/UserName'
import Style from './ProgressLineStyle'
import posed from 'react-native-pose'

const SCREEN_WIDTH = Dimensions.get('window').width;

const SCREENS = [
  <UserName />,
  <UserName />,
  <UserName />,
]

const ActiveItem = posed.View({
  visible: { opacity: 1, scale: 1},
  hidden: { opacity: 0.2, scale: 0.3}
});

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
        <View style={Style.tabBarcontainer}>
          <Pagination
            containerStyle={[Style.tabsContainer, {width: 45 * SCREENS.length}]}
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
                      <ActiveItem style={Style.tabCircle} pose={activeIndex === i ? 'visible' : 'hidden'}>
                        <View >
                            {activeIndex === i ?
                              <Icon name="user" style={Style.userIcon} />
                              : null}
                          </View>
                      </ActiveItem>                   
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
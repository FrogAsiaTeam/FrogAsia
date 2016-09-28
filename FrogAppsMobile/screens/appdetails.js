'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Rating from '../components/rating.js';
import ScrollViewApp from '../components/scrollview.js';
import Icon from 'react-native-vector-icons/Ionicons';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');
var ProgressBar = require('ProgressBarAndroid');

var THUMBS = [
   require('../images/scroll_app_1.jpg'),
   require('../images/scroll_app_2.jpg'),
   require('../images/scroll_app_3.jpg'),
   require('../images/scroll_app_4.jpg')
];

class AppDetail extends Component{
    render(){
      var navigator = this.props.navigator;
      var leftButtonConfig = {
          title: <Icon name="ios-arrow-back" size={30} color="#ffffff" />,
          handler: () => {
              navigator.pop({
                  id: 'AppList',
              })
          },
      };
      var titleConfig = {
          title: <Text style={styles.textColor}>Frog Application Detail</Text>,
      };
        return(
            <View style={styles.container}>
                 <View style={styles.navigator}>
                    <NavigationBar
                         style={styles.navigator}
                         title={titleConfig}
                         leftButton={leftButtonConfig}/>
                 </View>
                 <ScrollView>
                   <View style={styles.detailContainer}>
                        <View style={styles.headDetail}>
                          <View style={styles.imgDetailContainer}>
                              <Image style={styles.imgDetail} source={this.props.data.img}/>
                          </View>
                          <View style={styles.infoDetailContainer}>

                              <Text style={styles.titleDetail}>{this.props.data.title}</Text>
                              <View style={styles.downloadAndRating}>
                                  <View style= {styles.ratingForDetailContainer}>

                                    <Text>{this.props.data.downloadCount}</Text>
                                    <View style={styles.rateContainer}>
                                      <View style={styles.detailRate}>
                                          <Rating disabled={true} rating={this.props.data.starcount} starSize= {11} starColor= {'gray'}/>
                                      </View>
                                      <Text>{this.props.data.starcount} (611376)</Text>
                                    </View>

                                  </View>
                                  <View style= {styles.btnContainer}>
                                    <TouchableOpacity style={"true" !== this.props.data.isinstall ? styles.btnInstallAppDetail : styles.btnOpenAppDetail}>
                                      <Text style={"true" !== this.props.data.isinstall ? styles.btnTextInstallAppDetail :  styles.btnTextOpenAppDetail}>{"true" !== this.props.data.isinstall ? "INSTALL":"  OPEN  "}</Text>
                                    </TouchableOpacity>
                                  </View>
                              </View>

                          </View>

                        </View>
                        <View style={styles.contentApplication}>
                          <Text style={styles.describeApplication}>{this.props.data.content}</Text>
                        </View>
                        <View style={styles.scrollViewImgAtPageDetail}>
                          <ScrollViewApp thumbs={THUMBS} />
                        </View>

                        <View style={styles.commentsContainer}>
                          <Text style={styles.labelComment}>Comments</Text>
                          <View style={{flexDirection:'row'}}>
                              <Text style={styles.rateNumber}>4.4</Text>
                              <View style={styles.rateChart}>
                                 <Rating disabled={false} rating={this.props.data.starcount} starSize= {20} starColor= {'gold'}/>
                                 <Text>(611376)</Text>
                              </View>
                              <View style={{flex: 0.4,justifyContent:'center'}}>
                              <ProgressBar  color="green" styleAttr='Horizontal' progress={0.8}
                              indeterminate={false} />
                              <ProgressBar  color="olive " styleAttr='Horizontal' progress={0.6}
                              indeterminate={false} />
                              <ProgressBar  color="yellow" styleAttr='Horizontal' progress={0.5}
                              indeterminate={false} />
                              <ProgressBar  color="orange" styleAttr='Horizontal' progress={0.4}
                              indeterminate={false} />
                              <ProgressBar  color="maroon " styleAttr='Horizontal' progress={0.1}
                              indeterminate={false} />
                              </View>
                          </View>
                        </View>

                   </View>
                </ScrollView>
            </View>
        );
    }
}

module.exports = AppDetail;

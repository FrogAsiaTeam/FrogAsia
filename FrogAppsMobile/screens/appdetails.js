'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Rating from '../components/rating.js'
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');

class AppDetail extends Component{
    render(){
      var navigator = this.props.navigator;
      var leftButtonConfig = {
          title: 'Back',
          handler: () => {
              navigator.pop({
                  id: 'AppList',
              })
          },
      };
      var titleConfig = {
          title: 'Frog Apps Detail',
      };
        return(
            <View style={styles.container}>
                 <View style={styles.navigator}>
                    <NavigationBar
                         style={styles.navigator}
                         title={titleConfig}
                         leftButton={leftButtonConfig}/>
                 </View>
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
                                  <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>INSTALL</Text>
                                  </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                      </View>
                 </View>

            </View>
        );
    }
}

module.exports = AppDetail;

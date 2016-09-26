import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';
import StarRating from 'react-native-star-rating';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');

export default class ListViewApp extends Component{

  constructor(props){
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      this.state = {
        dataSource: this.ds.cloneWithRows(this.props.mydata)
      }
  }

  render() {
    return (
            <View style={styles.listViewContainer}>
              <ListView
                style={{flex:1}}
                dataSource={this.state.dataSource}
                renderRow = {(property)=>{
                  var _iconInstall = -1;
                  if(property.install.length>0){
                    _iconInstall = require('../images/checked.png');
                  }
                  return(
                    <TouchableOpacity onPress={()=>{
                      this.props.navigator.push({
                          id: 'AppDetail',
                          passProps:{dataItem:property}
                      })
                    }} underlayColor='gray'>

                      <View style={styles.itemContainer}>
                          <Image style={styles.thumb} source={property.img} />
                          <View style={styles.textContainer}>
                              <Text style={styles.title}>{property.title}</Text>
                              <Text style={styles.content}>{property.content}</Text>
                              <View style={styles.moreContainer}>
                                <View style={styles.rating}>
                                    <StarRating
                                      disabled={true}
                                      emptyStar={'ios-star-outline'}
                                      fullStar={'ios-star'}
                                      halfStar={'ios-star-half'}
                                      iconSet={'Ionicons'}
                                      maxStars={5}
                                      rating={property.starcount}
                                      selectedStar ={()=>{}}
                                      starColor={'red'}
                                      starSize={11}
                                    />
                                </View>
                                <View style={styles.textDownload}>
                                  <Text>{property.downloadCount}</Text>
                                </View>
                                <View style={styles.installContainer}>
                                  <Image style={styles.iconInstall} source={_iconInstall} />
                                  <Text style={styles.textInstall} >{property.install}</Text>
                                </View>
                              </View>
                          </View>
                      </View>

                    </TouchableOpacity>
                  )
                }}
                automaticallyAdjustContentInsets={true}
              />
            </View>
          );
  }
}

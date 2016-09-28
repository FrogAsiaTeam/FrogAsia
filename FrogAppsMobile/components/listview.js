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
import Icon from 'react-native-vector-icons/Ionicons';
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
                  let _isInstall = property.isinstall;
                  //let _installApp = styles.btnInstallApp;
                  // _installApp = styles.btnOpenApp;
                  let _isSwitchButton = new Boolean(true);
                  if("true"===_isInstall){
                     _isSwitchButton = false;
                  }

                  return(
                    <TouchableOpacity onPress={()=>{
                      this.props.navigator.push({
                          id: 'AppDetail',
                          passProps:{dataItem:property}
                      })
                    }} underlayColor='gray'>
                      <View style={styles.listViewItemContainer}>

                          <Image style={styles.imgListViewItem} source={property.img} />
                          <View style={styles.listViewContent}>
                              <View style={styles.rateInforContainer}>
                                  <View style={styles.rateInforContent}>
                                      <Text style={styles.titleListViewItem}>{property.title}</Text>
                                      <Text style={styles.starcount}>{property.starcount} <Icon name="ios-star" size={17} color="#ff8c00" /></Text>
                                  </View>
                                  <View style={styles.btnContainer}>
                                    <TouchableOpacity style={_isSwitchButton?styles.btnInstallApp:styles.btnOpenApp}>
                                      <Text style={_isSwitchButton?styles.textInsllBtn:styles.textOpenBtn}>{_isSwitchButton?"INSTALL":"   OPEN   "}</Text>
                                    </TouchableOpacity>
                                  </View>
                              </View>
                              <Text>
                              {property.content}
                              </Text>
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

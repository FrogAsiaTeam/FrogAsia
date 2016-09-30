import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class CategoriesScreenRowMenu extends Component {
  
  render() {
    return (
      <View>
        <View style={styles.toolbar}>
          <Image 
            style={styles.toolbarIcon}
            resizeMode={"contain"}
            source={require('../../images/frogAsiaLogo.jpg')}
          />
          
          <Icon style={styles.toolbarMenu} name="ios-menu" size={30} color="#03A9F4" />
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#FFFFFF',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    toolbarButton:{
        width: 50,            
        color:'#1976D2',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#1976D2',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                
    },
    toolbarIcon: {
        
        width: 150,
        height: 20
    },
    toolbarMenu: {
      marginRight: 10,
    }
});
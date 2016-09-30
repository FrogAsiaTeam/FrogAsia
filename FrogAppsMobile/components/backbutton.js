import React,{Component} from 'react';
import {
 TouchableOpacity,
 Text,
 View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class BackButton extends Component{

  render(){
    return(
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Icon style={this.props.style} name="ios-arrow-back" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={{marginLeft: 30,fontWeight:'bold', color:'#ffffff', fontSize:17}}>Frog Apps</Text>
      </View>

    );
  }
}
BackButton.PropTypes = {
  onPress: React.PropTypes.func.isRequired
}

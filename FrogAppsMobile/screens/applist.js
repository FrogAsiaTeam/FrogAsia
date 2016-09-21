'use strict';
var React = require('react-native');
var {
  Component,
  View,
} = React;

class AppList extends Component{
    render(){
        return(
           <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,}}>App List screen</Text>
            </View>
        );
    }
}

module.exports = AppList;
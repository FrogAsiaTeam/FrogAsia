import { NativeModules } from 'react-native';
module.exports = NativeModules.AppUtil;
/*
Example:
import AppUtil from './services/AppUtil';
<TouchableHighlight onPress={() =>
              AppUtil.checkInstalledApp(
              {}, // no config yet 
              'com.android.deskclock',
              (isInstalled, appVersion) => { console.log('isInstalled: ' + isInstalled); console.log('appVersion: ' + appVersion); }, 
              (error) => { console.log(error)}
              
            )}>
        <Text>Button</Text>
</TouchableHighlight>

*/
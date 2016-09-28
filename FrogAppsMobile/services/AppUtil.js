import { NativeModules } from 'react-native';
module.exports = NativeModules.AppUtil;
/*
Example:
import AppUtil from './services/AppUtil';
<TouchableHighlight onPress={() =>
              AppUtil.checkInstalledApp(
              {}, // no config yet 
              'com.acheckinstalledapp.a',
              (isInstalled) => { console.log(isInstalled) }, 
              (error) => { console.log(error)}
              
            )}>*/
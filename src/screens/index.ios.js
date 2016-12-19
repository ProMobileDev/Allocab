import {Navigation} from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import SideMenu from './SideMenu';
 

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Allocab.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('Allocab.SignupScreen', () => SignupScreen);
  Navigation.registerComponent('Allocab.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('Allocab.SideMenu', () => SideMenu);
   
}

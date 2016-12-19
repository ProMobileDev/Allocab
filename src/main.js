import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Colors from './components/Colors';
// screen related book keeping
import {registerScreens} from './screens';
registerScreens();

 
Navigation.startSingleScreenApp({
  screen: {
    screen: 'Allocab.HomeScreen',
    navigatorStyle: {
    navBarBackgroundColor: Colors.BLUE_BG,
    //navBarTextColor: '#ffff00',
    //navBarSubtitleTextColor: '#ff0000',
    //navBarButtonColor: '#ffffff',
    //statusBarTextColorScheme: 'light'

    }
  },
  drawer: {
    left: {
      screen: 'Allocab.SideMenu'
    }
  }
});

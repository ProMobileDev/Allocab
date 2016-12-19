
import {Navigation} from 'react-native-navigation';
import ImageSlider from 'react-native-image-slider';
import React, {Component} from 'react';
import Colors from '../components/Colors';
import Dimensions from 'Dimensions';
import Header from '../components/Header';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';
const { width } = Dimensions.get('window');
export default class FirstTabScreen extends Component {
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
            position: 1,
            interval: null
        };
  }
  onNavigatorEvent(event) {
    
  }

  render() {
    return (

      <View style={styles.container}>
        
        <View style={styles.header}>
        <Image style={{width:280, height:110}} 
          source={require('../img/logo_.png')} 
        />
        <Text style={styles.headerText}> </Text>
        <Text style={{ fontSize:12 }}> </Text>
      </View>
       
       
        <ImageSlider 
            images={ 
                   [
                   require('../img/card1.png'),
                   require('../img/card2.png'),
                   require('../img/card3.png'),
                   require('../img/card4.png'),
                   require('../img/card4.png'),
                   require('../img/card5.png'),
                   require('../img/card6.png'),

                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/> 

        
       <View style={styles.registerFormContainer}> 
       <TouchableOpacity style={styles.button} onPress={this.onSignup.bind(this)}>
            <Text style={{ color: Colors.WHITE }}>
              Signup
            </Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.onLogin.bind(this)}>
            <Text style={{ color: Colors.WHITE }}>
              Login
            </Text>
          </TouchableOpacity>
         </View> 
        <View style={styles.container}>
          <Text style={styles.title}></Text> 
        </View>
      </View>
    );
  }

  onSignup() {
    this.props.navigator.showModal({
      screen: "Allocab.SignupScreen",
      navigatorStyle: {
          navBarBackgroundColor: Colors.BLUE_BG,
        }
    });
  }

  onLogin() {
    this.props.navigator.showModal({
      screen: "Allocab.LoginScreen",
      navigatorStyle: {
          navBarBackgroundColor: Colors.BLUE_BG,
        }
    });
     
     
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.BLUE_BG
  },
  slider:{
    flex: 1,
    paddingLeft: (width * 0.1),
    paddingRight: (width * 0.1)

  },
  registerFormContainer: {
    flex: 0.6,
    paddingLeft: (width * 0.1),
    paddingRight: (width * 0.1)
  },
   header: {
    justifyContent: 'flex-end',
    marginVertical: 5,
    alignItems: 'center',
    flex: 0.6,
    backgroundColor: 'transparent'
  },
   headerText: {
    color: Colors.GREY,
    fontSize: 20,
    marginTop: 0
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  title: {
    alignSelf: 'center',
    marginBottom: 300
  },
 button: {
    backgroundColor: Colors.LIGHT_BLUE,
    padding: 10,
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 20
  }
});

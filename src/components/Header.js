import React, {Component} from 'react';
import{ 
  Image, 
  View, 
  Text, 
  StyleSheet
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Colors from './Colors';

export default class Header extends Component {
  
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <View style={styles.header}>
        <Image style={{width:280, height:110}} 
          source={require('../img/logo_.png')} 
        />
        <Text style={styles.headerText}> </Text>
        <Text style={{ fontSize:12 }}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    marginVertical: 5,
    alignItems: 'center',
    flex: 0.3,
    backgroundColor: 'transparent'
  },
  headerText: {
    color: Colors.GREY,
    fontSize: 20,
    marginTop: 0
  }
})
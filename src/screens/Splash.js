import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {StackActions} from '@react-navigation/native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}

export default Home;

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const paramsRoute = this.props.route.params;

    return (
      <View>
        <Text>Detail</Text>
        <Text>
          `{paramsRoute.nama} Umur {paramsRoute.umur}`
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Detail;

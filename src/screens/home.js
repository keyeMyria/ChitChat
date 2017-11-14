import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Api from '../util/api';

import {observable} from 'mobx';

export default class HomeScreen extends Component{
  @observable userName;

  render(){
    return(
      <View>
        <Text></Text>
      </View>
    );
  }
}